import Button from './../Button/Button';
import styled from 'styled-components/native';
import theme from './../../../theme';

export const LogoTitle = () =>{
    return (
        <Styled.leftContainer>
            <Styled.logoText>MOIN</Styled.logoText>
        </Styled.leftContainer>
    );
}

export const HeaderRight = ({toMypage}) =>{
    return (
    <Styled.rightContainer>
        <Button shape={'Round'} title={'채팅'} onPress={()=>console.log("move to chat")} />
        <Button shape={'Round'} title={'내정보'} onPress = {()=>toMypage()} />
    </Styled.rightContainer>
    );
}

const Styled = {
    logoText: styled.Text`
        font-weight: bold;
        font-size: ${theme.fontSize.xxl}px;
    `,
    leftContainer: styled.View`
        padding-left: 24px;
    `,
    rightContainer: styled.View`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 12px;
        padding-right: 12px;
    `,
}
