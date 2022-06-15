import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import JobOpeningList from '../../../pages/JobOpening/JobOpeningList';
import JobFindingList from '../../../pages/JobFinding/JobFindingList';
import SharingInfoList from '../../../pages/SharingInfo/SharingInfoList';
import theme from '../../../theme';
import MarketList from './../../../pages/Market/MarketList';

const Tab = createMaterialTopTabNavigator();

function HeaderTab(){
    return(
        <Tab.Navigator 
            initialRouteName='SharingInfoList'
            tabBarOptions={{
                indicatorStyle: {
                    backgroundColor: theme.colors.labelprimary,
                },
                activeTintColor:theme.colors.labelprimary,
                inactiveTintColor: theme.colors.dark,
                labelStyle:{
                    fontSize:17,
                    fontWeight:"bolder",
                },
                style:{
                    height:50,
                }
             }}
        >
            <Tab.Screen
                name="SharingInfo"
                component={SharingInfoList}
                options={{
                    tabBarLabel:'정보공유'
                }}
             />
             <Tab.Screen
                name="JobOpening"
                component={JobOpeningList}
                options={{
                    tabBarLabel:'구인'
                }}
             />
             <Tab.Screen
                name="JobFinding"
                component={JobFindingList}
                options={{
                    tabBarLabel:'구직'
                }}
             />
             <Tab.Screen
                name="Market"
                component={MarketList}
                options={{
                    tabBarLabel:'중고거래'
                }}
             />
        </Tab.Navigator>
    )
}
export default HeaderTab;