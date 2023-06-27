import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/redux/store';
import Budget from './src/components/Budget';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from '@react-native-material/core';
import BudgetList from './src/components/BudgetList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddBudget"
            component={Budget}
            />
          <Stack.Screen
            name="BudgetList"
            component={BudgetList}
            />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
