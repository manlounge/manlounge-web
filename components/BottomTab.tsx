// components/BottomTab.tsx
import { useRouter } from 'next/router';

export default function BottomTab() {
  const router = useRouter();

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.5rem 0',
      zIndex: 100,
    }}>
      <button onClick={() => router.push('/')} style={tabStyle}>🏠<br />홈</button>
      <button onClick={() => router.push('/category')} style={tabStyle}>💬<br />카테고리</button>
      <button onClick={() => router.push('/write')} style={tabStyle}>✍️<br />글쓰기</button>
      <button onClick={() => router.push('/saved')} style={tabStyle}>📁<br />보관함</button>
      <button onClick={() => router.push('/profile')} style={tabStyle}>👤<br />MY</button>
    </nav>
  );
}

const tabStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '0.8rem',
  color: '#333',
  textAlign: 'center',
  flex: 1,
  cursor: 'pointer'
};
