import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "./DetailLabel";
import DetailProfile from "./DetailProfile";


const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const SharingDetail_nonUser = () => {
    const data = {
        url:"사진 주소",
        title:"kbuernex 진짜 맛있어요!!",
        subtitle:"미슐랭에 들었을 정도로 정말 맛있답니다!!!!!!!!!!!",
        category:"맛집",
    }
    const profiledata = {
        url:"프로필 사진 주소",
    }

    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <DetailLabel 
                url= {data.url}
                title={data.title}
                subtitle={data.subtitle}
                category={data.category}/>
            <DetailProfile
                  url={profiledata.url}
             />
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default SharingDetail_nonUser;