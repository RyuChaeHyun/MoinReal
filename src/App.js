import * as React from 'react';
import * as firebase from 'firebase/app';
import config from '../setting/firebase.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SharingInfoList from './components/sharingInfo/SharingInfoList';
import MarketList from './components/Market/MarketList';
import JobFindingList from './components/JobFinding/JobFindingList';
import JobOpeningList from './components/JobOpening/JobOpeningList';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import theme from './theme';
import { HeaderRight, LogoTitle } from './components/common/Header/Header';

// none = 헤더없음 / basic = 뒤로가기버튼 + 페이지명 / home= 로고 + 채팅 + 프로필
// name은 절대 중복되면 안됨.
// none은 name과 component만 들어가고, basic은 name, component, title이 들어가고, home은 name, component만 들어감.
const pageHeaderList = [
  {type: 'none', name: 'Signin', component: Signin},
  {type: 'basic', name:'Signup', component: Signup, title:'회원 가입'},
  {type: 'home', name:'SharingInfo', component:SharingInfoList},
  {type: 'home', name:'Market', component:MarketList},
  {type: 'home', name:'JobFinding', component:JobFindingList},
  {type: 'home', name:'JobOpening', component:JobOpeningList},
]

export default function App() {
  // basic setting
  firebase.initializeApp(config);
  const Stack = createNativeStackNavigator();  
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName = 'Sign'
            screenOptions={{
              title: 'Moin',
              headerTintColor: theme.colors.dark,
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: theme.fontSize.lg,
              },
            }}>
              {pageHeaderList.map(({...el})=>{
                if(el.type==='none'){
                  return (
                    <Stack.Screen 
                      key={el.name}
                      name={el.name} 
                      component={el.component} 
                      options={{ 
                        headerShown: false,
                      }} 
                    />
                  );
                }else if(el.type==='home'){
                  return (
                    <Stack.Screen 
                      key={el.name}
                      name={el.name} 
                      component={el.component} 
                      options={{ 
                        title: '',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          fontSize: theme.fontSize.lg,
                        },
                        headerLeft: ()=><LogoTitle />,
                        headerRight:  ()=><HeaderRight />,
                      }}
                    />
                  );
                } else {
                  return (
                  <Stack.Screen 
                    key={el.name}
                    name={el.name} 
                    component={el.component} 
                    options={{ title: el.title, headerTitleAlign: 'center'}} 
                  />
                  );
                }
              })}
          </Stack.Navigator>
      </NavigationContainer>        
    </>
  );
}

