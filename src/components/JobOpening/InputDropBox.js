import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
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

const InputDropBox = ({label, companysize, setCompanysize}) => {
    return (
        <Styled.container>
            <Styled.label>{label}</Styled.label>
            <RNPickerSelect
                placeholder={{
                    label:'회사규모를 선택하세요',
                    value:' ',
                }}
                style={pickerSelectStyles}
                value={companysize}
                onValueChange={(value) => setCompanysize(value)}
                useNativeAndroidPickerStyle={false}
                items={[
                    { label: '1~10명', value: 'small' },
                    { label: '11~100명', value: 'medium' },
                    { label: '100~명', value: 'large' },
                ]}
            />
        </Styled.container>
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        borderWidth: 1, 
        borderRadius: 12,
        padding: 10
    },
});


export default InputDropBox;