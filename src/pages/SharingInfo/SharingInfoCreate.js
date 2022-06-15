import React, { useState } from "react";
import Input from '../../components/common/Input/Input';
import InputWithImage from '../../components/sharingInfo/InputWithImage';
import InputDropBox from '../../components/sharingInfo/InputDropBox';
import { updateData } from './../../firebase/database';
import FormScrollView from './../../components/common/FormScrollView/FormScrollView';

const SharingInfoCreate = ({navigation}) => {
    // console.log(navigation.params);
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
        const data = {
            title: title,
            image: image,
            category: category,
            detail: detail,
        }
        console.log('submitting : ', data);
        updateData('sharingInfo/', category, data);
        _setClearData();
    }
    return (
        <FormScrollView buttonTitle={'작성'} buttonType="Square" onPress={submitting}>
            <Input 
                title="제목" 
                name="title" 
                placeholder="제목을 입력하세요"
                onChangeText={text =>setTitle(text)}/>
            <InputWithImage table={'sharingInfo'} label="사진" name="photo" imageUrl={image} setImageUrl={setImage} />
            <InputDropBox label="카테고리" category={category} setCategory={setCategory} />
            <Input 
                title="상세내용" 
                inputHeight="150" 
                name="detail" 
                placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                rows={10}
                onChangeText={text =>setDetail(text)}/>
        </FormScrollView>
    );
};

export default SharingInfoCreate;
