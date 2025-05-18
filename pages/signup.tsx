// pages/signup.tsx
import { useState, useRef } from "react"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const formRef = useRef<HTMLDivElement>(null)

  // 소셜 로그인 / 회원가입 시작
  const handleSocial = (url: string) => {
    window.location.href = url
  }

  // 이메일 폼으로 스크롤
  const handleEmailClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // 이메일 회원가입 제출
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Firebase 등으로 이메일/비밀번호 회원가입 처리
    console.log("이메일 가입 요청:", { email, password })
  }

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        지금 가입하면 최대 혜택!
      </h1>

      {/* 1) 소셜 / 이메일 선택 버튼 */}
      <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
        <button
          style={{
            backgroundColor: "#FEE500",
            color: "#000",
            padding: "0.75rem",
            border: "none",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
          onClick={() => handleSocial("/api/auth/kakao")}
        >
          카카오로 3초만에 시작하기
        </button>
        <button
          style={{
            backgroundColor: "#03C75A",
            color: "#fff",
            padding: "0.75rem",
            border: "none",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
          onClick={() => handleSocial("/api/auth/naver")}
        >
          네이버로 시작하기
        </button>
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "0.75rem",
            border: "none",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
          onClick={handleEmailClick}
        >
          이메일로 시작하기
        </button>
      </div>

      {/* 2) 이메일/비밀번호 폼 */}
      <div ref={formRef}>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.5rem",
              fontSize: "1rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "0.75rem",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  )
}
