// pages/signup.tsx
import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);

  // 1) 처음엔 “회원가입하기”만 보임
  // 2) 눌러야 소셜/이메일 버튼이 보임
  const handleStart = () => {
    setShowOptions(true);
  };

  // 소셜 로그인 핸들러 예시
  const handleKakao = () => {
    // TODO: 카카오 OAuth 시작
    window.location.href = "/api/auth/kakao"; 
  };
  const handleNaver = () => {
    // TODO: 네이버 OAuth 시작
    window.location.href = "/api/auth/naver";
  };
  const handleEmail = () => {
    router.push("/signup/email");
  };

  return (
    <div style={{ padding: 24, maxWidth: 360, margin: "auto", textAlign: "center" }}>
      <h1>로그인 / 가입</h1>
      <p style={{ fontWeight: 700, fontSize: 18 }}>
        지금 가입하면 최대 혜택!<br/>
        특별 크레딧과 웰컴 쿠폰 증정
      </p>
      <img
        src="/welcome-cat.png"
        alt="환영 이미지"
        style={{ width: "100%", borderRadius: 8, margin: "16px 0" }}
      />

      {!showOptions ? (
        <button
          onClick={handleStart}
          style={{
            width: "100%", padding: 12, background: "#FFCD00",
            color: "#000", border: "none", borderRadius: 4, fontSize: 16
          }}
        >
          이메일로 시작하기
        </button>
      ) : (
        <>
          <button
            onClick={handleKakao}
            style={{
              width: "100%",
              padding: 12,
              background: "#FEE500",
              color: "#000",
              border: "none",
              borderRadius: 4,
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            🗨️ 카카오로 3초만에 시작하기
          </button>
          <button
            onClick={handleNaver}
            style={{
              width: "100%",
              padding: 12,
              background: "#03C75A",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            🅽 네이버로 시작하기
          </button>
          <button
            onClick={handleEmail}
            style={{
              width: "100%",
              padding: 12,
              background: "#fff",
              color: "#333",
              border: "1px solid #ccc",
              borderRadius: 4,
              fontSize: 16,
            }}
          >
            이메일로 시작하기
          </button>
        </>
      )}
    </div>
  );
}
