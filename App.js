import React from "react"

import store from "./src/store/store"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import ListScreen from "./src/components/ListScreen/ListScreen"
import PhotoScreen from "./src/components/PhotoScreen/PhotoScreen"

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App

const Navigation = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: true }}>
        <Stack.Screen options={{ title: "Gallery" }} name="List" component={ListScreen} />
        <Stack.Screen options={{ title: "" }} name="Photo" component={PhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
