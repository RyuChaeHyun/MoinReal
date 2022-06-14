import { View, Text, Image, ScrollView} from 'react-native';
// import { ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import styled from 'styled-components/native';
import React, {Component} from'react';
// import theme from '../../theme';
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
import Button from './../../components/common/Button/Button';


// const [isSelect, setSelect] = useState([false, false, false]);
//가로 슬라이드 
//
const SharingInfoList = ({route, navigation} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    return (
        <Styled.Container1>
            <Styled.Menu>
                <Styled.MenuItem>정보공유</Styled.MenuItem>
                <Styled.MenuItem>구인</Styled.MenuItem>
                <Styled.MenuItem>구직</Styled.MenuItem>
                <Styled.MenuItem>중고거래</Styled.MenuItem>
            </Styled.Menu>
        
            <Button shape={'Text'} title={"글쓰기"} onPress = {()=> navigation.push('SharingInfoCreate')}/>
            {/* <Styled.UploadButton><Text>글쓰기</Text></Styled.UploadButton> */}

            <KeyboardAwareScrollView extraScrollHeight={10} >
            <Styled.Title onPress = {()=> navigation.push('SharingInfoRestaurant')}><Styled.TitleText>맛집</Styled.TitleText></Styled.Title>
                <Styled.CategoryView horizontal={true} showsVerticalScrollIndicator={false}>
                    <ListItem />
                </Styled.CategoryView>
            <Styled.Title onPress = {()=> navigation.push('SharingInfoCafe')}><Styled.TitleText>카페</Styled.TitleText></Styled.Title>
                <Styled.CategoryView horizontal={true} showsVerticalScrollIndicator={false}>
                    <ListItem />
                    </Styled.CategoryView>
            <Styled.Title onPress = {()=> navigation.push('SharingInfoTip')}><Styled.TitleText>생활꿀팁</Styled.TitleText></Styled.Title>
                <Styled.CategoryView horizontal={true} showsVerticalScrollIndicator={false}>
                    <ListItem />
                </Styled.CategoryView>
            </KeyboardAwareScrollView>
        </Styled.Container1>
    )
}

const Styled = {
    Container1 : styled.View`
    background-color : white;
`,
    MenuItem : styled.Text`
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
    Menu : styled.View`
    display:flex;
    flex-flow: row;
    borderBottomWidth : 2;
    borderBottomColor : gray;
    // flex:1;

`,
    Subtitle : styled.Text`
    font-size: 16px;
    color: black;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 40px;
    flex :1;
`,
    Title : styled.TouchableOpacity`
    margin-top: 20px;
    margin-left: 25px;
    //dd
    flex :1;
`,
    TitleText : styled.Text`
    font-size : 30px;
    font-weight: 600;
    color: black;
`,
// //uploadButton아직 components button x
//     UploadButton : styled.View`
//     font-size: 15px;
//     color: black;
//     font-weight: 450;
//     margin-top: 13px;
//     flex-direction : row-reverse;
//     // margin-right: 5px;
//     flex : 1;
//     // justifyContent : flex-end;
// `,
    CategoryView : styled.ScrollView`
    height : 230px;
`,
    squareButtonContainer: styled.TouchableOpacity`
    background-color: white;
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
