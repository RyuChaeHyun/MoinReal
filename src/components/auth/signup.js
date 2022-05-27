import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Alert, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styled from 'styled-components/native';
import Input from "../common/Input/Input";
import TitleText from "../common/TitleText/TitleText";
import theme from './../../theme';
import Button from './../common/Button/Button';
import FormScrollView from './../common/FormScrollView/FormScrollView';

const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ name, setName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ village, setVillage ] = useState('');
  const [ phone, setPhone ] = useState('');
  
  const registration = () =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage);
      console.log(errorMessage);
    });
  }

  return (
    <FormScrollView buttonTitle={'시작하기'} buttonType={'Round'} onPress={registration}>
      <Styled.innerContainer>
        <TitleText title={'가입정보'} />
        <Input 
          title={'이메일'} 
          placeholder={'이메일을 입력해주세요'} 
          onChangeSetText={setEmail} 
        />
        <Input 
          title={'비밀번호'} 
          placeholder={'비밀번호를 입력해주세요'} 
          onChangeSetText={setPassword} 
          secureTextEntry = {true}
        />
        <Input 
          title={'비밀번호 확인'} 
          placeholder={'비밀번호를 입력해주세요'} 
          onChangeSetText={setConfirmPassword} 
          secureTextEntry = {true}
        />
      </Styled.innerContainer>
      <Styled.innerContainer>
        <TitleText title={'필수정보'}/>
        <Input 
          title={'이름'} 
          placeholder={'본명을 입력해주세요'} 
          onChangeSetText={setName} 
        />
        <Input 
          title={'닉네임'} 
          placeholder={'사용할 닉네임을 입력해주세요'} 
          onChangeSetText={setUsername} 
        />
        <Input 
          title={'동네인증'} 
          placeholder={'현재 거주지를 입력해주세요'} 
          onChangeSetText={setVillage} 
        />
        <Input 
          title={'연락처'} 
          placeholder={'전화번호를 입력해주세요'} 
          onChangeSetText={setPhone} 
          keyboardType='numeric'
        />
      </Styled.innerContainer>
    </FormScrollView>
  );
}

const Styled = {
  container: styled.SafeAreaView`

  `,
  innerContainer: styled.View`
    padding-bottom: ${theme.fontSize.xl}px;
  `,
}

export default Signup;
