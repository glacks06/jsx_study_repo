import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const box1_name = 'box1: variable test';

function animal_names(v){
  let res = '';
  for(let i = 0; i < v.length; i += 1){
    res += v[i];
    res += ' ';
  }
  return res;
}
const box1_animals = ['cat', 'dog', 'lion', 'bird'];

function PrintText(props){
  return <h3>text = {props.text}</h3>
}

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

function App() {
  return (
    <div>
      <header>
        <h1>React JSX Study</h1>
        <hr />
      </header>
      <section>
        {box1_name} <br />
        animal names: {animal_names(box1_animals)}
      </section>
      <section>
        <PrintText text="hello world" />
      </section>
      <section>
        <ToggleSwitch />
        <ToggleSwitch />
        <ToggleSwitch />
      </section>
    </div>
  );
}

export default App;
