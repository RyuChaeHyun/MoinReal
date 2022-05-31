import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputLabel from './InputLabel';
import InputWithImage from './InputWithImage';
import InputDropBox from './InputDropBox';
import preimage from '../../../assets/favicon.png'
import Button from './Button';
import styled from 'styled-components/native';
import { images } from "../../utils/images";
import { View, Text } from 'react-native';

const StyledView = styled.View`
    // height:100vh;
    height:vh(100);
    background-color:#ffffff;
`;

const SharingInfoList = ({route, navigation} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [photoUrl, setPhotoUrl] = useState({preimage});
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <StyledView>
                <InputLabel 
                    label="제목" 
                    name="title" 
                    placeholder="제목을 입력하세요"
                    onChangeText={text =>setTitle(text)}/>
                <InputWithImage label="사진" name="photo" url={images.test}/>
                <InputDropBox label="카테고리"/>
                <InputLabel 
                    label="상세내용" 
                    inputHeight="150" 
                    name="detail" 
                    placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                    onChangeText={text =>setDetail(text)}/>
                <Button title="작성"/>
            </StyledView>
        </KeyboardAwareScrollView>
    );
};

export default SharingInfoList;
