import React from 'react';
import styled from 'styled-components';
import { white, black, transparentBlack } from '../../themes/colors';
import { body } from '../../themes/fonts'; 
import { ActionButton } from '../';

const Form = (props) => {
  const { emailValue, passwordValue, onClick, emailOnChange, passwordOnChange, nameEmail, namePassword } = props;
  return (
    <StyledForm>
      <StyledLabel>Email</StyledLabel>
      <StyledInput 
        value={emailValue} 
        onChange={emailOnChange}
        name={nameEmail}
      />
      <StyledLabel>Password</StyledLabel>
      <StyledInput 
        value={passwordValue} 
        onChange={passwordOnChange}  
        name={namePassword}
      />
      <ActionButton text="SUBMIT" onClick={onClick} />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  background-color: white; 
  padding: 1em;
  border-width: 1px;
  border-style: solid;
  border-color: transparentBlack;
  border-radius: 1em;
`;

const StyledLabel = styled.label`
  color: black;
  font-family: ${body};
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  border-radius: 0.5em;
  height: 2em;
  margin-bottom: 2em;
`;

export { Form };
