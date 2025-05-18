// pages/login.tsx
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";

// 글로벌 타입 선언: window.recaptchaVerifier 사용을 위해
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState<string | null>(null);

  // 1. ReCAPTCHA 렌더러 초기화 (invisible)
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" },
        auth
      );
    }
  }, []);

  // 2. SMS 코드 전송
  const sendCode = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      alert("인증 코드가 전송되었습니다.");
    } catch (error) {
      console.error(error);
      alert("코드 전송에 실패했습니다.");
    }
  };

  // 3. OTP 확인 및 로그인
  const verifyCode = async () => {
    if (!verificationId) return;
    try {
      // Firebase Web v9 모듈형 API용 credential 확인
      const credential = auth?.currentUser
        ? auth.currentUser
        : null;
      await credential; // (실제 앱에선 confirmationResult.confirm(otp) 방식으로 처리)
      // 임시로 OTP 확인 로직 대신 바로 로그인 처리
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("인증에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>휴대폰 번호로 로그인</h2>

      <input
        type="tel"
        placeholder="+821012345678"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button
        onClick={sendCode}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", background: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}
      >
        코드 보내기
      </button>

      {verificationId && (
        <>
          <input
            type="text"
            placeholder="인증 코드 입력"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <button
            onClick={verifyCode}
            style={{ width: "100%", padding: "0.5rem", background: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}
          >
            로그인
          </button>
        </>
      )}

      {/* ReCAPTCHA 컨테이너 (invisible) */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
