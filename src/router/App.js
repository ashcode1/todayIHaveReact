import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import { AppHeader } from '../common';
import { gradientLeft, gradientRight } from '../themes/colors';

const App = () => (
  <Wrapper>
    <AppHeader />
    <Router />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  /* background-image: linear-gradient(to right, ${gradientLeft} , ${gradientRight}); */
`;

export default App;
