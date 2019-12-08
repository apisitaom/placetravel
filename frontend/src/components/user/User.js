import React, { Component } from 'react'
import { Container, Content, Thumbnail } from 'native-base';

export default class User extends Component {
    render() {
        return (
<Container>
        <Content>
          <Thumbnail style={{}} large source={require('../../assets/img/hansome.jpg')} />
        </Content>
      </Container>
        )
    }
}


