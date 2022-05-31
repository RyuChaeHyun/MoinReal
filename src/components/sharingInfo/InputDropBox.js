import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Wrapper = styled.View`
    background-color:#ffffff;
    padding: 10px 20px;
    &+& {
        margin-top: 20px;
    }
`;

const Label = styled.Text`
    font-size:15px;
    color: #000000;
    margin-bottom: 7px;
`;

const InputDropBox = ( {label} ) => {
    const [ category, setCategory ] = useState("");
    return (
        <Wrapper>
            <Label>{label}</Label>
            <RNPickerSelect
                placeholder={{
                    label:'카테고리를 선택하세요',
                    value:' ',
                }}
                style={pickerSelectStyles}
                value={category}
                onValueChange={(value) => setCategory(value)}
                useNativeAndroidPickerStyle={false}
                items={[
                    { label: '맛집', value: 'restaurant' },
                    { label: '카페', value: 'cafe' },
                    { label: '생활꿀팁', value: 'life' },
                ]}
            />
        </Wrapper>
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