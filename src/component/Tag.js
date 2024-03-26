import React, { useState } from 'react';
import '../App.css';

function Tag({ children }) {
  const [isActive, setIsActive] = useState(false);

  // 'active' 상태를 토글하는 함수
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`input-box ${isActive ? 'active' : ''}`}
      onClick={toggleActive}
    >
      {children}
    </div>
  );
}

export default Tag;
