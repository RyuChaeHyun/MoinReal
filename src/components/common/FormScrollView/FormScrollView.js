import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Button from "../Button/Button";
import { View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import theme from './../../../theme';

const FormScrollView = ({children, buttonTitle, buttonType='Round', ...buttonProps}) => {
    return (
        <Styled.container>
            <Styled.scrollView invertStickyHeaders={true}>
                {children}
            </Styled.scrollView>
            <Styled.buttonBox>
                <Button title={buttonTitle} shape={buttonType} {...buttonProps} />
            </Styled.buttonBox>
        </Styled.container>
    );
}

const Styled = {
    container: styled.SafeAreaView`
        height: 100%;
        width: 100%;
        margin-top: ${StatusBar.currentHeight},
        background: ${theme.colors.white};
    `,
    scrollView: styled.ScrollView`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 16px;
    `,
    buttonBox: styled.View`
        padding: 16px;
    `,
}

export default FormScrollView;
