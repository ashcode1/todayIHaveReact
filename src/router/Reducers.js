import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Home from '../components/home/homeReducer';
import SignIn from '../components/signIn/signInReducer';
import NewUpdate from '../components/newUpdate/newUpdateReducer';
// import About from './about';

export default combineReducers({
  routing: routerReducer,
  Home,
  SignIn,
  NewUpdate
  // About,
});