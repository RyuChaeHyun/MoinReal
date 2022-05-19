import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { textStyles} from './styles';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../setting/FirebaseConfig';
import SharingInfoList from '../components/sharingInfo/SharingInfoList';
import JobOpeningList from '../components/JobOpening/JobOpeningList';
import JobFindingList from '../components/JobFinding/JobFinding';
import MarketList from '../components/Market/MarketList'

initializeApp(firebaseConfig);

const TabList = {
  SharingInfo: "SharingInfo", 
  Market: "Market", 
  JobOpening: "JobOpening", 
  JobFinding: "JobFinding",
}

export default function App() {
  const [tab, setTab] = React.useState(TabList.SharingInfo)

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Button onPress={()=>setTab(TabList.SharingInfo)} title={TabList.SharingInfo}></Button>
        <Button onPress={()=>setTab(TabList.Market)} title={TabList.Market}></Button>
        <Button onPress={()=>setTab(TabList.JobOpening)} title={TabList.JobOpening}></Button>
        <Button onPress={()=>setTab(TabList.JobFinding)} title={TabList.JobFinding}></Button>
      </View>
      <Text style={textStyles.basicText}>안녕 테스트야</Text>
      <Text style={textStyles.errorText}>style error일때 어떻게 보이는지 보여주는 용이에요</Text>
      { tab===TabList.SharingInfo ? (<SharingInfoList/>)
      : tab === TabList.Market ? (<MarketList />) 
      : tab === TabList.JobOpening ? (<JobOpeningList />) 
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
