import { useEffect, useState } from "react";
import config from '../../../setting/firebase.json';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import theme from '../../theme';
import styled from 'styled-components/native';
import Input from "../../components/common/Input/Input.js";
import Button from '../../components/common/Button/Button';

const Signin = ({navigation}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useState(null);
    const [submitPressed, setSubmitPressed] = useState(false);
    initializeApp(config);
    
    useEffect(()=>{
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
            console.log(errorCode);
            console.log(errorMessage);
        });
        console.log(`Credentials ${email} [${password}]`);
        setSubmitPressed(false);
    },[submitPressed])

    return (
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
                    onPress={()=> setSubmitPressed(true)}
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