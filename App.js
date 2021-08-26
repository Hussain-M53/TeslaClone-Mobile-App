import { StatusBar } from 'expo-status-bar';
import React, { useRef, } from 'react';
import { StyleSheet, View, DrawerLayoutAndroid, Image, Text, TouchableOpacity, } from 'react-native';
import CarList from './component/CarList';
import Header from './component/Header';
import Icon from 'react-native-vector-icons/FontAwesome'
import drawerList from "./drawerList"
export default function App() {
  const drawer = useRef(null);

  const sideBarView = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={() => drawer.current.closeDrawer()} style={styles.logoContainer}>
        <Icon name="times" size={45} color="rgba(0,0,0,0.8)" />
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <TouchableOpacity>
          <Text style={styles.name}>Model S</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.name}>Model 3</Text>
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
        <View >
          <Text style={styles.footer}>Copyright issued by Hash.Co</Text>
        </View>
      </View>

    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={"right"}
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
    paddingRight: 25,
    paddingTop: 50,
    resizeMode: 'contain',
    alignItems: 'flex-end',
  },
  menuItem: {
    alignItems: 'center',
    height: '70%',
    paddingTop: 0,

  },
  name: {
    fontSize: 20,
    fontWeight: "normal",
    letterSpacing: 1,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.4)',
    lineHeight: 40,
  },
  footer: {
    flex: 1,
    paddingTop: 100,
    fontSize: 10,
    color: "rgba(0,0,0,0.5)",
  }
});
