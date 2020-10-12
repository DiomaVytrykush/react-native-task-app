import React from 'react';
import {StyleSheet, View, SectionList, Text} from 'react-native';
import {Group} from '../components/Group';

const DATA = [
  {
    title: '11 Жовтня',
    data: [
      {
        avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        name: 'Босович Віталія',
        description: 'Нагодувати пацєтка',
        time: '12:00',
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        name: "Витрикуш Дем'ян",
        description: 'Вмити рохкальце',
        time: '14:00',
      },
    ],
  },
  {
    title: '14 Жовтня',
    data: [
      {
        avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        name: 'Босович Віталія',
        description: 'Нагодувати пацєтка',
        time: '12:00',
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        name: "Витрикуш Дем'ян",
        description: 'Вмити рохкальце',
        time: '14:00',
      },
    ],
  },
  {
    title: '14 Жовтня',
    data: [
      {
        avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        name: 'Босович Віталія',
        description: 'Нагодувати пацєтка',
        time: '12:00',
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        name: "Витрикуш Дем'ян",
        description: 'Вмити рохкальце',
        time: '14:00',
      },
    ],
  },
  {
    title: '14 Жовтня',
    data: [
      {
        avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        name: 'Босович Віталія',
        description: 'Нагодувати пацєтка',
        time: '12:00',
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        name: "Витрикуш Дем'ян",
        description: 'Вмити рохкальце',
        time: '14:00',
      },
    ],
  },
  {
    title: '14 Жовтня',
    data: [
      {
        avatar: 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
        name: 'Босович Віталія',
        description: 'Нагодувати пацєтка',
        time: '12:00',
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU',
        name: "Витрикуш Дем'ян",
        description: 'Вмити рохкальце',
        time: '14:00',
      },
    ],
  },
];

export default function Home(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Group {...item} navigation={navigation} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.titleText}>{title}</Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    marginLeft: 15,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});
