import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
    flex-direction:column;
    width:100%;
    background-color:#ffffff;
    margin:10px 10px;
    padding: 10px 20px;
    &+& {
        margin-top: 20px;
    }
`;

const Title = styled.Text`
    font-size:20px;
    font-weight:700;
    color: #000000;
    margin-top: 17px;
    margin-bottom: 10px;
`;

const SubTitle = styled.Text`
    font-size:13px;
    color: #000000;
    margin-top:7px;
    margin-bottom: 9px;
`;

const Price = styled.Text`
    font-size:15px;
    color: #000000;
    align-self:flex-end;
`;

const StyledImage = styled.Image`
    background-color: #FFFDEB;
    width:100%;
    height:200px;
    border-radius:3px;
    padding-bottom:10px;
`;

const DetailLabel = ({url, title, subtitle, price}) => (
    <Wrapper>
        <StyledImage source ={{ url:url }}/>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Price>{price}</Price>
    </Wrapper>
);

export default DetailLabel;