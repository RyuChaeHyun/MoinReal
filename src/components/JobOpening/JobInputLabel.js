import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
    flex-direction:row;
    width:100%;
    background-color:#ffffff;
    margin:10px 0;
    padding: 10px 20px;
`;

const Label = styled.Text`
    font-size:15px;
    color: #000000;
    margin-bottom: 7px;
    flex:1;
`;

const TextInput = styled.TextInput`
    width:100%;
    border:1px solid #A0A0A0;
    border-radius: 4px;
    line-height:2.5rem;
    font-size:15px;
    padding-left:0.5rem;
    padding-right:0.5rem;
    height:${p=>p.inputHeight}px;
    textAlignVertical: 'top';
    outline:'none';
    flex:1;
`;

const JobInputLabel = ({label, ...rest})=>(
    <Wrapper>
        <Label>{label}</Label>
        <TextInput {...rest}/>
    </Wrapper>
);

export default JobInputLabel;