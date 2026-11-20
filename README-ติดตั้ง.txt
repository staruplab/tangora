# TANGORA PWA — วิธีติดตั้งและเผยแพร่

## ไฟล์
- index.html: เว็บแอป TANGORA
- manifest.json: ข้อมูลแอปสำหรับติดตั้ง
- sw.js: Service Worker สำหรับ cache shell และเปิดหน้าแอปเมื่อออฟไลน์
- icons/: ไอคอนแอป

## วิธีทดสอบ
1. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นโฮสติ้งที่รองรับ HTTPS เช่น Netlify, Vercel หรือ GitHub Pages
2. ต้องคงโครงสร้างโฟลเดอร์เดิมไว้ โดย index.html, manifest.json และ sw.js อยู่ระดับเดียวกัน
3. เปิด URL ผ่าน Chrome/Edge แล้วเลือกปุ่ม “ติดตั้งแอป” หรือเมนู Install app
4. บน iPhone/iPad ใช้ Safari > Share > Add to Home Screen

## หมายเหตุ
- PWA ต้องให้บริการผ่าน HTTPS (หรือ localhost สำหรับทดสอบ) จึงจะลงทะเบียน Service Worker และติดตั้งได้
- การติดตั้งเป็นแอปเว็บ ไม่ใช่การเผยแพร่ใน App Store/Google Play
- แอปมีระบบสมาชิกและซิงก์ข้อมูลผ่าน Supabase (ตั้งค่าใน supabase-config.js และรัน supabase/schema.sql) โดยยังเก็บสำเนาใน Local Storage ของเครื่องด้วย; Service Worker ใช้แบบ network-first (โหลดไฟล์ล่าสุดก่อน แล้วค่อยใช้แคชเมื่อออฟไลน์)
- ข้อมูลภายนอก เช่น Google Fonts อาจต้องเชื่อมต่ออินเทอร์เน็ต
