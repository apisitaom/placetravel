import React, { Component } from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Footers extends Component {
    constructor(props){
        super(props);
        this.state={
          travel: true,
          search: false,
          message: false,
          profile: false
        }
      }
    render() {
        return (
            <Container>
            <Content>
            </Content>
          <Footer>
            <FooterTab>
              <Button active={this.state.travel} >
                <Icon name="apps" active={this.state.travel} />
                <Text>Travel</Text>
              </Button>
              <Button active={this.state.search}>
                <Icon name="ios-search" active={this.state.search} />
                <Text>Search</Text>
              </Button>
              <Button active={this.state.message}>
                <Icon name="chatboxes" active={this.state.message} />
                <Text>Message</Text>
              </Button>
              <Button active={this.state.profile} >
                <Icon name="person" active={this.state.profile} />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
        )
    }
}

