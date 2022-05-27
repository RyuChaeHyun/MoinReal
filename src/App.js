import * as React from 'react';
import * as firebase from 'firebase/app';
import config from '../setting/firebase.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SharingInfoList from './components/sharingInfo/SharingInfoList';
import MarketList from './components/Market/MarketList';
import JobFindingList from './components/JobFinding/JobFindingList';
<<<<<<< Updated upstream
// import JobOpeningList from './components/JobOpening/JobOpeningList';
// import { colors } from './theme';
// import Signin from './components/auth/signin';
// import Signup from './components/auth/signup';

// export default function App() {
//   firebase.initializeApp(config);

//   const Stack = createNativeStackNavigator();  
//     return (
//       <>
//           <NavigationContainer>
//               <Stack.Navigator 
//                 screenOptions={{
//                   title: 'Moin',
//                   headerTintColor: colors.dark,
//                   headerStyle: {
//                     backgroundColor: colors.primary,
//                   },
//                   headerTitleStyle: {
//                     fontWeight: 'bold',
//                     fontSize: '30px',
//                   },
//                   initialRouteName: 'SharingInfo'
//                 }}>
//                   <Stack.Screen name="Singin" component={Signin} options={{ headerShown: false }} />
//                   <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
//                   <Stack.Screen name="SharingInfo" component={SharingInfoList} />
//                   <Stack.Screen name="Market" component={MarketList} />
//                   <Stack.Screen name="JobFinding" component={JobFindingList} />
//                   <Stack.Screen name="JobOpening" component={JobOpeningList} />
//               </Stack.Navigator>
//           </NavigationContainer>        
//       </>
//     );
// }

import MarketList from './components/Market/MarketList'

// firebase.initializeApp(config);

// const TabList = {
//   SharingInfo: "SharingInfo", 
//   Market: "Market", 
//   JobOpening: "JobOpening", 
//   JobFinding: "JobFinding",
// }

export default function App() {
  // const [tab, setTab] = React.useState(TabList.SharingInfo);
  // const [memo, setMemo] = React.useState("");
  // const setExampleData = () =>{
  //   const db = getDatabase();
  //   set(ref(db, 'memo/' + 'testmemoID'), {
  //     username: 'name',
  //     email: 'emailTEST',
  //     profile_picture : 'imageUrl',
  //     date: new Date().toString()
  //   });
  // }
  // const getExampleAllData = () =>{
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `memo/testmemoID`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       const val = snapshot.val();
  //       console.log(typeof val);
  //       setMemo(Object.entries(val));
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }
  // const getExampleData = () => {
  //   const db = getDatabase();
  //   const starCountRef = ref(db, 'memo/testmemoID');
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setMemo(Object.values(data));
  //   });
  // }

  return (
    <SharingInfoList></SharingInfoList>
    // <View style={styles.container}>
    //   <View style={{flexDirection: 'row'}}>
    //     <Button onPress={()=>setTab(TabList.SharingInfo)} title={TabList.SharingInfo}></Button>
    //     <Button onPress={()=>setTab(TabList.Market)} title={TabList.Market}></Button>
    //     <Button onPress={()=>setTab(TabList.JobOpening)} title={TabList.JobOpening}></Button>
    //     <Button onPress={()=>setTab(TabList.JobFinding)} title={TabList.JobFinding}></Button>
    //   </View>
    //   <View style={{flexDirection: 'row'}}>
    //     <Button onPress={()=>setExampleData()} title={'db Set Test'}></Button>
    //     <Button onPress={()=>getExampleData()} title={'db Get Test'}></Button>
    //     <Button onPress={()=>getExampleAllData()} title={'db Get All Test'}></Button>
    //   </View>
    //   <View>
    //     <Text>
    //       {memo}
    //     </Text>
    //   </View>
    //   <Text style={textStyles.basicText}>안녕 테스트야</Text>
    //   <Text style={textStyles.errorText}>style error일때 어떻게 보이는지 보여주는 용이에요</Text>
    //   { tab===TabList.SharingInfo ? (<SharingInfoList/>)
    //   : tab === TabList.Market ? (<MarketList />) 
    //   : tab === TabList.JobOpening ? (<JobOpeningList />) 
    //   :  (<JobFindingList />) }
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
