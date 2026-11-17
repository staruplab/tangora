# TANGORA — GitHub + Supabase + PWA

## 1) เตรียม Supabase
1. สร้างโปรเจกต์ใหม่ที่ https://supabase.com
2. เปิด SQL Editor แล้วรันไฟล์ `supabase/schema.sql`
3. ไปที่ Project Settings → API แล้วคัดลอก Project URL และ anon/public key
4. ใส่ค่าลงใน `supabase-config.js`
5. ไปที่ Authentication → URL Configuration แล้วตั้ง Site URL เป็น URL ของ GitHub Pages และเพิ่ม Redirect URL ให้ตรงกับ URL ดังกล่าว

## 2) เปิดใช้งาน Email confirmation
ไปที่ Authentication → Providers → Email แล้วเปิด Confirm email
ตั้งค่า SMTP ที่เหมาะสมก่อนใช้งานจริง เพื่อให้ส่งอีเมลยืนยันได้อย่างน่าเชื่อถือ

## 3) อัปโหลดขึ้น GitHub
1. สร้าง repository ใหม่ เช่น `tangora`
2. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดในชุดนี้ไว้ที่ root ของ repository
3. ไปที่ Settings → Pages
4. เลือก Deploy from a branch → `main` → `/ (root)` → Save
5. รอ GitHub Pages เผยแพร่เว็บไซต์

URL จะอยู่ในรูปแบบ `https://ชื่อผู้ใช้.github.io/tangora/`
นำ URL นี้ไปตั้งใน Supabase Authentication URL Configuration

## 4) ติดตั้ง PWA
เปิด URL ผ่าน Chrome/Edge แล้วเลือก Install app
บน iPhone/iPad ใช้ Safari → Share → Add to Home Screen

## 5) ข้อควรระวัง
- `supabase-config.js` ใช้ anon/public key ได้ แต่ห้ามนำ `service_role` key มาใส่ในเว็บ
- ตาราง `user_workspace` เปิด Row Level Security และจำกัดข้อมูลด้วย `auth.uid()`
- ต้นแบบนี้เก็บข้อมูลแอปทั้งชุดใน JSONB ต่อผู้ใช้หนึ่งคน เหมาะกับการเริ่มต้นและทดสอบ หากใช้งานจริงในองค์กรควรแยกตารางและเพิ่ม validation/backup
- Local Storage เป็น cache ในเครื่อง ส่วนข้อมูลหลักจะซิงก์กับ Supabase เมื่อเข้าสู่ระบบ
- Email confirmation ต้องตั้งค่า Supabase ให้ถูกต้องและทดสอบลิงก์ยืนยันจริง
- GitHub Pages เป็น static hosting ไม่รองรับ secret server-side; อย่าเก็บ secrets ใน repository
- การคำนวณภาษีและเงินเดือนในต้นแบบเป็นการประมาณ ต้องตรวจสอบก่อนใช้เป็นข้อมูล payroll อย่างเป็นทางการ
