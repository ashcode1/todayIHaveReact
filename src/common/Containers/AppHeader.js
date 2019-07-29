import React, { Component } from 'react';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import { device } from '../../common/MediaQueries/device';
import { ActionButton } from '../';
import { Menu } from 'styled-icons/feather/Menu';
import { Close } from 'styled-icons/evil/Close';

import { white, transparentBlack } from '../../themes/colors';
import { bodyBold } from '../../themes/fonts';

const NavItem = styled(NavLink)`
  /* color: rgb(225, 182, 197); */
  color: ${transparentBlack};
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 2em;
  /* padding: 10px; */
  /* margin: 5px; */
  font-family: ${bodyBold};
  font-style: normal;
  font-weight: 700;
  display: inline-block;
  &:hover {
    color: black;
  }
  @media ${device.laptop} {
    &:hover {
      color: black;
    }
  }
`;

// const activeStyle = {
//   backgroundColor: 'white',
//   color: 'black',
//   borderTopLeftRadius: '0.5em',
//   borderTopRightRadius: '0.5em'
// };

class AppHeader extends Component {
  state = {
    dropDownVisible: false
  };
  renderDropDown() {
    const { dropDownVisible } = this.state;
    if (dropDownVisible) {
      return (
        <div
          onClick={() => this.setState({ dropDownVisible: false })}
          style={{
            position: 'absolute',
            top: 4,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {this.renderNavItems()}
        </div>
      );
    }
  }
  renderNavItems() {
    const { push } = this.props.history;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%'
        }}
      >
        <NavItem
          exact
          to='/'
          // activeStyle={activeStyle}
        >
          UPDATES
        </NavItem>
        <NavItem
          to='/auth'
          // activeStyle={activeStyle}
        >
          SIGN OUT
        </NavItem>
        {/* <ActionButton text='ADD NEW UPDATE' onClick={() => push('/new')} /> */}
        <ActionButton text='ADD NEW UPDATE' onClick={() => push('/new')} />
      </div>
    );
  }
  render() {
    const { dropDownVisible } = this.state;
    console.log(dropDownVisible);

    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <NavBar>
          {dropDownVisible ? (
            <CloseIcon
              onClick={() =>
                this.setState({ dropDownVisible: !dropDownVisible })
              }
            />
          ) : (
            <MenuIcon
              onClick={() =>
                this.setState({ dropDownVisible: !dropDownVisible })
              }
            />
          )}
        </NavBar>
        {this.renderDropDown()}
      </div>
    );
  }
}

{
  /*
  class AppHeader extends Component {
  render() {
    return (  
    
      <Header>
 
        <CompactHeader>
          <MenuIcon />
        </CompactHeader>
        <NavItem
          exact
          to="/"
          activeStyle={activeStyle}
        >
          Home
        </NavItem>
        <NavItem
          to="/about-us"
          activeStyle={activeStyle}
        >
          About
        </NavItem>
      </Header>
    );
  }
}
*/
}

const NavBar = styled.div`
  z-index: 1;
  height: 4em;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
`;

const CompactHeader = styled.div`
  display: flex;
  align-self: flex-start;
  height: 5em;
  background-color: white;
  @media ${device.laptop} {
    visiblity: hidden;
  }
`;

const MenuIcon = styled(Menu)`
  /* display: flex;
align-self: flex-end; */
  height: 2em;
  padding-right: 1em;
  position: absolute;
  top: 3;
  right: 3;
  color: black;
  @media ${device.laptop} {
    visiblity: hidden;
  }
`;

const CloseIcon = styled(Close)`
  /* display: flex;
align-self: flex-end; */
  height: 2em;
  padding-right: 1em;
  position: absolute;
  top: 3;
  right: 3;
  color: black;
  @media ${device.laptop} {
    visiblity: hidden;
  }
`;

// const Header = styled.header`
//   display: flex;

//   @media (max-width: 768px) {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vh;
//     flex-direction: column;
//     background-color: white;
//   }
// `;

const Header = styled.header`
  display: flex;

  /* position: absolute;
  top: 0;
  left: 0; */
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    height: 6em;
    background-color: transparent;
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  display: inline;
`;

AppHeader = withRouter(AppHeader);
export { AppHeader };

{
  /*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1 {
  width: 25px;
  transition: width 1s;
}
.bar2 {
  width: 35px;
}
.bar3 {
  width: 15px;
}

.bar1, .bar2, .bar3 {
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
.bar1:hover {
  width: 35px;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(135deg) translate(8px, -8px);
  width: 35px;
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(-135deg) translate(8px, 8px);
  transform: rotate(-135deg) translate(8px, 8px);
  width: 35px;
}
</style>
</head>
<body>

<p>Click on the Menu Icon to transform it to "X":</p>
<div class="container" onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>

<script>
function myFunction(x) {
  x.classList.toggle("change");
}
</script>
*/
}
