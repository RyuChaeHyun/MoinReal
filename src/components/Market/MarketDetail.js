import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "./DetailLabel";
import DetailProfile from "./DetailProfile";


const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const MarketDetail = () => {
    
    return(
        <KeyboardAwareScrollView extraScrollHeight={10}>
        <StyledView>
            <DetailLabel 
                // url = {productUrl} 
                title="[미개봉] 책 5000원에 싸게 가져가세요"
                subtitle="쿠팡에서 샀고 미개봉 새상품입니다 ㅎㅎ"/>
            <DetailProfile
            //  url = {photoUrl}
             />
        </StyledView>
        </KeyboardAwareScrollView>
    );
};


export default MarketDetail;