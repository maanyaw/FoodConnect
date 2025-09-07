# 🍽️ Food Connect

**Food Connect** is a community-first web platform built to bridge the gap between food donors, shelters, and volunteers. Designed with empathy and efficiency in mind, the platform reduces food wastage and tackles hunger by enabling real-time coordination, transparent needs-posting, and seamless food distribution.

---

## 🚀 Features

### 🌐 Frontend
- Responsive pages built with **HTML, CSS, and JavaScript**.
- **Home Page** – Overview of Food Connect’s mission.
- **Find Food** – Browse and locate available food shelters.
- **Food Shelter** – Register and log in as a shelter to receive donations.
- **Donate** – Secure donation form with **QR-based payment**.
- **Volunteer** – Submit volunteer applications.
- **Volunteers Available** – Admin view to see all registered volunteers.
- **Contact Us** – Submit inquiries (email notifications powered by Nodemailer).
- **About Us** – Mission, vision, events, and community impact.

### ⚙️ Backend (Node.js + Express + MongoDB)
- **MongoDB models**:
  - `FoodShelter` → shelter signup/signin
  - `Donation` → donation records
  - `Volunteer` → volunteer registrations
  - `Contact` → contact form submissions
  - `MainpageSubscriber` → newsletter subscriptions
- **REST API routes**:
  - `/api/food-shelter` → shelter management
  - `/api/donations` → donation handling
  - `/api/volunteer` → volunteer management
  - `/api/contact` → contact form + email
  - `/api/mainpage` → newsletter subscriptions
- **Authentication** with password hashing (**bcrypt**).
- **Email Notifications** via **Nodemailer** (Gmail SMTP).

---
## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** bcrypt (password hashing)
- **Mailing:** Nodemailer + Gmail SMTP

---

<img width="1112" height="664" alt="image" src="https://github.com/user-attachments/assets/4fb39884-046f-4d48-ab2b-06006344a180" />
<img width="1106" height="696" alt="image" src="https://github.com/user-attachments/assets/0e82c7d0-2f18-4d33-9b8d-e2fa605267f9" />
<img width="1064" height="614" alt="image" src="https://github.com/user-attachments/assets/7414ba84-d133-4930-b10f-e6df7a099b82" />
<img width="1112" height="661" alt="image" src="https://github.com/user-attachments/assets/776109be-a9fd-41b0-b19a-3001e6e5a8d7" />
<img width="1098" height="544" alt="image" src="https://github.com/user-attachments/assets/8afadd79-8f8a-4695-b2d3-98c3e35ed73f" />
<img width="1116" height="671" alt="image" src="https://github.com/user-attachments/assets/138e39e3-62dc-426f-8289-faf6689e6ddc" />
<img width="1090" height="595" alt="image" src="https://github.com/user-attachments/assets/00f4c720-60d5-4347-b03b-0f2966dffa8a" />
<img width="1033" height="443" alt="image" src="https://github.com/user-attachments/assets/f351dfca-7ea8-4658-b9be-f71fd4885527" />
<img width="1077" height="661" alt="image" src="https://github.com/user-attachments/assets/4e791de5-5e2b-4a65-ba10-e1e669877094" />
<img width="1034" height="803" alt="image" src="https://github.com/user-attachments/assets/f1f06938-6e29-4465-b924-ed9820eef90f" />
<img width="832" height="480" alt="image" src="https://github.com/user-attachments/assets/a17735ad-be95-40a4-baf8-8f92f53c4fbe" />
<img width="822" height="437" alt="image" src="https://github.com/user-attachments/assets/9f8fea3c-a409-4cdd-aeb5-847af847d174" />
<img width="835" height="518" alt="image" src="https://github.com/user-attachments/assets/8b79289f-5be1-4758-97c4-b4f989aadd8e" />
<img width="831" height="444" alt="image" src="https://github.com/user-attachments/assets/6912ca09-6e69-41b2-8595-cebeec57818f" />
<img width="839" height="501" alt="image" src="https://github.com/user-attachments/assets/e93cb378-6ee7-42d5-b2a9-a105412bc446" />
<img width="810" height="634" alt="image" src="https://github.com/user-attachments/assets/ef9c3207-fde4-4090-85a7-37f30e15acce" />
<img width="846" height="453" alt="image" src="https://github.com/user-attachments/assets/c069d621-3681-40e2-834a-f251adfc7c59" />
<img width="812" height="508" alt="image" src="https://github.com/user-attachments/assets/d15ad95c-e323-482a-aac1-c055b4c887ee" />
<img width="894" height="464" alt="image" src="https://github.com/user-attachments/assets/eec42c8c-f4a8-4799-9a02-85d06a65ef7d" />
<img width="904" height="601" alt="image" src="https://github.com/user-attachments/assets/36b6817c-3c99-4d7f-8eeb-994b2c9fad97" />
<img width="606" height="811" alt="image" src="https://github.com/user-attachments/assets/570c80b7-9d82-4b0c-8473-ae36c20c9afe" />
<img width="638" height="454" alt="image" src="https://github.com/user-attachments/assets/2e50059e-ef7a-4729-9962-ef3f4f2ce789" />
<img width="680" height="379" alt="image" src="https://github.com/user-attachments/assets/614a51c9-e94f-47f0-936f-01fff8acd1d6" />
<img width="606" height="359" alt="image" src="https://github.com/user-attachments/assets/f13e7530-404b-4b4c-8a8a-2ba26712009c" />
<img width="637" height="528" alt="image" src="https://github.com/user-attachments/assets/191d2977-8527-4cbf-9a92-1ea4195ae3a3" />
<img width="646" height="468" alt="image" src="https://github.com/user-attachments/assets/fc2569be-5b1b-4d24-903a-a7ec762411b7" />
<img width="565" height="686" alt="image" src="https://github.com/user-attachments/assets/396eda52-f03c-41a7-aade-626d47f355f7" />
<img width="880" height="571" alt="image" src="https://github.com/user-attachments/assets/86c9a0c4-2124-4841-85ad-81e3ccc89970" />
<img width="802" height="565" alt="image" src="https://github.com/user-attachments/assets/c99d26e0-5a27-44cc-b4bc-1e6d626c9005" />
<img width="850" height="570" alt="image" src="https://github.com/user-attachments/assets/732ae89e-3a06-4c1e-a1a0-7877fe17a785" />
<img width="841" height="578" alt="image" src="https://github.com/user-attachments/assets/eeaf777c-3ccc-4594-819f-ea776562550e" />

## Testing
<img width="907" height="1006" alt="image" src="https://github.com/user-attachments/assets/67f3781d-47ba-4944-8055-786345f67184" />
<img width="771" height="895" alt="image" src="https://github.com/user-attachments/assets/9c6ae47a-2e74-4c83-a317-a8a842d3958a" />
<img width="770" height="650" alt="image" src="https://github.com/user-attachments/assets/d24b2daf-58d5-4249-8449-aea2b8ec4c33" />





## 👩‍💻 Author

**Maanya Walia** 
























