import * as React from 'react';
import * as firebase from 'firebase/app';
import config from '../setting/firebase.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SharingInfoList from './components/sharingInfo/SharingInfoList';
import JobFindingList from './components/JobFinding/JobFindingList';
import JobOpeningList from './components/JobOpening/JobOpeningList';
import MarketList from './components/Market/MarketList';
import MarketUpdate from './components/Market/MarketUpdate';
import MarketDetail from './components/Market/MarketDetail';
import MarketDetail_User from './components/Market/MarketDetail_User';
import { colors } from './theme';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import SharingInfoUpdate from './components/sharingInfo/SharingInfoUpdate';

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
                  <Stack.Screen name="SharingInfo" component={MarketDetail_User} />
                  <Stack.Screen name="Market" component={MarketList} />
                  <Stack.Screen name="JobFinding" component={JobFindingList} />
                  <Stack.Screen name="JobOpening" component={JobOpeningList} />
              </Stack.Navigator>
          </NavigationContainer>        
      </>
    );
}
