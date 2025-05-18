// pages/auth/email.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useRouter } from "next/router";

export default function AuthEmail() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleClick = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, pw);
      } else {
        await createUserWithEmailAndPassword(auth, email, pw);
      }
      router.push("/");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "360px", margin: "auto" }}>
      <h2>{isLogin ? "이메일 로그인" : "이메일로 회원가입"}</h2>
      <input
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      />
      <button
        onClick={handleClick}
        style={{
          width: "100%",
          padding: 12,
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {isLogin ? "로그인" : "회원가입"}
      </button>
      <p
        style={{ marginTop: 12, color: "#007BFF", cursor: "pointer" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "회원가입으로 전환" : "로그인으로 전환"}
      </p>
    </div>
  );
}
