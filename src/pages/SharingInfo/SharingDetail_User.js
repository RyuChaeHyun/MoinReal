import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import DetailLabel from "./DetailLabel";
import DetailProfile_User from "./DetailProfile_User";
import theme from "../../theme";

const StyledContainer = styled.View`
    background-color : ${theme.colors.white};
    height: 100%;
`;

const StyledView = styled.View`
    background-color:#ffffff;
    height:vh(100);
`;

const SharingInfo_User = ({navigation}) => {
    const [, updateState] = useState();
    const [data, setDatas] = useState({});

    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {
        forceUpdate();
    }, [data]);

    const datas = {
        url:data.url,
        title:data.title,
        subtitle:data.subtitle,
        category:data.category,
    }
    const profiledata = {
        url:"프로필 사진 주소",
    }
    return(
        <StyledContainer>
            <KeyboardAwareScrollView extraScrollHeight={10}>
                <StyledView>
                    <DetailLabel 
                    url= {datas.url}
                    title={datas.title}
                    subtitle={datas.subtitle}
                    category={datas.category}/>
                    <DetailProfile_User
                        url={profiledata.url}
                    />
                </StyledView>
            </KeyboardAwareScrollView>
        </StyledContainer>
    );
};


export default SharingInfo_User;