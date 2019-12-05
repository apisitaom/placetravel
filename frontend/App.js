import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native' 
import Homepage from './src/components/homepage/Homepage'
import Comment from './src/components/comment/Comment'
import Travel from './src/components/travel/Travel'
import User from './src/components/user/User'
export default class App extends Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/comment" component={Comment} />
            <Route exact path="/travel" component={Travel} />
            <Route exact path="/user" component={User} />
          </Switch>
      </NativeRouter>
    );
  }
}