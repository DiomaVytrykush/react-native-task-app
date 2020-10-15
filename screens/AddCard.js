import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, CustomTextInput} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addItem} from '../redux/actions/items';
import {connect} from 'react-redux';

Icon.loadFont();

const AddCard = ({navigation, add}) => {
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [date, onChangeDate] = React.useState('');
  const [time, onChangeTime] = React.useState('');
  const [error, setError] = React.useState('');
  let errorMessage = () => {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'red',
          }}>
          {error}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomTextInput onChangeText={(date) => onChangeDate(date)}>
        The date
      </CustomTextInput>
      {!!error && errorMessage()}
      <CustomTextInput onChangeText={(time) => onChangeTime(time)}>
        The time
      </CustomTextInput>
      {!!error && errorMessage()}
      <CustomTextInput onChangeText={(name) => onChangeName(name)}>
        First and last name
      </CustomTextInput>
      {!!error && errorMessage()}
      <CustomTextInput onChangeText={(phone) => onChangePhone(phone)}>
        Phone number
      </CustomTextInput>

      <Button
        onPress={() => {
          if (name.trim() === '') {
            setError(
              <Icon name="exclamation-triangle" size={12} color="red">
                This field is required.
              </Icon>,
            );
          } else {
            setError(null);
            add(
              date,
              'https://res.cloudinary.com/dtbudl0yx/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png',
              Math.random(),
              name,
              phone,
              time.toString(),
            );
            navigation.navigate('Home');
          }
        }}
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: (title, avatar, id, name, phone, time) =>
      dispatch(addItem(title, avatar, id, name, phone, time)),
  };
};

export default connect(null, mapDispatchToProps)(AddCard);
