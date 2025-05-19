// pages/signup.tsx
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const [terms, setTerms] = useState({
    privacy: false,
    service: false,
    marketing: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace("/");
    });
    return () => unsub();
  }, [router]);

  const validateAndOpenModal = () => {
    setError("");
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    if (password.length < 8) {
      setError("비밀번호는 최소 8자리 이상이어야 합니다.");
      return;
    }
    setShowModal(true);
  };

  const handleAgreeAll = () => {
    const newValue = !agreeAll;
    setAgreeAll(newValue);
    setTerms({
      privacy: newValue,
      service: newValue,
      marketing: newValue,
    });
  };

  const handleTermChange = (term: string) => {
    const newTerms = { ...terms, [term]: !terms[term as keyof typeof terms] };
    setTerms(newTerms);

    const allChecked = Object.values({ ...newTerms, marketing: true }).every(Boolean);
    setAgreeAll(allChecked);
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (e: any) {
      setError(`Firebase: ${e.message}`);
    }
  };

  const canSubmit = terms.privacy && terms.service;

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h1>이메일로 가입하기</h1>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
      />
      <button onClick={validateAndOpenModal} style={{ width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none" }}>
        가입하기
      </button>
      {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      <p style={{ marginTop: 20 }}>이미 계정이 있으신가요? <a href="/login" style={{ color: "#007bff" }}>로그인</a></p>

      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center",
        }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 10, width: "90%", maxWidth: 400 }}>
            <h3>약관에 모두 동의</h3>
            <label>
              <input type="checkbox" checked={agreeAll} onChange={handleAgreeAll} />
              <strong style={{ marginLeft: 8 }}>약관에 모두 동의</strong>
            </label>
            <hr />
            <div style={{ marginBottom: 10 }}>
              <label>
                <input type="checkbox" checked={terms.privacy} onChange={() => handleTermChange("privacy")} />
                <span style={{ marginLeft: 8 }}>개인정보 수집 및 이용 동의 (필수)</span>
              </label>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label>
                <input type="checkbox" checked={terms.service} onChange={() => handleTermChange("service")} />
                <span style={{ marginLeft: 8 }}>서비스 이용약관 동의 (필수)</span>
              </label>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label>
                <input type="checkbox" checked={terms.marketing} onChange={() => handleTermChange("marketing")} />
                <span style={{ marginLeft: 8 }}>혜택 · 마케팅 알림 수신 동의 (선택)</span>
              </label>
            </div>
            <button
              onClick={handleSignup}
              disabled={!canSubmit}
              style={{
                width: "100%",
                padding: 10,
                background: canSubmit ? "#000" : "#ccc",
                color: "#fff",
                border: "none",
                cursor: canSubmit ? "pointer" : "not-allowed"
              }}
            >
              동의하고 시작하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
