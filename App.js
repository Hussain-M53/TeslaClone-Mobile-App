import { StatusBar } from 'expo-status-bar';
import React, { useRef, } from 'react';
import { StyleSheet, View, DrawerLayoutAndroid, Image, Text, TouchableOpacity, } from 'react-native';
import CarList from './component/CarList';
import Header from './component/Header';

export default function App() {
  const drawer = useRef(null);

  const sideBarView = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={() => drawer.current.closeDrawer()} style={styles.logoContainer}>
        <Image source={require('./assets/cancel.png')}  />
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <TouchableOpacity>
          <Text style={styles.name}>Model S</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name} >Model 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>Model X</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>Model Y</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>Solar Roof</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>Solar Panel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={"right"}
      drawerBackgroundColor="rgba(255,255,255,0.6)"
      renderNavigationView={sideBarView}
    >
      <View style={styles.container}>
        <Header drawer={drawer} />
        <CarList />
        <StatusBar style="auto" />
      </View>
    </DrawerLayoutAndroid>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
  },
  logoContainer: {
    height: '30%',
    width: '100%',
    paddingRight: 15,
    paddingTop: 50,
    resizeMode: 'contain',
    alignItems: 'flex-end',
  },
  menuItem: {
    alignItems: 'center',
    height: '70%',
    paddingTop: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 1,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    lineHeight: 33
  },
});
