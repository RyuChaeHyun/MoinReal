import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "./DetailLabel";
import DetailProfile_User from "./DetailProfile_User";


const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const SharingInfo_User = () => {
    
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <DetailLabel 
                // url = {productUrl} 
                title="kbuernex 진짜 맛있어요!!2222"
                subtitle="미슐랭에 들었을 정도로 정말 맛있답니다!!!!!!!!!!!222222"/>
            <DetailProfile_User/>
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default SharingInfo_User;