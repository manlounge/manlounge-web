// pages/category.tsx
import BottomTab from '../components/BottomTab';

const sections = [
  { emoji: '💬', title: '라운지 톡방', description: '자유글, 오늘 감정 한 줄, 내 얘기 들어줄 사람' },
  { emoji: '🚀', title: '남자의 관심사', description: '자동차, 스포츠, 피트니스, 커리어, 재테크' },
  { emoji: '🤝', title: '경험 나눔', description: '실패담, 소개팅 후기, 직장 사건, 군대 이야기' },
  { emoji: '🧠', title: '자기관리', description: '감정관리, 루틴, 뇌과학, 생산성, 우울과 분노' },
  { emoji: '❤️', title: '관계', description: '연애, 이별, 가족, 연애감정 공유' },
  { emoji: '🤫', title: '익명 질문존', description: '부끄러운 질문, 성생활, 약 정보' },
  { emoji: '🏠', title: '혼자의 시간', description: '혼밥, 혼술, 넷플릭스, 혼자 살아남기' },
];

export default function CategoryPage() {
  return (
    <div style={{
      maxWidth: '480px',
      margin: '0 auto',
      paddingBottom: '4rem',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <header style={{
        padding: '1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        borderBottom: '1px solid #ddd'
      }}>
        카테고리
      </header>

      <main style={{ padding: '1rem' }}>
        {sections.map((section, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: 8,
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
            onClick={() => alert(`${section.title} 클릭됨 (나중에 연결 예정)`)}
          >
            <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>
              {section.emoji} {section.title}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#777', marginTop: 4 }}>
              {section.description}
            </div>
          </div>
        ))}
      </main>

      <BottomTab />
    </div>
  );
}
