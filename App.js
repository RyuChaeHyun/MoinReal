import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './firebase/FirebaseConfig';
import SharingInfoList from './components/sharingInfo/SharingInfoList';
import JobOpeningList from './components/JobOpening/JobOpeningList';
import JobFindingList from './components/JobFinding/JobFinding';
import MarketList from './components/Market/MarketList'

// initializeApp(firebaseConfig);

const TabList = {
  SharingInfo: "SharingInfo", 
  Market: "Market", 
  JobOpening: "JobOpening", 
  JobFinding: "JobFinding",
}

export default function App() {
  const [status, setStatus] = React.useState(TabList.SharingInfo)
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={()=>setStatus(TabList.SharingInfo)} title={TabList.SharingInfo}></Button>
        <Button onPress={()=>setStatus(TabList.Market)} title={TabList.Market}></Button>
        <Button onPress={()=>setStatus(TabList.JobOpening)} title={TabList.JobOpening}></Button>
        <Button onPress={()=>setStatus(TabList.JobFinding)} title={TabList.JobFinding}></Button>
      </View>
      <Text>안녕 테스트야</Text>
      { status===TabList.SharingInfo ? (<SharingInfoList/>)
      : status === TabList.Market ? (<MarketList />) 
      : status === TabList.JobOpening ? (<JobOpeningList />) 
      :  (<JobFindingList />) }
      <StatusBar style="auto" />
    </View>
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
