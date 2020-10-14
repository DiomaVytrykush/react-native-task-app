import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Button} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addItem} from '../redux/actions/items';
import {connect} from 'react-redux';

Icon.loadFont();

const AddCard = ({navigation, items, add}) => {
  const [value, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>First and last name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}></TextInput>
      <Text style={styles.text}>Phone number</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeNumber(text)}
        value={number}></TextInput>
      <Button
        onPress={() => (add(items), navigation.navigate('Home'))}
        style={{backgroundColor: '#40A00B'}}>
        <View style={styles.button}>
          <Icon
            name="plus"
            size={15}
            color="white"
            style={{paddingRight: 10}}
          />
          <Text style={styles.buttonText}>Add to card</Text>
        </View>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  text: {
    marginTop: 20,
    color: 'grey',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  button: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
