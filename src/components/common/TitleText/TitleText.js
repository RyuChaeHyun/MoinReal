import styled from 'styled-components/native';
import theme from './../../../theme';

const TitleText = ({title, ...props}) =>{
    return (
        <Styled.text {...props}>{title}</Styled.text>
    );
}

const Styled = {
    text: styled.Text`
        padding-left: 8px;
        font-weight: bold;
        font-size: ${theme.fontSize.xl}px;
    `,
}

export default TitleText;
