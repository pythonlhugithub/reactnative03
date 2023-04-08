import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import imgg from './img/aio1.jpg';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';

// export default class Home extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <View style={stly.container}>
//         <ImageBackground source={imgg} resizeMode="cover" style={stly.image}>
//           <Text style={stly.text}>Inside</Text>
//         </ImageBackground>
//       </View>
//     );
//   }
// };

export default class Homes extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isPress: false,
      eachi: null,
      isdetail: false,
      isLoading: true,
      userEmail: 'lizh@gmail.com',
    };
  }

  componentDidMount() {
    try {
      return Axios('https://facebook.github.io/react-native/movies.json').then(
        result => {
          this.setState({data: result.data.movies, isLoading: false});
        },
      );
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  setValue() {
    AsyncStorage.setItem('email', JSON.stringify(this.state.userEmail)); //put in the storage
  }

  render() {
    if (this.state.isLoading) {
      return (
        <SafeAreaView
          style={[
            styl.container,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <ActivityIndicator />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styl.container}>
        <View style={styl.box}>
          <Text style={styl.text}>Movie Details in React Native </Text>
        </View>
        <FlatList
          style={styl.list}
          data={this.state.data}
          renderItem={({item}) => (
            <Button
              title={item.title + ' in ' + item.releaseYear}
              onPress={() => {
                this.setState({isPress: true});
                this.setState({eachi: item});
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
        {this.state.isdetail ? (
          <View>
            <Text>{this.state.eachi.title}</Text>
            <Text>{this.state.eachi.releaseYear}</Text>
          </View>
        ) : null}

        {this.state.isPress ? (
          <View>
            <Button
              title={this.state.eachi.title}
              onPress={() => {
                eee = this.state.eachi;
                Alert.alert(eee.id + eee.title + eee.releaseYear);
                //this.setState({isdetail: !this.state.isdetail})
              }}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

// export default class Home extends React.Component {
//   constructor() {
//     super();
//     this.state = {email: 'abcd@gmail.com'};
//     this.setValue();
//   }

//   setValue() {
//     AsyncStorage.setItem('email', JSON.stringify(this.state.email)); //put in the storage
//   }

//   async getValue() {
//     try {
//       const value = await AsyncStorage.getItem('email'); //get from storage
//       if (value !== null) {
//         // We have data!!
//         Alert.alert(value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   }

//   render() {
//     return (
//       <View style={stly.container}>
//         {/* <TextInput style={stly.box} />
//         <Text style={{alignSelf: 'center'}}>Hi, {this.state.name}</Text> */}

//         <Button title="get item in the local storage" onPress={this.getValue} />
//         <Button
//           title="clean item in the local storage"
//           onPress={() => {
//             AsyncStorage.clear();
//           }}
//         />
//       </View>
//     );
//   }
// }

const styl = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  box: {width: 200, borderRadius: 5, borderColor: 'grey', borderWidth: 1},

  list: {
    paddingTop: 10,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    padding: 12,
    marginBottom: 5,
    marginHorizontal: 4,
    backgroundColor: 'skyblue',
  },
});
