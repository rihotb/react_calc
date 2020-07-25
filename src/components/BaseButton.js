import React from "react";
import styled from "styled-components";

const Root = styled.button`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 5px;
  font-size: 25px;
  border: none;
  background: ${({ color }) => color || "gray"};
  color: ${({ fontColor }) => fontColor || "white"};
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const BaseButton = ({ text, color, fontColor, onClick }) => {
  return (
    <Root
      className={`${text === 0 ? "zero" : ""}`}
      type="button"
      color={color}
      fontColor={fontColor}
      onClick={onClick}
    >
      {text}
    </Root>
  );
};

export default BaseButton;
