import { View, Text, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import React, {Component} from'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//theme아직. 
import {theme} from '../../theme';
import ListItem from '../../components/sharingInfo/ListItem';

const SharingInfoCafe = ({route, navigation} ) => {
    console.log(route.params);
    return (
        <Styled.container>
            <KeyboardAwareScrollView extraScrollHeight={10}>
                <Styled.Title>카페</Styled.Title>
                <Styled.Subtitle>카페 정보 자유롭게 공유해봐요~</Styled.Subtitle>
                <ListItem />
            </KeyboardAwareScrollView>
        </Styled.container>
    )
}

const Styled = {
    container : styled.View`
        background-color : white;
        flex :1;
    `,
    Item : styled.View`
    background: white;
    border-radius: 18px;
    margin: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    width : 150px;   
`,
    Cover : styled.View`
    width: 100%;
    height: 150px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
`, 
    ImageBox : styled.View`
    width: 100%;
    height: 100%;
`,
    Content : styled.View`
    flex-direction: column;
    align-items: center;
    height: 60px;
`, 
    Description : styled.Text`
    color: black;
    font-size: 13px;
    font-weight: 550;
`, 
    ItemsLayout : styled.View`
    // flex-wrap : wrap;
    display : flex;
    align-content : flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justifyContent : center;
`, 
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

export default SharingInfoCafe;

//theme처리
