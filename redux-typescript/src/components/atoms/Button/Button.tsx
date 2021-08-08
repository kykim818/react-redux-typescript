import React from 'react';
import styled from 'styled-components'

const Button = (props : {children : React.ReactNode}) => {
    return (
        <ButtonWrapper>
            {props.children}
        </ButtonWrapper>
    );

}
// BUTTON default style 제거
const ButtonWrapper = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  // 기본 속성  
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;
  // 그림자 속성
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;

  
`
export default Button