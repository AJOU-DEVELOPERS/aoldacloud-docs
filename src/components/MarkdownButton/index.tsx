import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const buttonStyle = {
    backgroundColor: '#007cea', // 아주대학교의 주요 색상으로 설정
    color: 'white',
    padding: '8px 18px', // py-4 px-8에 해당하는 인라인 스타일
    cursor: 'pointer',
    borderRadius: '4px', // 사각형 모서리에 라운드를 주는 효과
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 그림자 효과를 살짝 주는 효과
    ':hover': {
      color: '#999', // 글자 색을 조금 회색으로 바꿔줌
    },
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
