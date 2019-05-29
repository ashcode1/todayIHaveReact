import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { headingBold } from '../../themes/fonts';
import { white, black } from '../../themes/colors';

const HeadingOne = (props) => {
  const { text, blackText } = props;
  return (  
    <StyledH1 blackText={blackText}>
      {text}
    </StyledH1>
  );
}

HeadingOne.proptypes = {
  text: PropTypes.string
}
 
const StyledH1 = styled.h1`
  font-family: ${headingBold};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  color: ${props => props.blackText ? 'black' : 'white'};
`;

export { HeadingOne };
