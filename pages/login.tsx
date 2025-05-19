// pages/login.tsx
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [init, setInit]         = useState(true);

  // 이미 로그인된 상태면 홈으로
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/");
      else setInit(false);
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

  const handleSocial = (url: string) => {
    window.location.href = url;
  };

  if (init) return <p className="text-center py-4">로딩 중...</p>;

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>

      {/* 카카오 로그인 */}
      <button
        className="w-full py-3 mb-4 bg-[#FEE500] text-black rounded-md"
        onClick={() => handleSocial("/api/auth/kakao")}
      >
        🗨️ 카카오로 시작하기
      </button>

      {/* 네이버 로그인 */}
      <button
        className="w-full py-3 mb-6 bg-green-600 text-white rounded-md flex items-center justify-center"
        onClick={() => handleSocial("/api/auth/naver")}
      >
        {/* SVG 아이콘 파일 준비 후 <img src="/icons/naver-logo.svg" ... /> 로 대체 */}
        ❏ 네이버로 시작하기
      </button>

      {/* 이메일 로그인 폼 */}
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border rounded"
      />

      <button
        className="w-full py-3 mb-4 bg-blue-600 text-white rounded-md"
        onClick={handleEmailLogin}
      >
        이메일로 로그인
      </button>

      <p className="text-center">
        아직 계정이 없으신가요?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          회원가입하기
        </a>
      </p>
    </div>
  );
}
