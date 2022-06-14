import styled from 'styled-components/native';
import theme from './../../../theme';

// type은 Square 혹은 Round만 가능하다.
const Button = ({shape, title, ...props}) => {
    if(shape==='Square') {
        return (
        <Styled.squareButtonContainer {...props}>
            <Styled.text>
                {title}
            </Styled.text>
        </Styled.squareButtonContainer>
        );
    }
    else if(shape==='Round') {
        return (
            <Styled.roundButtonContainer {...props}>
                <Styled.text>
                    {title}
                </Styled.text>
            </Styled.roundButtonContainer>
        );
    }
    else if(shape=== 'Text') {
        return (
            <Styled.textButtonContainer {...props}>
                <Styled.text>
                    {title}
                </Styled.text>
            </Styled.textButtonContainer>
        );
    }
}
// Style
const Styled = {
    roundButtonContainer: styled.TouchableOpacity`
        background-color: ${theme.colors.primary};
        justify-content: center;
        align-items: center;
        border-radius: 150px;
        height: 48px;
        margin: 10px 0;
        `,
    squareButtonContainer: styled.TouchableOpacity`
        background-color: ${theme.colors.primary};
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: fit-content;
        padding: 10px;
        align-self: center;
    `,

    textButtonContainer : styled.TouchableOpacity`
        flex-direction : row-reverse;
        margin-top : 13px;
        textDecorationLine: underline;
        margin-right : 10px;

    `,
    text: styled.Text`
        font-weight: bold;
        font-size: ${theme.fontSize.md}px;
        color: ${theme.colors.dark};
    `,
}

// Export
export default Button;
