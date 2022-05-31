import React, { useContext, useState } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import InputWithImage from '../sharingInfo/InputWithImage';
import InputLabel from '../sharingInfo/InputLabel';
import Button from '../sharingInfo/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const MarketUpdate = () => {
    
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <InputLabel label="제목"/>
            <InputWithImage label="사진"/>
            <InputLabel label="가격(단위: 원)"/>
            <InputLabel label="상세 내용"/>
            <Button title="수정하기"/>
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default MarketUpdate;