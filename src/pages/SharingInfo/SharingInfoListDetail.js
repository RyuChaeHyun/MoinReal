import { View } from 'react-native';
import styled from 'styled-components/native';
import React from'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
// import theme from '../../theme';

const SharingInfoListDetail = ({route, navigation} ) => {
    const {pageTitle, pageSubTitle, list} = route.params;
    return (
        <Styled.container>
            <KeyboardAwareScrollView extraScrollHeight={10}>
                <Styled.Title>{pageTitle}</Styled.Title>
                <Styled.Subtitle>{pageSubTitle}</Styled.Subtitle>
                <ListItem list={list} navigation={navigation} />
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

export default SharingInfoListDetail;

