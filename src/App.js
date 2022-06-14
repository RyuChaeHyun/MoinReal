import * as React from 'react';
import * as firebase from 'firebase/app';
import config from '../setting/firebase.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SharingInfoList from './pages/SharingInfo/SharingInfoList';
// import SharingInfoRestaurant from './pages/SharingInfo/SharingInfoRestaurant';
// import SharingInfoList from './pages/SharingInfo/SharingInfoCafe';
// import SharingInfoList from './pages/SharingInfo/SharingInfoTip';
import JobFindingList from './pages/JobFinding/JobFindingList';
import JobOpeningList from './pages/JobOpening/JobOpeningList';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import MarketList from './components/Market/MarketList';
import theme from './theme';
import { HeaderRight, LogoTitle } from './components/common/Header/Header';
import MyPage from './pages/auth/MyPage';
import SharingInfoRestaurant from './pages/SharingInfo/SharingInfoRestaurant';
import SharingInfoCafe from './pages/SharingInfo/SharingInfoCafe';
import SharingInfoTip from './pages/SharingInfo/SharingInfoTip';


// none = 헤더없음 / basic = 뒤로가기버튼 + 페이지명 / home= 로고 + 채팅 + 프로필
// name은 절대 중복되면 안됨.
// none은 name과 component만 들어가고, basic은 name, component, title이 들어가고, home은 name, component만 들어감.
const pageHeaderList = [
  {type: 'none', name: 'Signin', component: Signin},
  {type: 'basic', name:'Signup', component: Signup, title:'회원 가입'},
  {type: 'basic', name:'MyPage', component: MyPage, title:'마이페이지'},
  {type: 'home', name:'SharingInfoList', component:SharingInfoList},
  {type: 'basic', name:'SharingInfoRestaurant', component:SharingInfoRestaurant, title:'맛집'},
  {type: 'basic', name:'SharingInfoCafe', component:SharingInfoCafe, title:'꿀카공'},
  {type: 'basic', name:'SharingInfoTip', component:SharingInfoTip, title:'꿀팁'},
  {type: 'home', name:'MarketList', component:MarketList},
  {type: 'home', name:'JobFindingList', component:JobFindingList},
  {type: 'home', name:'JobOpeningList', component:JobOpeningList},
]

export default function App() {
  // basic setting
  firebase.initializeApp(config);
  const Stack = createNativeStackNavigator();  

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName = 'Signin'
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

