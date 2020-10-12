import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export const Group = ({item, navigation}) => {
  const {avatar, name, description, time} = item;
  return (
    <View>
      <TouchableOpacity
        style={styles.groupItem}  
        onPress={() => navigation.navigate('Card', item)}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={{flex: 1}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItem: {
    marginHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'grey',
  },
  time: {
    borderRadius: 20,
    backgroundColor: '#E9F5FF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 19,
  },
});
