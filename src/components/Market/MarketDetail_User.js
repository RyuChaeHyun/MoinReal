import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "./DetailLabel";
import DetailProfile_User from "./DetailProfile_User";


const StyledView = styled.View`
    background-color:#ffffff;
`;

const MarketDetail_User = () => {
    
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <DetailLabel 
                // url = {productUrl} 
                title="[미개봉] 책 5000원에 싸게 가져가세요!!"
                subtitle="쿠팡에서 샀고 미개봉 새상품입니다 ㅎㅎ"
                price="5000원"/>
            <DetailProfile_User/>
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default MarketDetail_User;