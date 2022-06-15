import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";
import Input from "../../components/common/Input/Input";
import TitleText from "../../components/common/TitleText/TitleText";
import theme from "../../theme";
import FormScrollView from "../../components/common/FormScrollView/FormScrollView";
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
    console.log("submitting");
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

        console.log('signup user : ',user);

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
        switch (errorCode) {
          case 'auth/email-already-exists':
            alert('이미 사용중인 계정입니다.') // for web
            Alert.alert("이미 사용중인 계정입니다."); // for android & iphone
            break;
          case 'auth/internal-error':
            alert('인증 서버에서 요청을 처리하던 중에 예기치 않은 오류가 발생했습니다.') // for web
            Alert.alert("인증 서버에서 요청을 처리하던 중에 예기치 않은 오류가 발생했습니다."); // for android & iphone
            break;
          case 'auth/invalid-email':
            alert('이메일 형식이 올바르지 않습니다.') // for web
            Alert.alert("이메일 형식이 올바르지 않습니다."); // for android & iphone
            break;
          case 'auth/invalid-password':
            alert('비밀번호 형식이 올바르지 않습니다.') // for web
            Alert.alert("비밀번호 형식이 올바르지 않습니다."); // for android & iphone
            break;
          case 'auth/user-not-found':
            alert('해당 사용자가 존재하지 않습니다. 이메일을 다시 확인해주세요.') // for web
            Alert.alert('해당 사용자가 존재하지 않습니다. 이메일을 다시 확인해주세요.'); // for android & iphone
            break;
          default:
            alert(`에러가 발생하였습니다(${errorCode}):  ${errorMessage}`) // for web
            Alert.alert(`에러가 발생하였습니다(${errorCode}):  ${errorMessage}`); // for android & iphone
            console.log(`에러가 발생하였습니다(${errorCode}):  ${errorMessage}`);
            break;
        }
      });
  };

  const checkValidPassword = () => {
    if(password.length < 6) {
      alert('비밀번호의 길이를 6글자 이상으로 입력해주세요') // for web
      Alert.alert("비밀번호의 길이를 6글자 이상으로 입력해주세요"); // for android & iphone
      return false;
    }
    if (password !== confirmPassword) {
      alert('두 비밀번호가 일치하지 않습니다.') // for web
      Alert.alert("두 비밀번호가 일치하지 않습니다?"); // for android & iphone
      return false;
    }
  };

  const checkValidProfileInfo = () => {
    // 나중에 조건 추가
    if(username.length > 10) {
      alert('닉네임은 10글자 이하로 설정해주세요.') // for web
      Alert.alert("닉네임은 10글자 이하로 설정해주세요."); // for android & iphone
      return false;
    } 
    if(username.length > 10) {
      alert('닉네임은 10글자 이하로 설정해주세요.') // for web
      Alert.alert("닉네임은 10글자 이하로 설정해주세요."); // for android & iphone
      return false;
    }
    if(!isNaN(phone)){
      alert('전화번호는 숫자만 입력해주세요.') // for web
      Alert.alert("전화번호는 숫자만 입력해주세요."); // for android & iphone
      return false;
    }
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
          title={"연락처(ex. 61717896916"}
          placeholder={"지역번호를 포함하여 숫자만 입력해주세요."}
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
