import React from 'react';
import styled from 'styled-components';
import { white, gradientLeft, gradientRight } from '../../themes/colors';
import { bodyBold } from '../../themes/fonts';

const ActionButton = (props) => {
  const { text, onClick, backgroundWhite } = props;
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 4em;
  width: 90%;
  /* background-color: red; */
  background-image: linear-gradient(to right, ${gradientLeft} , ${gradientRight});
  border-radius: 2em;
  color: ${white};
  font-family: ${bodyBold};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
`;

export { ActionButton };