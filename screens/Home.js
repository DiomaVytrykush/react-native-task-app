import React from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Group} from '../components/Group';
import axios from 'axios';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {deleteItem} from '../redux/actions/items';
Icon.loadFont();

const Home = (props) => {
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get('https://trycode.pw/c/9MXR8.json').then(({data}) => {
  //     setData(data);
  //   });
  // }, []);
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
                <TouchableOpacity style={styles.trashButton}>
                  <Icon
                    name="trash"
                    size={25}
                    color="white"
                    onPress={() => console.log(item)}
                  />
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
    items: state.itemReducer.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
