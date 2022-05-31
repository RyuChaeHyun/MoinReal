import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    background-color: #F9EB6C;
    align-items:center;
    justify-content:center;
    border-radius: 4px;
    width: 80px;
    height:38px;
    padding:10px 10px;
    margin-left:20px;
    align-self:center;
    margin-bottom: 15px;
`;

const Title = styled.Text`
    height: 30px;
    font-weight:600;
    font-size:13px;
    color: #000000;
 `;

const Button = ({title, onPress}) =>{
    return(
        <Container onpress={onPress} >
            <Title>{title}</Title>
        </Container>
    );
};

Button.propTypes ={
    title:PropTypes.string,
};

export default Button;