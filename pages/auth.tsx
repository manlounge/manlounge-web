// pages/auth.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const [readyEmail, setReadyEmail] = useState(false);

  return (
    <div style={{ padding: "2rem", maxWidth: "360px", margin: "auto", textAlign: "center" }}>
      <h2>로그인 / 회원가입</h2>
      <p>아래 방법으로 간편하게 시작하세요.</p>

      <button
        onClick={() => (window.location.href = "/api/auth/kakao")}
        style={{
          width: "100%",
          padding: 12,
          background: "#FEE500",
          color: "#000",
          border: "none",
          borderRadius: 4,
          marginBottom: 8,
          cursor: "pointer",
        }}
      >
        🗨️ 카카오로 3초만에 시작하기
      </button>

      <button
        onClick={() => (window.location.href = "/api/auth/naver")}
        style={{
          width: "100%",
          padding: 12,
          background: "#03C75A",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          marginBottom: 8,
          cursor: "pointer",
        }}
      >
        🅽 네이버로 시작하기
      </button>

      {/* 이메일 흐름 활성화 */}
      {!readyEmail ? (
        <button
          onClick={() => setReadyEmail(true)}
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
          이메일로 시작하기
        </button>
      ) : (
        router.push("/auth/email")
      )}
    </div>
);
}
