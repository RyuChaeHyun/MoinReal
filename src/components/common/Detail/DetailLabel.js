import React from 'react';
import styled from 'styled-components/native';

const DetailLabel = ({url, title, subtitle, category}) => (
    <Styled.wrapper>
        <Styled.styledImage source ={{ url:url }}/>
        <Styled.title>{title}</Styled.title>
        <Styled.subTitle>{subtitle}</Styled.subTitle>
        <Styled.category>{category}</Styled.category>
    </Styled.wrapper>
);

const Styled={
    wrapper : styled.View`
        flex-direction:column;
        width:100%;
        background-color:#ffffff;
        margin:10px 10px;
        padding: 10px 20px;
        &+& {
            margin-top: 20px;
        }
    `,
    title : styled.Text`
        font-size:20px;
        font-weight:700;
        color: #000000;
        margin-top: 17px;
        margin-bottom: 10px;
    `,
    subTitle : styled.Text`
        font-size:13px;
        color: #000000;
        margin-top:7px;
        margin-bottom: 9px;
    `,
    category : styled.Text`
        font-size:15px;
        color: #000000;
        align-self:flex-end;
    `,
    styledImage : styled.Image`
        background-color: #FFFDEB;
        width:100%;
        height:200px;
        border-radius:3px;
        padding-bottom:10px;
    `,
}
export default DetailLabel;