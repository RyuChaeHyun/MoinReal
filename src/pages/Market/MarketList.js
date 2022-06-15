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
            <Styled.topBar>
                <Styled.Title>중고거래</Styled.Title>
                <Button shape={'Text'} title={"글쓰기"} onPress = {()=> navigation.push('SharingInfoCreate')}/>
            </Styled.topBar>
            <KeyboardAwareScrollView extraScrollHeight={10} >
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
    Title : styled.Text`
        font-size: 25px;
        color: black;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 25px;
`,
    topBar: styled.View`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items : center;

`,

}

export default MarketList;

