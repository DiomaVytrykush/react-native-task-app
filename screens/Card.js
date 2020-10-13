import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
export default function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.route.params.name}</Text>
      <Text style={styles.description}>{props.route.params.phone}</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonView}>
          <Button>Виконати завдання</Button>
        </View>
        <View style={styles.phoneButtonView}>
          <Button style={styles.button}>
            <Icon name="phone" size={22} color="white" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    color: 'grey',
    marginBottom: 3,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
  },
  phoneButtonView: {
    width: 45,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'red',
  },
});
