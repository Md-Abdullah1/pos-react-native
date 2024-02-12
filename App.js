import React from 'react';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
// import { Root } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Catalog from './src/components/Catalog';
import Checkout from './src/components/Checkout';
import Orders from './src/components/Orders';
import Receipt from './src/components/Receipt';
import Settings from './src/components/Settings';
import home from './src/components/Home';


import store from './src/redux/store';

import awsConfig from "./aws-exports";
Amplify.configure(awsConfig);

const CheckoutStack = createStackNavigator();
const CheckoutScreen = () => (
    <CheckoutStack.Navigator>
      <CheckoutStack.Screen name="Catalog" component={Catalog} />
      <CheckoutStack.Screen name="Checkout" component={Checkout} />
    </CheckoutStack.Navigator>
  )


const OrdersStack = createStackNavigator();
const OrdersScreen = () => (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={Orders} />
      <OrdersStack.Screen name="Receipt" component={Receipt} />
    </OrdersStack.Navigator>
  )


const SettingsStack = createStackNavigator();
const SettingsScreen = () =>  (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );


const HomeStack = createStackNavigator();
const HomeScreen = () =>  (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={home} />
  </HomeStack.Navigator>
  );
  


const Tab = createBottomTabNavigator();
const App = () => (
  
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Checkout') {
                return <Ionicons name="ios-cart" size={size} color={color} />;
              }else if( route.name === 'Home'){  
                return <Ionicons name="ios-home" size={size} color={color} />;
              }
               else if (route.name === 'Orders') {
                return <Ionicons name="ios-archive" size={size} color={color} />;
              } else if (route.name === 'Settings') {
                return <Ionicons name="ios-settings" size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
          <Tab.Screen name="Orders" component={OrdersScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
 
);

export default App;
