import * as React from 'react';
import * as firebase from 'firebase/app';
import config from '../setting/firebase.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SharingInfoList from './components/sharingInfo/SharingInfoList';
import JobFindingList from './components/JobFinding/JobFindingList';
import JobOpeningList from './components/JobOpening/JobOpeningList';
import MarketList from './components/Market/MarketList';
import { colors } from './theme';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

export default function App() {
  firebase.initializeApp(config);

  const Stack = createNativeStackNavigator();  
    return (
      <>
          <NavigationContainer>
              <Stack.Navigator 
                screenOptions={{
                  title: 'Moin',
                  headerTintColor: colors.dark,
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: '30px',
                  },
                  initialRouterName:'SharingInfo',
                }}>
                  <Stack.Screen name="Singin" component={Signin} options={{ headerShown: false }} />
                  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
                  <Stack.Screen name="SharingInfo" component={MarketList} />
                  <Stack.Screen name="Market" component={MarketList} />
                  <Stack.Screen name="JobFinding" component={JobFindingList} />
                  <Stack.Screen name="JobOpening" component={JobOpeningList} />
              </Stack.Navigator>
          </NavigationContainer>        
      </>
    );
}
