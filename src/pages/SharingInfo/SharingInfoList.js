import { View, Text, Image, ScrollView} from 'react-native';
import { useEffect, useState } from "react";
import styled from 'styled-components/native';
import React from'react';
import theme from '../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
import Button from './../../components/common/Button/Button';


const listItems = [
    {name : '맛집', link: 'SharingInfoRestaurant'},
    {name : '카페', link: 'SharingInfoCafe'},
    {name : '생활꿀팁', link: 'SharingInfoTip'},
];

const SharingInfoList = ({navigation} ) => {
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
                {listItems.map(item=>(
                    <Styled.listBox key={item.name}>
                        <Styled.listTitle onPress = {()=> navigation.push(item.link)}>
                            <Styled.listTitleText>{item.name}</Styled.listTitleText>
                        </Styled.listTitle>
                        <Styled.listCategoryView horizontal={true} showsVerticalScrollIndicator={false}>
                            <ListItem />
                        </Styled.listCategoryView>
                    </Styled.listBox>
                ))}
            </KeyboardAwareScrollView>
        </Styled.container>
    )
}

const Styled = {
    container : styled.View`
    background-color : white;
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
    listBox: styled.View`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,
    listTitle : styled.TouchableOpacity`
        padding-left: 15px;
    `,
    listTitleText : styled.Text`
        font-size : 30px;
        font-weight: 600;
        color: black;
    `,
    listCategoryView : styled.ScrollView`
        height : 230px;
    `,
    squareButtonContainer: styled.TouchableOpacity`
        background-color: ${theme.colors.white};
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: fit-content;
        padding: 10px;
        align-self: center;
    `,
}

export default SharingInfoList;

//theme처리도 해야하고. 
//다른데 스크롤바 바꿔야됨. !!! 나는 input 안쓰니까. 
//컴퍼넌트로 빼내기 
//button눌렀을 때 해당 카테고리 색까 ㄹ바구끽
//인덴테이션 정리 .