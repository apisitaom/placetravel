import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class Comment extends Component {
    render() {
        return (
            <Container>
            <Content>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('../../assets/img/hansome.jpg')} />
                  </Left>
                  <Body>
                    <Text>Aom Apisit</Text>
                    <Text note>Full Stack Developer ... send message to you</Text>
                  </Body>
                  <Right>
                    <Text note>12:00</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        )
    }
}
