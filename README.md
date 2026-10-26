# Smart FET Assistant

تطبيق ويب يعمل بدون إنترنت لتوليد جداول مدرسية وتصديرها إلى برنامج FET.

## الملفات

```
smart-fet-assistant/
├── index.html
├── styles.css
├── sw.js
├── README.md
├── js/
│   ├── app.js
│   ├── smart-core.js
│   ├── fet-exporter.js
│   ├── duty-engine.js
│   ├── assignment-engine.js
│   └── sync-engine.js
└── data/
    └── default.json
```

## النشر على GitHub Pages

1. أنشئ مستودعاً عاماً (Public) على github.com.
2. ارفع محتويات المجلد (مع بقاء `js` و `data` كمجلدات) بحيث يكون `index.html` في الجذر.
3. اذهب إلى **Settings ← Pages**.
4. اختر **Deploy from a branch** ثم الفرع `main` والمجلد `/ (root)`، واضغط **Save**.
5. افتح الرابط: `https://اسم-حسابك.github.io/اسم-المستودع/`

## أوامر الدردشة

| الأمر | الوظيفة |
|---|---|
| `help` | قائمة الأوامر |
| `generate timetable` | توليد الجدول كاملاً |
| `assign subjects` | توزيع المواد على الأساتذة |
| `generate duty` | توليد جدول الحراسة |
| `export fet` | تنزيل ملف FET XML |
| `status` | حالة النظام |
| `fairness` | توزيع الحمولة ومؤشر العدالة |
| `add teacher <name> for <subject>` | إضافة أستاذ |

## ملاحظات

- تُحفظ البيانات في المتصفح (localStorage).
- يجب تشغيل التطبيق عبر خادم (مثل GitHub Pages) وليس بفتح `index.html` مباشرة، لأنه يستعمل ES modules.
