import React, { Component } from 'react'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Comment from '../comment/Comment'
import Search from '../search/Search'
import Travel from '../travel/Travel'
import User from '../user/User'
export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
        return (
          <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="apps" /><Text>Travel</Text></TabHeading>}>
            <Travel />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="ios-search" /><Text>Search</Text></TabHeading>}>
            <Search />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="chatboxes" /><Text>Comment</Text></TabHeading>}>
            <Comment />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <User />
          </Tab>
        </Tabs>
      </Container>
        )
    }
}

