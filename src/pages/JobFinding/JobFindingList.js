import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import React from'react';
import Button from './../../components/common/Button/Button';
import ListItem from '../../components/sharingInfo/ListItem';
import theme from '../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FindingList from '../../components/JobFinding/FindingList';



const JobFindingList = ( ) => {
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
                <Styled.Title>구직</Styled.Title>
                    <FindingList/>
            </KeyboardAwareScrollView>
        </Styled.container>
    )
}
const Styled = {
    container : styled.View`
        background-color : ${theme.colors.white};
    `,
    Title : styled.Text`
        font-size: 30px;
        color: black;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 25px;
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
    // squareButtonContainer: styled.TouchableOpacity`
    //     background-color: ${theme.colors.white};
    //     justify-content: center;
    //     align-items: center;
    //     border-radius: 4px;
    //     width: fit-content;
    //     padding: 10px;
    //     align-self: center;
    // `,
}
export default JobFindingList;
