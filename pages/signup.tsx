// pages/signup.tsx
import { useState } from "react"
import Link from "next/link"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Firebase 등으로 회원가입 로직 구현
    console.log("가입 요청:", { email, password })
  }

  return (
    <div style={{
      maxWidth: "400px",
      margin: "4rem auto",
      padding: "1rem",
      border: "1px solid #ddd",
      borderRadius: "0.5rem",
      textAlign: "center"
    }}>
      <h1 style={{ marginBottom: "1rem" }}>회원가입</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            fontSize: "1rem",
            borderRadius: "0.375rem",
            cursor: "pointer"
          }}
        >
          가입하기
        </button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        이미 계정이 있으신가요?{" "}
        <Link href="/signin"><a style={{ color: "#007BFF" }}>로그인</a></Link>
      </p>
    </div>
  )
}
