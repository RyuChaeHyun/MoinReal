import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 

const PhotoButton =({onPress}) =>{
    return(
        <Styled.buttonContainer onPress = {onPress}>
            <Ionicons name="chatbox-outline" size={24} color="black" />
        </Styled.buttonContainer>
    );
};

const DetailProfile= ({url})=>{
    return(
        <Styled.wrapper>
            <StyledImage source = {{url: url}}/>
            <Styled.name>Laura</Styled.name>
            <PhotoButton/>
        </Styled.wrapper>
    );
};

const Styled={
    wrapper : styled.View`
    flex:1;
    flexDirection:'row';
    background-color:#ffffff;
    height:300px;
    margin: 50px 30px;
    border-radius:3px;
    border:0.5px solid #A0A0A0;
    &+& {
        margin-top: 20px;
    }
    `,
    styledImage : styled.Image`
        flex:1;
        position:absolute;
        bottom:9;
        left:30;
        background-color: #CA5353;
        width:30px;
        height:30px;
        border-radius:30px;
        padding-bottom:10px;
    `,
    name : styled.Text`
        flex:1;
        position:absolute;
        bottom:7;
        left:110;
        font-size:17px;
        color: #000000;
        margin-bottom: 7px;
        `,
    buttonContainer : styled.TouchableOpacity`
        flex:1;
        background-color: #ffffff;
        position:absolute;
        bottom:7;
        right:13;
        width:30px;
        height:30px;
        border-radius:5pc;
        justify-content:center;
        align-items:center;
        `,

}
export default DetailProfile;