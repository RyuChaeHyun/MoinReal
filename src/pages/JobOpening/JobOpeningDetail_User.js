import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import JobInputLabel from "../../components/JobOpening/JobInputLabel";

const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;
const StyledTitle = styled.Text`
    margin:10px;
    font-size:20px;
    font-weight:1000;
`;

const JobOpeningDetail_User =()=>{
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <StyledTitle>구인 정보</StyledTitle>
            <JobInputLabel label="근무시간"/>
        </StyledView>
        </KeyboardAwareScrollView>

    );
};

export default JobOpeningDetail_User;