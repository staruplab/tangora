-- TANGORA: Supabase schema
-- Run this entire script in Supabase > SQL Editor.
create table if not exists public.user_workspace (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_workspace enable row level security;

drop policy if exists "Users can read their own workspace" on public.user_workspace;
create policy "Users can read their own workspace"
on public.user_workspace for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert their own workspace" on public.user_workspace;
create policy "Users can insert their own workspace"
on public.user_workspace for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update their own workspace" on public.user_workspace;
create policy "Users can update their own workspace"
on public.user_workspace for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- No public read/write policies. Each signed-in user can access only their own JSON workspace.
