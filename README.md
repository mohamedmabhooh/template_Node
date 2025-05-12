# 🧱 قالب مشروع Node.js

هذا المشروع هو قالب جاهز لمشاريع Node.js باستخدام Express و MongoDB، تم تجهيزه ببنية منظمة وقابلة للتوسعة لتسريع عملية التطوير وبناء REST APIs بطريقة احترافية.

---

## ✅ مميزات القالب

- إعداد جاهز لـ Express
- اتصال بقاعدة البيانات MongoDB باستخدام Mongoose
- إدارة متغيرات البيئة باستخدام `config.env`
- هيكلية مجلدات منظمة (routes, controllers, models, middlewares)
- معالجة مركزية للأخطاء
- استخدام مكتبات الحماية مثل `helmet` و `cors`
- تسجيل الطلبات عبر `morgan`

---

## 🧩 هيكل المشروع

```
template_Node/
│
├── config/           # إعدادات الاتصال بقاعدة البيانات
├── controllers/      # منطق تنفيذ كل مسار
├── middlewares/      # Middleware مخصص (مثل معالجة الأخطاء)
├── models/           # تعريفات قواعد البيانات باستخدام Mongoose
├── routes/           # تعريف المسارات
├── utils/            # دوال مساعدة
├── app.js            # إعداد التطبيق
├── server.js         # نقطة بدء التشغيل
├── config.env        # متغيرات البيئة (يجب عدم مشاركته علنًا)
└── .gitignore        # لاستثناء الملفات من التتبع
```

---

## ⚙️ طريقة التشغيل

### 1. نسخ المستودع

```bash
git clone https://github.com/mohamedmabhooh/template_Node.git
cd template_Node
```

### 2. تثبيت الحزم

```bash
npm install
```

### 3. إعداد متغيرات البيئة

أنشئ ملفًا باسم `config.env` وضع فيه الإعدادات التالية:

```env
PORT=5000
MONGO_URI=رابط_قاعدة_البيانات_الخاصة_بك
NODE_ENV=development
```

### 4. تشغيل التطبيق

```bash
npm run dev  # للتشغيل في وضع التطوير باستخدام nodemon
```

---

## 📜 السكربتات

| الأمر             | الوظيفة                         |
|------------------|----------------------------------|
| `npm start`      | تشغيل التطبيق بشكل عادي         |
| `npm run dev`    | تشغيل التطبيق باستخدام nodemon |

---

## 👨‍💻 تم إعداد القالب بواسطة

**[Mohammed Mabhooh](https://github.com/mohamedmabhooh)** — لتسريع بدء مشاريع Node.js بأسلوب احترافي ومنظم.
