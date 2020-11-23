import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/Home.js";
import DetailsScreen from "./screens/Details";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ff00a5",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => {
          <View>
            {" "}
            <MaterialIcons
              style={styles.icon}
              name='menu'
              size={28}
              onPress={navigation.openDrawer()}
            />
          </View>;
        },
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#ff00a5",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen name='Details' component={DetailsScreen} />
  </DetailsStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStackScreen} />
        <Drawer.Screen name='Details' component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  icon: {
    color: "#ffff",
    left: "20",
  },
});
