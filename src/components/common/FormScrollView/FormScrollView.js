import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from "styled-components/native";
import Button from "../Button/Button";
import { StatusBar } from "expo-status-bar";
import theme from './../../../theme';

const FormScrollView = ({children, buttonTitle, buttonType='Round', ...buttonProps}) => {
    return (
        <Styled.container>
            <Styled.scrollView extraScrollHeight={10}>
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
    scrollView: styled(KeyboardAwareScrollView)`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    `,
    buttonBox: styled.View`
        padding: 16px;
    `,
}

export default FormScrollView;
