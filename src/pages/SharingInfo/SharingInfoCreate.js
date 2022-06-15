import React, { useEffect, useState } from "react";
import Input from '../../components/common/Input/Input';
import InputWithImage from '../../components/sharingInfo/InputWithImage';
import InputDropBox from '../../components/sharingInfo/InputDropBox';
import { getData, updateData, createDataWithId } from './../../firebase/database';
import FormScrollView from '../../components/common/FormScrollView/FormScrollView';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const SharingInfoCreate = ({navigation}) => {
    // 유저 정보 가져옴
    const auth = getAuth();
    let uid = "";
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                setData({...data, writerId: uid});
            } else {
                navigation.push("Signin");
            }
        });
    }, [])
    
    // 포스트 데이터 설정
    const [data, setData] = useState({
        writerId: '',
        title: '',
        image: '',
        category: '',
        detail: '',
    });

    const setTitle = (text) =>{
        setData({...data, title: text});
    };
    const setImage =  (text) =>{
        setData({...data, image: text});
    };
    const setCategory =  (text) =>{
        setData({...data, category: text});
    };
    const setDetail = (text) =>{
        setData({...data, detail: text});
    };

    const submitting = () => {
        console.log('submitting : ', data);
        createDataWithId('sharingInfo/', data.category, data);
    }
    return (
        <FormScrollView buttonTitle={'작성'} buttonType="Square" onPress={submitting}>
            <Input 
                title="제목" 
                placeholder="제목을 입력하세요"
                onChangeText={text =>setTitle(text)}/>
            <InputWithImage  label="사진" table={'sharingInfo'}  image={data.image} setImage={setImage} />
            <InputDropBox label="카테고리" category={data.category} setCategory={setCategory} />
            <Input 
                title="상세내용" 
                placeholder="상품에 관한 정보를 자유롭게 기입하여 주세요."
                numberOfLines={10}
                onChangeText={text =>setDetail(text)}/>
        </FormScrollView>
    );
};

export default SharingInfoCreate;
