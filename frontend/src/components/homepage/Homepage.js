import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base';
import Footers from '../footers/Footers'
export default class Homepage extends Component {
    render() {
        return (
          <Container>
            <Content>
              <Button
              onPress={()=> console.log('profile')}
              >
                <Text>Profile</Text>
              </Button>
            </Content>
            <Footers />
        </Container>
        )
    }
}

