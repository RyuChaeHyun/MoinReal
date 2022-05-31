import styled from 'styled-components/native';
import theme from '../../../theme';

const Input = ({title,placeholder, onChangeSetText, ...props}) => {
    return (
        <Styled.container>
            <Styled.label>
                {title}
            </Styled.label>
            <Styled.textInput 
                underlineColorAndroid = "transparent"
                placeholder = {placeholder}
                autoCapitalize = "none"
                onChangeText = {text=>onChangeSetText(text)}
                {...props}
                />
        </Styled.container>

    );
}

const Styled = {
    container: styled.View`
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 0;
    `,
    label : styled.Text`
        font-size: ${theme.fontSize.md}px;
        font-weight: bold;
        color: black
        padding-left: 16px;
    `,
    textInput: styled.TextInput`
        padding: 5px 10px;
        height: auto;
        font-size: ${theme.fontSize.md}px;
        border : 1px solid ${theme.colors.gray};
        border-radius: 8px;
        background-color: ${theme.colors.white};
        placeholderTextColor: ${theme.colors.darkgray};
    `,

}

export default Input;
