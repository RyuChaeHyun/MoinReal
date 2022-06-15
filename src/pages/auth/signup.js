import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Alert, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Input from "../../components/common/Input/Input";
import TitleText from "../../components/common/TitleText/TitleText";
import theme from "../../theme";
import FormScrollView from "../../components/common/FormScrollView/FormScrollView";
import ProfilePicker from "../../components/auth/ProfilePicker/ProfilePicker";
import { updateData } from './../../firebase/database';

const Signup = ({navigation}) => {
  // Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [village, setVillage] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // onSubmit
  const onSubmitting = () => {
    const auth = getAuth();
    if (!checkValidPassword()) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // save user data
        if(! checkValidProfileInfo()) return;
        const userData = {
          uid: user.uid,
          email,
          password,
          name,
          username,
          village,
          phone,
          imageUrl,
        };

        // user.uid로 column명이 생겨요
        updateData('users/',user.uid,userData);

        // 다음 화면 제시
        navigation.push('SharingInfoList');

        // 가입 축하 안내
        alert(`모인에 오신걸 환영합니다. ${name}님`) // for web
        Alert.alert(`모인에 오신걸 환영합니다. ${name}님`); // for android & iphone
   
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("비밀번호가 일치하지 않습니다. ");
        console.log(errorMessage);
      });
  };

  const checkValidPassword = () => {
    if (password === confirmPassword) return true;
    else {
      alert('두 비밀번호가 일치하지 않습니다.') // for web
      Alert.alert("두 비밀번호가 일치하지 않습니다?"); // for android & iphone
      return false;
    }
  };

  const checkValidProfileInfo = () => {
    // 나중에 조건 추가
    return true;
  }

  return (
    <FormScrollView
      buttonTitle={"시작하기"}
      buttonType={"Round"}
      onPress={onSubmitting}
    >
      <Styled.innerContainer>
        <TitleText title={"가입정보"} />
        <Input
          title={"이메일"}
          placeholder={"이메일을 입력해주세요"}
          onChangeSetText={setEmail}
        />
        <Input
          title={"비밀번호"}
          placeholder={"비밀번호를 입력해주세요"}
          onChangeSetText={setPassword}
          secureTextEntry={true}
        />
        <Input
          title={"비밀번호 확인"}
          placeholder={"비밀번호를 입력해주세요"}
          onChangeSetText={setConfirmPassword}
          secureTextEntry={true}
        />
      </Styled.innerContainer>
      <Styled.innerContainer>
        <TitleText title={"필수정보"} />
        <Input
          title={"이름"}
          placeholder={"본명을 입력해주세요"}
          onChangeSetText={setName}
        />
        <Input
          title={"닉네임"}
          placeholder={"사용할 닉네임을 입력해주세요"}
          onChangeSetText={setUsername}
        />
        <Input
          title={"동네인증"}
          placeholder={"현재 거주지를 입력해주세요"}
          onChangeSetText={setVillage}
        />
        <Input
          title={"연락처"}
          placeholder={"ex. 010-1234-1234"}
          onChangeSetText={setPhone}
          keyboardType="numeric"
        />
      </Styled.innerContainer>
    </FormScrollView>
  );
};

const Styled = {
  innerContainer: styled.View`
    padding-bottom: ${theme.fontSize.xl}px;
  `,
};

export default Signup;
