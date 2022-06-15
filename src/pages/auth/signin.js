import { useEffect, useState } from "react";
import config from '../../../setting/firebase.json';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import theme from '../../theme';
import styled from 'styled-components/native';
import Input from "../../components/common/Input/Input.js";
import Button from '../../components/common/Button/Button';
import { Alert } from 'react-native';
// import { ImageBackground } from "react-native";
// import backimage from '../../../assets/Background.png';

const Signin = ({navigation}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useState(null);
    initializeApp(config);
    
    const onSubmitting =(e) => {
        e.preventDefault();
        if(user) return;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            console.log(user);
            navigation.push('Tab', {
                userId: user,
            })
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
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

    }

    return (
        // <ImageBackground style={{width:"100%", height:"100%"}} source=require({backimage}) resizeModel="cover">
        <Styled.container>
            <Styled.innerContainer>
                <Styled.text>
                    여기 MOIN 여러분을 위한 정보
                </Styled.text>
                <Styled.text>
                    다양한 정보가 MOIN 곳
                </Styled.text>
                <Styled.logoText>
                    MOIN
                </Styled.logoText>
            </Styled.innerContainer>
            <Styled.innerContainer>
                <Input title={'email'} placeholder={'이메일을 입력해주세요'} onChangeSetText={setEmail} />
                <Input title={'Password'} placeholder={'비밀번호를 입력해주세요'} onChangeSetText={setPassword} secureTextEntry={true}/>
                <Button
                    shape={'Round'}
                    title={'Login'}
                    onPress={(e)=> onSubmitting(e)}
                    />
                <Button
                    shape={'Round'}
                    title={'Signup'}
                    onPress={()=> {
                        console.log('signup');
                        navigation.push('Signup');
                    }}
                />
            </Styled.innerContainer>
        </Styled.container>
        // </ImageBackground>
    );
};

const Styled = {
    container: styled.View`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 30px;
        background: ${theme.colors.beige};
    `,
    innerContainer: styled.View`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        flex-grow: 1;
    `,
    text: styled.Text`
        font-size: ${theme.fontSize.xxl}px;
    `,
    logoText: styled.Text`
        font-size: ${theme.fontSize.xxxl}px;
        font-weight: bold;
    `,
}



export default Signin;