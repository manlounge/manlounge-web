// pages/index.tsx
import BottomTab from '../components/BottomTab';

export default function Home() {
  return (
    <div style={{
      maxWidth: '480px',         // 모바일 최대폭
      margin: '0 auto',          // 가운데 정렬
      paddingBottom: '4rem',     // 하단탭 공간 확보
      backgroundColor: '#fff',   // 카드 구분
      minHeight: '100vh'
    }}>
      {/* 상단 타이틀 */}
      <header style={{
        padding: '1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderBottom: '1px solid #ddd'
      }}>
        맨라운지
      </header>

      {/* 게시글 리스트 */}
      <main style={{ padding: '1rem' }}>
        <div style={postStyle}>
          <div style={tagStyle}>HOT</div>
          <div style={{ fontWeight: 500 }}>요즘 감정 기복이 너무 심한데, 나만 그래?</div>
          <div style={metaStyle}>익명 ・ 3시간 전 ・ 💬 12</div>
        </div>
        <div style={postStyle}>
          <div style={tagStyle}>질문</div>
          <div style={{ fontWeight: 500 }}>헬스장 처음 가보려는데 뭐부터 해야 해요?</div>
          <div style={metaStyle}>익명 ・ 1일 전 ・ 💬 5</div>
        </div>
      </main>

      <BottomTab />
    </div>
  );
}

const postStyle: React.CSSProperties = {
  background: '#f9f9f9',
  borderRadius: 8,
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
};

const tagStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#f44336',
  marginBottom: 4
};

const metaStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#777',
  marginTop: 8
};
