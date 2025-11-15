
# 🤰 Pregnancy Tracker App

A complete mobile application built using **React Native**, **Expo Router**, and **NativeWind**.  


---

# 🚀 Setup Instructions

### 1️⃣ Create a New Expo App (optional)
```bash
npx create-expo-app@latest
````

---

### 2️⃣ Move into the Project Directory

```bash
cd PragnencyTracker
```

---

### 3️⃣ Install All Dependencies

```bash
npm install
```

---

# ⚙️ Install Required Libraries

## 📌 NativeWind + TailwindCSS

```bash
npm install nativewind
npm install tailwindcss
npm install react-native-reanimated
```

### Initialize Tailwind:

```bash
npx tailwindcss init
```

---

## 📌 Expo Router

```bash
npx expo install expo-router
```

---

## 📌 Safe Area Context

```bash
npx expo install react-native-safe-area-context
```

---

## 📌 Gesture Handler

```bash
npx expo install react-native-gesture-handler
```

---

## 📌 Expo Utilities

```bash
npx expo install expo-splash-screen
npx expo install expo-status-bar
```

---

## 📌 Audio & Video Support (Required for your video player)

```bash
npx expo install expo-av
```

---

## 📌 Emoji Support (For Mood Tracker / Custom Moods)

```bash
npm install emoji-datasource
# or
npm install react-native-emoji
```

---

# ▶️ Project Commands

### Start the development server

```bash
npx expo start
```

---

### Run on Android

```bash
npx expo run:android
```

---

### Run on iOS

```bash
npx expo run:ios
```

---

### Reset the project (optional utility)

```bash
npm run reset-project
```

---

# 🧩 Recommended VS Code Extensions

```bash
# ESLint (helps catch errors)
code --install-extension dbaeumer.vscode-eslint

# Prettier (code formatting)
code --install-extension esbenp.prettier-vscode

# Tailwind CSS IntelliSense (NativeWind support)
code --install-extension bradlc.vscode-tailwindcss

# React & Native Snippets
code --install-extension dsznajder.es7-react-js-snippets

# TypeScript Grammar Support
code --install-extension ms-vscode.typescript-javascript-grammar
```

---

# 📦 Project Features Overview

✔️ **Authentication Flow**
✔️ **File-based Routing using Expo Router**
✔️ **Home Dashboard with Components:**

* Baby Size Card
* Weekly FAQ
* Mood Tracker
* Upcoming Appointment
* Garbha Sanskar Activities
* Pregnancy Tips
* Symptom Tracker
* Testimonials
* Videos Section
* Shop Links

✔️ **Mama’s Kit Tools:**

* Due Date Calculator
* Pregnancy Journal
* Baby Kick Counter
* Water Intake Tracker
* Food Tracking
* Daily Activities
* Travel Checklist
* Baby Name List

✔️ **AI Chat Assistant**
✔️ **Beautiful Swipeable Cards UI**
✔️ **Fully Responsive with NativeWind**

---

# 🗂 Folder Structure

```
PragnencyTracker
│── app/               # App screens (Expo Router)
│── components/        # Reusable UI components
│── constants/         # Images, JSON-like data
│── assets/            # Images & icons
│── types/             # Image type declarations
│── tailwind.config.js
│── babel.config.js
│── metro.config.js
│── package.json
```



