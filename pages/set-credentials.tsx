// pages/set-credentials.tsx
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  EmailAuthProvider,
  linkWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/router";

export default function SetCredentials() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();

  // 1. 인증된 사용자만 이 페이지 접근
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        // 휴대폰 인증 안 된 상태면 로그인 페이지로
        router.replace("/login");
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, [router]);

  // 2. 이메일/비번 자격 링크
  const handleSet = async () => {
    if (!user) return alert("먼저 휴대폰 인증을 완료해주세요.");
    if (!email || !password) return alert("이메일과 비밀번호를 모두 입력해주세요.");
    try {
      // Firebase 자격 생성
      const credential = EmailAuthProvider.credential(email, password);
      // 현재 사용자 계정에 링크
      await linkWithCredential(user, credential);
      alert("ID/PW 설정이 완료되었습니다! 다음부터는 ID/PW로 로그인하세요.");
      router.replace("/signin");
    } catch (e: any) {
      console.error(e);
      alert("설정 오류: " + e.message);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>ID·비밀번호 설정</h2>
      <input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button
        onClick={handleSet}
        style={{ width: "100%", padding: "0.75rem", background: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}
      >
        설정 완료
      </button>
    </div>
  );
}
