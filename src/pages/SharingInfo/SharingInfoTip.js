import { View, Text, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import React, {Component} from'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
// import theme from '../../theme';

const SharingInfoTip = ({route, navigation} ) => {
    console.log(route.params);
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <Styled.Title>생활꿀팁</Styled.Title>
            <Styled.Subtitle>꿀팁! 공유해봐요~</Styled.Subtitle>
           <ListItem />
    </KeyboardAwareScrollView>
    )
}

const Styled = { 
    Subtitle : styled.Text`
    font-size: 16px;
    color: black;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 40px;
`,
    Title : styled.Text`
    font-size: 30px;
    color: black;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 25px;
`,
}

export default SharingInfoTip;

//theme처리도 해야하고. 
