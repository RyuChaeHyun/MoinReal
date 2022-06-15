import { View } from 'react-native';
import styled from 'styled-components/native';
import React from'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
// import theme from '../../theme';

const SharingInfoRestaurant = ({route, navigation} ) => {
    console.log(route.params);
    return (
        <Styled.container>
            <KeyboardAwareScrollView extraScrollHeight={10}>
                <Styled.Title>맛집</Styled.Title>
                <Styled.Subtitle>맛집을 자유롭게 공유해봐요~</Styled.Subtitle>
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

export default SharingInfoRestaurant;

