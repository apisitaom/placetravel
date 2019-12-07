import React, { Component } from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Redirect } from 'react-router-native'
export default class Footers extends Component {
    constructor(props){
        super(props);
        this.state={
          travel: true,
          search: false,
          message: false,
          profile: false,

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
            return <Redirect to='/' />
          }
        return (
            <Container>
            <Content>
            </Content>
          <Footer>
            <FooterTab>
              <Button active={this.state.travel} >
                <Icon onPress={this.onChangeTravelPage} name="apps" active={this.state.travel} />
                <Text>Travel</Text>
              </Button>
              <Button active={this.state.search}>
                <Icon name="ios-search" active={this.state.search} />
                <Text>Search</Text>
              </Button>
              <Button active={this.state.message}>
                <Icon onPress={this.onChangeCommentPage} name="chatboxes" active={this.state.message} />
                <Text>Message</Text>
              </Button>
              <Button active={this.state.profile} >
                <Icon onPress={this.onChangeProfilePage} name="person" active={this.state.profile} />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
        )
    }
}

