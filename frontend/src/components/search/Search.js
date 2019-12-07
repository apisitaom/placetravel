import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export class Search extends Component {
    render() {
        return (
            <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="star-half" />
                <Input placeholder="Search" />
                <Icon name="ios-search" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>
          </Container>
        )
    }
}

export default Search
