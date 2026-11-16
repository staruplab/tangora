// TANGORA Supabase client configuration
// Publishable key is intended for browser use. Never place a secret/service_role key here.
window.TANGORA_SUPABASE_URL = "https://anwbakzwaqrzlzmqcgrs.supabase.co";
window.TANGORA_SUPABASE_ANON_KEY = "sb_publishable_y7Tsids08Q-wzLkJ6TmmgA_QXtds7Sk";

if (window.supabase && window.TANGORA_SUPABASE_URL.startsWith("https://") &&
    window.TANGORA_SUPABASE_ANON_KEY.startsWith("sb_publishable_")) {
  window.supabaseClient = window.supabase.createClient(
    window.TANGORA_SUPABASE_URL,
    window.TANGORA_SUPABASE_ANON_KEY
  );
}
