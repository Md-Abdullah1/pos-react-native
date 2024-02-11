import React from 'react'
import {
    Text,
    Container,
    Content,
    // Button,
    // List,
    // ListItem,
    // Left,
    // Right,
    // Body,
    View,
} from 'native-base';
import styles from './styles';

const Home = () => {
  return (
   <Container style={styles.container}>
    <Content>
      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 4</Text>
      </View>
    </Content>
   </Container>
    
  )
}

export default Home