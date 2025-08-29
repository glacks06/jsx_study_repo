import React, { useEffect, useState } from "react";

// 컴포넌트 네이밍 시 첫글자는 반드시 대문자
function ToggleSwitch() {
  // `isOn`이라는 상태(state)를 정의하고 초기값을 `false`(꺼짐)로 설정합니다.
  const [isOn, setIsOn] = useState(false);

  // 버튼 클릭 시 상태를 반전시키는 함수
  const toggleState = () => {
    setIsOn(!isOn);
  };

  const switchStyle = {
    padding: '10px 20px',
    backgroundColor: isOn ? '#4CAF50' : '#f44336', // 상태에 따라 색상 변경
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{ margin: '10px' }}>
      <button onClick={toggleState} style={switchStyle}>
        {isOn ? '불 켜짐' : '불 꺼짐'}
      </button>
    </div>
  );
}

export default ToggleSwitch;