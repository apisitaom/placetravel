import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base';
import Footers from '../footers/Footers'
import { Redirect } from 'react-router-native'
export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      userPage: false,
      commentPage: false,
      loginPage: false,
      travelPage: false
    }
  }
  onChangeProfilePage = async () => {
    this.setState({
      userPage: true
    })
  }
  onChangeCommentPage = async () => {
    this.setState({
      commentPage: true
    })
  }
  onChangeLoginPage = async () => {
    this.setState({
      loginPage: true
    })
  }
  onChangeTravelPage = async () => {
    this.setState({
      travelPage: true
    })
  }
  render() {
    if (this.state.userPage === true) {
      return <Redirect to='/user' />
    }
    if (this.state.commentPage === true) {
      return <Redirect to='/comment' />
    }
    if (this.state.loginPage === true) {
      return <Redirect to='/login' />
    }
    if (this.state.travelPage === true) {
      return <Redirect to='/travel' />
    }
        return (
          <Container>
            <Content>
              <Button
              onPress={this.onChangeProfilePage}
              >  
                <Text>Profile</Text>
              </Button>

              <Button
              onPress={this.onChangeCommentPage}
              >  
                <Text>Comment</Text>
              </Button>

              <Button
              onPress={this.onChangeLoginPage}
              >  
                <Text>Login</Text>
              </Button>

              <Button
              onPress={this.onChangeTravelPage}
              >  
                <Text>Travel</Text>
              </Button>

            </Content>
            <Footers />
        </Container>
        )
    }
}

