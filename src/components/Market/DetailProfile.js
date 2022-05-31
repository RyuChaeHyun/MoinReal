import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 

const Wrapper = styled.View`
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
`;

const StyledImage = styled.Image`
    flex:1;
    position:absolute;
    bottom:9;
    left:30;
    background-color: #CA5353;
    width:30px;
    height:30px;
    border-radius:30px;
    padding-bottom:10px;
`;

const Name = styled.Text`
    flex:1;
    position:absolute;
    bottom:7;
    left:110;
    font-size:17px;
    color: #000000;
    margin-bottom: 7px;
`;

const ButtonContainer = styled.TouchableOpacity`
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
    `;

const PhotoButton =({onPress}) =>{
    return(
        <ButtonContainer onPress = {onPress}>
            <Ionicons name="chatbox-outline" size={24} color="black" />
        </ButtonContainer>
    );
};

const DetailProfile= ({url})=>{
    return(
        <Wrapper>
            <StyledImage source = {{url: url}}/>
            <Name>Laura</Name>
            <PhotoButton/>
        </Wrapper>
    );
};

export default DetailProfile;