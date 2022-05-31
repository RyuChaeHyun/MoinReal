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

export const HeaderRight = () =>{
    return (
    <Styled.rightContainer>
        <Button type={'Square'} title={'안녕핫요'} onPress={()=>console.log("TEST")} />
        <Button type={'Round'} title={'얄로'} onPress={()=>console.log("TT")} />
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
        gap: 5px;
        padding-right: 24px;
    `,
}
