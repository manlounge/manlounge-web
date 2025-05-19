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
    <div
      style={{
        padding: "2rem",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>로그인</h2>

      {/* 카카오 버튼 */}
      <button
        onClick={() => handleSocial("/api/auth/kakao")}
        style={{
          width: "100%",
          padding: "0.75rem",
          background: "#FEE500",
          color: "#000",
          border: "none",
          borderRadius: "4px",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        <span style={{ marginRight: "0.5rem" }}>💬</span>
        카카오로 시작하기
      </button>

      {/* 네이버 버튼 */}
      <button
        onClick={() => handleSocial("/api/auth/naver")}
        style={{
          width: "100%",
          padding: "0.75rem",
          background: "#03C75A",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          src="/icons/naver-logo.svg"
          alt="Naver"
          style={{ width: "24px", height: "24px", marginRight: "0.5rem" }}
        />
        네이버로 시작하기
      </button>

      {/* 구분선 */}
      <div
        style={{
          margin: "1rem 0",
          color: "#999",
          fontSize: "0.9rem",
        }}
      >
        또는
      </div>

      {/* 이메일 로그인 폼 */}
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "0.75rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "1rem",
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "1rem",
        }}
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
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        이메일로 로그인
      </button>

      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        아직 계정이 없으신가요?{" "}
        <a href="/signup" style={{ color: "#007BFF" }}>
          회원가입하기
        </a>
      </p>
    </div>
  );
}
