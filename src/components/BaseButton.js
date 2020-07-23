import React from "react";
import styled from "styled-components";

const Root = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 5px;
  background: ${({ color }) => color || "gray"};
  border: none;
  color: ${({ fontColor }) => fontColor || "white"};
  font-size: 25px;
  :hover {
    opacity: 0.8;
  }
`;

const BaseButton = ({ text, color, fontColor, onClick }) => {
  return (
    <Root type="button" color={color} fontColor={fontColor} onClick={onClick}>
      {text}
    </Root>
  );
};

export default BaseButton;
