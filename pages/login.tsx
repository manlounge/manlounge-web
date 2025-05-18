// pages/login.tsx
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setInitializing] = useState(true);

  // 이미 로그인된 상태면 홈으로
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/");
      else setInitializing(false);
    });
    return () => unsub();
  }, [router]);

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (e: any) {
      alert("로그인 실패: " + e.message);
    }
  };

  const handleSocial = (path: string) => {
    window.location.href = path;
  };

  if (initializing) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>로그인</h2>

      {/* 소셜 로그인 버튼 */}
      <button
        onClick={() => handleSocial("/api/auth/kakao")}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          background: "#FEE500",
          color: "#000",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        🗨️ 카카오로 시작하기
      </button>

      {/* 이메일 로그인 폼 */}
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button
        onClick={handleEmailLogin}
        style={{
          width: "100%",
          padding: "0.75rem",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        이메일로 로그인
      </button>

      <p style={{ marginTop: "1rem" }}>
        아직 계정이 없으신가요?{" "}
        <a href="/signup" style={{ color: "#007BFF" }}>
          회원가입하기
        </a>
      </p>
    </div>
  );
}
