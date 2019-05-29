import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as currentActions from './homeActions';
import styled from 'styled-components';
import { gradientLeft, gradientRight } from '../../themes/colors';
import { HeadingOne, Table } from '../../common';

const Wrapper = styled.div`
  padding: 1em;
  height: 100vh;
  background-image: linear-gradient(to right, ${gradientLeft} , ${gradientRight});
`;

const Header = styled.header`
`;

// const SubTitle = styled.h2`
// `;

class Home extends Component {
  render() {
    console.log(this.props);
    const { data } = this.props.state;
    return (
      <Wrapper>
        <Header>
          <HeadingOne text="Today I have..." />
        </Header>
        <Table data={data} />
      </Wrapper>
    );
  }
} 

export default connect(
  state => ({
    state: state.Home
  }),
  dispatch => ({
    actions: bindActionCreators(currentActions, dispatch)
  })
)(Home);