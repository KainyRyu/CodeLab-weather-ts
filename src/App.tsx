import React from 'react';
import './App.css';
import Main from './pages/Main';

// - 지역 리스트는 hard coding
//   - 지역이름, 좌표값
// - 페이지 랜딩시 현 시간, 특정 지역 날씨 정보 보여주기
// - 랜딩페이지 -> 지역 리스트 클릭 했을 때 날씨 정보 갱신
// - 지역 추가
//   - 각자의 방식으로 저장
// - 지역 삭제

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;