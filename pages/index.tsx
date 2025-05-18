// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>🎉 맨라운지에 오신 걸 환영합니다 🎉</h1>
      <p>솔직한 이야기, 이제 맨라운지에서.</p>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/auth" passHref>
          <button
            style={{
              padding: "1rem 2rem",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            서비스 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}
