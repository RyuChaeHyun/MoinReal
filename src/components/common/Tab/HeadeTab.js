import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderRight, LogoTitle } from '../Header/Header';
import TabNavigator from './TabNavigator';
import theme from '../../../theme';
const Stack = createNativeStackNavigator();  

const HeaderTab = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                title: '',
                headerTintColor: theme.colors.dark,
                headerStyle: {
                backgroundColor: theme.colors.primary,
                },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: theme.fontSize.lg,
            },
            headerLeft: ()=><LogoTitle />,
            headerRight:  ()=><HeaderRight/>,
            }}>
            <Stack.Screen name="HeaderTab" component={TabNavigator}/>
        </Stack.Navigator>
    );
};
 export default HeaderTab;