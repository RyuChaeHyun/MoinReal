import styled from 'styled-components/native';
import theme from './../../../theme';

// type은 Square 혹은 Round만 가능하다.
const Button = ({type, title, children, ...props}) => {
    if(type==='Square') {
        return (
        <Styled.squareButtonContainer {...props}>
            <Styled.text>
                {title}
            </Styled.text>
        </Styled.squareButtonContainer>
        );
    }
    else if(type==='Round') {
        return (
            <Styled.roundButtonContainer {...props}>
                <Styled.text>
                    {title}
                </Styled.text>
            </Styled.roundButtonContainer>
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
        border-radius: 5px;
        width:100%;
    `,
    text: styled.Text`
        font-weight: bold;
        font-size: ${theme.fontSize.md}px;
    `,
}

// Export
export default Button;
