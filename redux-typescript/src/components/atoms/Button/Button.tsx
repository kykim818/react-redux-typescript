import React from "react";
import styled, { css } from "styled-components";

interface buttonProps {
  children?: React.ReactNode;
  onClick?: (args: any) => any;
  disabled?: boolean;
  className?: string;
}
export const Button = (props: buttonProps) => {
  return (
    <ButtonWrapper
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonWrapper>
  );
};
// common style
const ButtonWrapper = styled.button`
  // BUTTON default style 제거
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
  width: 300px;
  min-width: 200px;
  min-height: 40px;

  border: none;
  border-radius: 4px;
  // 그림자 속성
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    outline: 0;
  }

  // 색상
  /* ${(props) =>
    props.className === "white" &&
    css`
      background-color: white;
      color: black;
    `}
  ${(props) =>
    props.className === "black" &&
    css`
      background-color: black;
      color: white;
    `} */
`;

// export default Button;
