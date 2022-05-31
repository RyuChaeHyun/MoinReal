import React, { useContext, useState } from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import InputWithImage from './InputWithImage';
import InputLabel from './InputLabel';
import InputDropBox from './InputDropBox';
import Button from './Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StyledView = styled.View`
    height:vh(100);
    // height:100vh;
    background-color:#ffffff;
`;

const SharingInfoUpdate = () => {
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
          <StyledView>
              <InputLabel label="제목"/>
              <InputWithImage label="사진"/>
              <InputDropBox label="카테고리"/>
              <InputLabel label="상세 내용"/>
              <Button title="수정 하기"/>
          </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default SharingInfoUpdate;