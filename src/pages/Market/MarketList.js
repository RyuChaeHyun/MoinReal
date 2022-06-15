import { View, Text, Image, ScrollView} from 'react-native';
import { useEffect, useState } from "react";
import styled from 'styled-components/native';
import React from'react';
import theme from '../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from './../../components/common/Button/Button';
import MarketListItem from '../../components/Market/MarketListItem';


const MarketList = ({navigation} ) => {
    return (
        <Styled.container>
            <Styled.menu>
                <Styled.menuItem>정보공유</Styled.menuItem>
                <Styled.menuItem>구인</Styled.menuItem>
                <Styled.menuItem>구직</Styled.menuItem>
                <Styled.menuItem>중고거래</Styled.menuItem>
            </Styled.menu>
            <Button shape={'Text'} title={"글쓰기"} onPress = {()=> navigation.push('SharingInfoCreate')}/>
            <KeyboardAwareScrollView extraScrollHeight={10} >
                <Styled.Title>중고거래</Styled.Title>
                <MarketListItem />
            </KeyboardAwareScrollView>
        </Styled.container>
    )
}

const Styled = {
    container : styled.View`
        background-color : white;
        flex :1;
    `,
    menuItem : styled.Text`
        display: inline-block;
        color: black;
        font-size: 1rem;
        font-weight : 800;
        line-height: 3rem;
        width: 25%;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s;
        text-decoration: none;
    `,
    menu : styled.View`
        display:flex;
        flex-flow: row;
        borderBottomWidth : 2;
        borderBottomColor : gray;
    `,

    Title : styled.Text`
        font-size: 30px;
        color: black;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 25px;
`,
}

export default MarketList;

