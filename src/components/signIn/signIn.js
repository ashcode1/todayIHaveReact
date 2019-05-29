import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as currentActions from './signInActions';
import { HeadingOne, ActionButton } from '../../common';
import { body } from '../../themes/fonts';

const Wrapper = styled.div`  
  padding: 1em;

`;

const Header = styled.header`
`;

const Title = styled.h1`
`;

const Content = styled.p`
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      console.log('SUBMITTING :', this.state);
    }
    event.preventDefault();
  }
  render() {
    console.log(this.state);
    const { email, password } = this.state; 
    return (
      <Wrapper>
        <Header>
          <HeadingOne text="Sign in" blackText />
        </Header>
        <div style={{ display: 'flex', flex: 1 }}>
          {/*
          <ContainerText>
          ;alsdkgj;sadligjs;ljnfvas;'lafs\eofv
          a\seo;vn's;leafn;slfvas
          vasefv
          asevasvsefvasefvas
          vafsevsefvasevfas'
          </ContainerText>
          */}

          <ContainerForm>
            <StyledForm>
              
              <StyledInput 
                value={email} 
                onChange={this.handleChange}
                name="email"
                type="email"
                placeholder="email *"
              />
              <StyledInput 
                value={password} 
                onChange={this.handleChange}  
                name="password"
                type="password"
                placeholder="password *"
              />
              <ActionButton text="SUBMIT" onClick={this.handleSubmit} />
            </StyledForm>
          </ContainerForm>
        </div>
          
          
          

      </Wrapper>
    )
  }
}

// const ContainerText = styled.div`
//     display: flex;
//     flex: 1;
//     background-color: orange;
// `;

const ContainerForm = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-self: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  background-color: white; 
  padding: 1em;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 1em;
`;

const StyledLabel = styled.label`
  color: black;
  font-family: ${body};
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  border-radius: 0.5em;
  height: 3em;
  margin-bottom: 2em;
  padding: 1em;
`;

export default connect(
  state => ({
    state: state.About
  }),
  dispatch => ({
    actions: bindActionCreators(currentActions, dispatch)
  })
)(SignIn);