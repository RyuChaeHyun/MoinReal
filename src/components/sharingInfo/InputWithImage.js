import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
    background-color:#ffffff;
    justify-content:left;
    align-items:left;
    padding: 0px 20px;
`;

const Label = styled.Text`
    font-size:15px;
    color: #000000;
    margin-bottom: 7px;
`;

const StyledImage = styled.Image`
    background-color: #FFFDEB;
    width:100%;
    height:160px;
    border-radius:3px;
    padding-bottom:10px;
`;

const InputWithImage = ({label, url, imageStyle, rounded}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledImage src ={{ url:url }} styled={imageStyle} rounded={rounded}/>
        </Container>
    );
};

InputWithImage.defaultProps ={
    rounded:false,
};

InputWithImage.prototype ={
    url : PropTypes.string,
    image :PropTypes.object,
    rounded : PropTypes.bool,
};

export default InputWithImage;