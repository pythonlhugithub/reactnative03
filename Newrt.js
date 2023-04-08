import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  DrawerLayoutAndroid,
  RefreshControl,
  SafeAreaView,
  useColorScheme,
  Image,
  useWindowDimensions,
} from 'react-native';
import imgg from './img/aio1.jpg';

export default class NewRta extends React.Component {
  // refresh worked
  constructor() {
    super();
    this.state = {refreshing: false};
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 2000);
  };

  render() {
    // colorScheme = useColorScheme();

   // const {height, width, scale, fontScale} = useWindowDimensions();
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <Text>pull down to refresh</Text>
          <Image
            source={imgg}
            style={{
              alignItems: 'stretch',
              width: 400,
              height: 400,
              borderRadius: 6,
            }}
          />

          {/* <View style={styles.container}>
            <Text style={styles.header}>Window Dimension Data</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text>
            <Text>Font scale: {fontScale}</Text>
            <Text>Pixel ratio: {scale}</Text>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// export default class NewRta extends React.Component {
//   constructor() {
//     super();
//     this.state = {name: ''};
//   }

//   render() {

//     const drawer = useRef<DrawerLayoutAndroid>(null);
//     const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
//     const changeDrawerPosition = () => {
//       if (drawerPosition === 'left') {
//         setDrawerPosition('right');
//       } else {
//         setDrawerPosition('left');
//       }
//     };

//     const navigationView = () => (
//       <View style={[styles.container, styles.navigationContainer]}>
//         <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//         <Button
//           title="Close drawer"
//           onPress={() => drawer.current?.closeDrawer()}
//         />
//       </View>
//     );

//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <ImageBackground
//             source={imgg}
//             resizeMode="cover"
//             style={styles.image}>
//             <Text style={styles.text}>Inside</Text>
//           </ImageBackground>
//         </View>

//         <DrawerLayoutAndroid
//           ref={drawer}
//           drawerWidth={300}
//           drawerPosition={drawerPosition}
//           renderNavigationView={navigationView}>
//           <View style={styles.container}>
//             <Text style={styles.paragraph}>
//               Drawer on the {drawerPosition}!
//             </Text>
//             <Button
//               title="Change Drawer Position"
//               onPress={() => changeDrawerPosition()}
//             />
//             <Text style={styles.paragraph}>
//               Swipe from the side or press button below to see it!
//             </Text>
//             <Button
//               title="Open drawer"
//               onPress={() => drawer.current?.openDrawer()}
//             />
//           </View>
//         </DrawerLayoutAndroid>
//       </ScrollView>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
