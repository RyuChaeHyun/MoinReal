import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import config from '../../../setting/firebase.json';
import { TextInput } from "react-native-gesture-handler";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { colors } from './../../theme';
import styled from 'styled-components/native';

const Signin = ({navigation}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useState(null);
    initializeApp(config);
    

    const onLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            console.log(user);
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
        console.log(`Credentials ${email} [${password}]`);
    }

    return (
        <Styled.container>
            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={'Email'}
            />
            <TextInput
                value={password}
                onChangeText={(password) => setPassword(password)}
                placeholder={'Password'}
                secureTextEntry={true}
            />
            <Button
                title={'Login'}
                onPress={onLogin()}
            />
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('SharingInfo', {
                        userId: user,
                    })
                }
            />
        </Styled.container>
    );
};

const Styled = {
    container: styled.View`
        background-color: ${colors.beige};
    `,
}



export default Signin;