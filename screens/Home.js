import React from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Group} from '../components/Group';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {deleteItem} from '../redux/actions/items';
Icon.loadFont();

const Home = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      {props.items && (
        <SectionList
          sections={props.items}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Swipeable
              rightButtons={[
                <TouchableOpacity
                  style={styles.trashButton}
                  onPress={() => props.delete(item.id)}>
                  <Icon name="trash" size={25} color="white" />
                </TouchableOpacity>,
                <TouchableOpacity style={styles.editButton}>
                  <Icon name="edit" size={25} color="white" />
                </TouchableOpacity>,
              ]}>
              <Group item={item} navigation={navigation} />
            </Swipeable>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.titleText}>{title}</Text>
          )}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCard')}>
        <Icon name="plus" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  trashButton: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  editButton: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor: '#2A86FF',
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  titleText: {
    marginLeft: 15,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
