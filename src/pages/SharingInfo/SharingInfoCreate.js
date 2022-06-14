import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputLabel from '../../components/sharingInfo/InputLabel';
import InputWithImage from '../../components/sharingInfo/InputWithImage';
import InputDropBox from '../../components/sharingInfo/InputDropBox';
import styled from 'styled-components/native';
import theme from '../../theme';
import Button from './../../components/common/Button/Button';
import { createData } from './../../firebase/database';
import Storage from './../../firebase/storage';
import FormScrollView from './../../components/common/FormScrollView/FormScrollView';

const StyledView = styled.View`
    height:100vh;
    background-color:${theme.colors.white};
`;

const SharingInfoList = ({route, navigation} ) => {
    console.log(route.params);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [ category, setCategory ] = useState("");
    const [detail, setDetail] = useState('');

    const _setClearData= () => {
        setTitle('');
        setImage(null);
        setCategory('');
        setDetail('');
    }
    const submitting = () => {
        console.log(title, image, category, detail);
        const data = {
            title: title,
            image: image,
            category: category,
            detail: detail,
        }
        createData('sharingInfo/', category, data);
        _setClearData();
    }
    return (
        <FormScrollView buttonTitle={'작성'} buttonType="Square" onPress={submitting}>
            <InputLabel 
                label="제목" 
                name="title" 
                placeholder="제목을 입력하세요"
                onChangeText={text =>setTitle(text)}/>
            <InputWithImage table={'sharingInfo'} label="사진" name="photo" imageUrl={image} setImageUrl={setImage} />
            <InputDropBox label="카테고리" category={category} setCategory={setCategory} />
            <InputLabel 
                label="상세내용" 
                inputHeight="150" 
                name="detail" 
                placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                onChangeText={text =>setDetail(text)}/>
        </FormScrollView>
    );
};

export default SharingInfoList;
