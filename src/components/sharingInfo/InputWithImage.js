import React from 'react';
import styled from 'styled-components/native';
import ImageUploader from '../../components/common/ImageUploader';

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

const InputWithImage = ({label, ...props}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <ImageUploader {...props} />
        </Container>
    );
};

export default InputWithImage;