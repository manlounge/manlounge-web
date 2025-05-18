// pages/login.tsx
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState<string | null>(null);

  // 1. ReCAPTCHA 렌더러 초기화
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
      const credential = await auth.signInWithPhoneNumber(
        phone,
        verificationId
      );
      // 로그인 성공 시 홈으로 이동
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("인증에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>휴대폰 번호로 로그인</h2>
      <div>
        <input
          type="tel"
          placeholder="+821012345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
        />
        <button onClick={sendCode} style={{ width: "100%", padding: "0.5rem" }}>
          코드 보내기
        </button>
      </div>

      {verificationId && (
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="인증 코드 입력"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          />
          <button
            onClick={verifyCode}
            style={{ width: "100%", padding: "0.5rem" }}
          >
            로그인
          </button>
        </div>
      )}

      {/* ReCAPTCHA 컨테이너 (invisible) */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
