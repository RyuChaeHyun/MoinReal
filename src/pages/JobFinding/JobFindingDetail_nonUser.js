import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "../../components/Market/DetailLabel";
import DetailProfile from "../../components/common/Detail/DetailProfile";
import theme from "../../theme";


const JobFindingDetail_nonUser = () => {
    const data = {
        url:"사진 주소",
        title:"디자인 전공 경력자입니다",
        subtitle:"명지대학교 융합소프트웨어학부를 졸업하여~~~~",
        category:"",
    }
    const profiledata = {
        url:"프로필 사진 주소",
    }
    return(
        <Styled.container>
            <KeyboardAwareScrollView extraScrollHeight={10}>
                <Styled.styleview>
                    <DetailLabel 
                        url= {data.url}
                        title={data.title}
                        subtitle={data.subtitle}
                        category={data.category}/>
                    <DetailProfile
                        url={profiledata.url}
                    />
                </Styled.styleview>
            </KeyboardAwareScrollView>
        </Styled.container>
    );
};

const Styled={
    container : styled.View`
        background-color : ${theme.colors.white};
        height: 100%;
    `,
    styleview : styled.View`
        background-color:#ffffff;
        height:vh(100);
    `,
}
export default JobFindingDetail_nonUser;