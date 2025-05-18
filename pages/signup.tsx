// pages/signup.tsx
import React from 'react'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()

  return (
    <div style={{
      maxWidth: 400,
      margin: '4rem auto',
      padding: '0 1rem',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>
        지금 가입하면 최대 혜택!
      </h1>

      <button
        onClick={() => window.location.href = '/api/auth/kakao'}
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          marginBottom: '1rem',
          background: '#F7E600',
          border: 'none',
          borderRadius: 4,
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        카카오로 3초만에 시작하기
      </button>

      <button
        onClick={() => window.location.href = '/api/auth/naver'}
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          marginBottom: '1rem',
          background: '#03C75A',
          border: 'none',
          borderRadius: 4,
          fontSize: '1rem',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        네이버로 시작하기
      </button>

      <button
        onClick={() => router.push('/signup-email')}
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          background: '#0061F2',
          border: 'none',
          borderRadius: 4,
          fontSize: '1rem',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        이메일로 시작하기
      </button>
    </div>
  )
}
