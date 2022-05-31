import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputLabel from '../../components/sharingInfo/InputLabel';
import InputWithImage from '../../components/sharingInfo/InputWithImage';
import InputDropBox from '../../components/sharingInfo/InputDropBox';
import styled from 'styled-components/native';
import theme from '../../theme';
import Button from './../../components/common/Button/Button';

const StyledView = styled.View`
    height:100vh;
    background-color:${theme.colors.white};
`;

const SharingInfoList = ({route, navigation} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    return (
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <StyledView>
                <InputLabel 
                    label="제목" 
                    name="title" 
                    placeholder="제목을 입력하세요"
                    onChangeText={text =>setTitle(text)}/>
                <InputWithImage label="사진" name="photo" url={photoUrl}/>
                <InputDropBox label="카테고리"/>
                <InputLabel 
                    label="상세내용" 
                    inputHeight="150" 
                    name="detail" 
                    placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                    onChangeText={text =>setDetail(text)}/>
                <Button type={'Square'} title="작성"/>
            </StyledView>
        </KeyboardAwareScrollView>
    );
};

export default SharingInfoList;
