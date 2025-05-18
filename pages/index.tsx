// pages/index.tsx
import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🎉 맨라운지에 오신 걸 환영합니다 🎉
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        솔직한 이야기, 이제 맨라운지에서.
      </p>

      <Link href="/signup" passHref>
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
        >
          서비스 시작하기
        </button>
      </Link>
    </div>
  )
}
