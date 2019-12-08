import React, { Component } from 'react'
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Aom Apist',
    name: '999.9k',
    image: require('../../assets/img/sea.jpg'),
    profile: require('../../assets/img/hansome.jpg'),
  },
  {
    text: 'Aom Apist',
    name: '999.9k',
    image: require('../../assets/img/sea.jpg'),
    profile: require('../../assets/img/hansome.jpg'),
  },
  {
    text: 'Aom Apist',
    name: '999.9k',
    image: require('../../assets/img/sea.jpg'),
    profile: require('../../assets/img/hansome.jpg'),
  },
];
export default class Travel extends Component {
    render() {
        return (
<Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.profile} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>เขาใหญ่/นครราชสีมา</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
        )
    }
}

