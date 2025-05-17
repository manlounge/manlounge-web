// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 아래에 복사한 Firebase 설정 객체 붙여넣기
const firebaseConfig = {
  apiKey: "여기에-복사한-apiKey",
  authDomain: "여기에-복사한-authDomain",
  projectId: "여기에-복사한-projectId",
  storageBucket: "여기에-복사한-storageBucket",
  messagingSenderId: "여기에-복사한-messagingSenderId",
  appId: "여기에-복사한-appId"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth, Firestore 인스턴스 내보내기
export const auth = getAuth(app);
export const db = getFirestore(app);
