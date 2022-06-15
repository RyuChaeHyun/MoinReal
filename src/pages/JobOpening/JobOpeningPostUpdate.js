import React, { useEffect, useState } from "react";
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Input from '../../components/common/Input/Input';
import InputDropBox from '../../components/jobOpening/InputDropBox';
import { createData, createDataWithId } from './../../firebase/database';
import FormScrollView from './../../components/common/FormScrollView/FormScrollView';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const JobOpeningPostUpdate = ({navigation}) => {
    //유저 정보 가져오기
    const auth = getAuth();
    let uid = "";
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                setData({...data, writerId: uid});
            } else {
                navigation.push("Signin");
            }
        });
        

    },[])
    const [data, setData] = useState ({
        writerId: '',
        title: '',
        time: '', 
        salary: '', 
        detail: '', 
        companyname: '', 
        companysize: '', 
        welfare: '', 
    });

    const setTitle = (text) =>{
        setData({...data, title: text});
    };
    const setTime =  (text) =>{
        setData({...data, time: text});
    };
    const setSalary =  (text) =>{
        setData({...data, salary: text});
    };
    const setDetail = (text) =>{
        setData({...data, detail: text});
    };  
    const setCompanyname = (text) =>{
        setData({...data, companyname: text});
    };
    const setCompanysize =  (text) =>{
        setData({...data, companysize: text});
    };
    const setWelfare =  (text) =>{
        setData({...data, welfare: text});
    };

    const submitting = () => {
        console.log('submitting : ', data);
        createDataWithId('jobOpening/', "", data);
    }


    return (
        <FormScrollView buttonTitle={'작성'} buttonType="Square" onPress={submitting}>
            <Styled.title>구인 정보</Styled.title>
            <Input 
                title="제목" 
                placeholder="제목을 입력하세요"
                onChangeText={text =>setTitle(text)}/>
            <Input 
                title="근무시간" 
                placeholder="근무시간을 입력하세요"
                onChangeText={text =>setTime(text)}/>
            <Input 
                title="급여" 
                placeholder="급여를 입력하세요"
                onChangeText={text =>setSalary(text)}/>        
            <Input 
                title="상세내용" 
                inputHeight="150px" 
                numberOfLines={10}
                multiline
                placeholder="구인에 관한 정보를 자유롭게 기입하여 주세요."
                onChangeText={text =>setDetail(text)}/>
            <Styled.title>기업 정보</Styled.title>           
            <Input 
                title="기업명" 
                placeholder="기업명을 입력하세요"
                onChangeText={text =>setCompanyname(text)}/>   
            <InputDropBox label="회사규모" companysize={data.companysize} setCompanysize={setCompanysize} />
            <Input 
                title="복리후생" 
                placeholder="복리후생을 입력하세요"
                onChangeText={text =>setWelfare(text)}/>     
        </FormScrollView>
        
    );
};
const Styled = {
    title : styled.Text`
        font-size : 26px;
        font-weight: 600;
        color: black;
        margin-top : 10px;
        margin-bottom : 10px;
    `,
}

export default JobOpeningPostUpdate;
