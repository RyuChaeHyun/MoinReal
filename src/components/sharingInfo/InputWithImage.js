import React from 'react';
import styled from 'styled-components/native';
import ImageUploader from '../../components/common/ImageUploader';
import theme from '../../theme';

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
}

const InputWithImage = ({label, ...props}) => {
    return (
        <Styled.container>
            <Styled.label>{label}</Styled.label>
            <ImageUploader {...props} />
        </Styled.container>
    );
};

export default InputWithImage;