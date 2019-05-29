import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home/home';
import SignIn from '../components/signIn/signIn';
import NewUpdate from '../components/newUpdate/newUpdate';

const Router = () => {
  return (  
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={SignIn} />
      <Route exact path="/new" component={NewUpdate} />
    </div>
  );
}
 
export default Router;