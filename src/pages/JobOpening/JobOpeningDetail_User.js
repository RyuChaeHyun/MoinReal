import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import JobInputLabel from "../../components/JobOpening/JobInputLabel";
import JobInputLabel2 from "../../components/JobOpening/JobInputLabel_2";
import TitleText from "../../components/common/TitleText/TitleText";
import DetailProfile_User from "../../components/common/Detail/DetailProfile_User";

const JobOpeningDetail_User =()=>{

    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
            <Styled.styleview>
                <Styled.title>구인 정보</Styled.title>
                <TitleText title={"KAKAO 독일 베를린"}/>
                <JobInputLabel label="근무시간" content="주5일 평일근무"/>
                <JobInputLabel label="급여(연봉, 단위:만원)" content="5000"/>
                <JobInputLabel2 label="상세 내용" content="ㅂㄷㅈㄱㄷㅅㄱㄷㅈㅂㄱ"/>
                
                <Styled.title>기업 정보</Styled.title>
                <JobInputLabel2 label="기업명" content="카카오"/>
                <JobInputLabel2 label="회사규모" content="1~10명"/>
                <JobInputLabel2 label="복리후생" content="산재보험, 야간근무수당, 국민연금"/>

                <Styled.title>채용담당자</Styled.title>
                <DetailProfile_User url = ""/>
            </Styled.styleview>
        </KeyboardAwareScrollView>

    );
};

const Styled={
    title : styled.Text`
        margin:15px;
        font-size:20px;
        font-weight:1000;
    `,
    styleview : styled.View`
        background-color:#ffffff;
        height:vh(100);
        margin-bottom:12px;   
    `,
}

export default JobOpeningDetail_User;