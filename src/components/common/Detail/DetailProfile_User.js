import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const PhotoButton_delete =({onPress}) =>{
    return(
        <Styled.buttonContainer_delete onPress = {onPress}>
            <AntDesign name="delete" size={24} color="black" />
        </Styled.buttonContainer_delete>
    );
};


const PhotoButton_update =({onPress}) =>{
    return(
        <Styled.buttonContainer_update onPress = {onPress}>
            <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
        </Styled.buttonContainer_update>
    );
};

const DetailProfile_User= ({url})=>{
    return(
        <Styled.wrapper>
            <Styled.styledImage source = {{url: url}}/>
            <Styled.name>Laura</Styled.name>
            <PhotoButton_delete/>
            <PhotoButton_update/>
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
        background-color: #0080ff;
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

    buttonContainer_delete : styled.TouchableOpacity`
        flex:1;
        background-color: #ffffff;
        position:absolute;
        bottom:7;
        right:45;
        width:30px;
        height:30px;
        border-radius:5pc;
        justify-content:center;
        align-items:center;
        `,
    buttonContainer_update : styled.TouchableOpacity`
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

export default DetailProfile_User;