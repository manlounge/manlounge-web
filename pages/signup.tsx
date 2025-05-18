// pages/signup.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  // 1. 회원가입하기 클릭 시 경고창 + PASS 버튼 노출
  const handleSignupClick = () => {
    alert("성인 남성만 가입할 수 있어요");
    setShowPass(true);
  };

  // 2. PASS 버튼 클릭 시 /login 으로 이동
  const handlePassClick = () => {
    router.push("/login");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>회원가입</h1>
      {!showPass ? (
        <button
          onClick={handleSignupClick}
          style={{
            padding: "1rem",
            width: "100%",
            marginBottom: "1rem",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          회원가입하기
        </button>
      ) : (
        <button
          onClick={handlePassClick}
          style={{
            padding: "1rem",
            width: "100%",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          PASS로 본인인증 하기
        </button>
      )}
    </div>
  );
}
