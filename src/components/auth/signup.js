import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Signup = () => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return (
    <View>
   <View> 
        <Text> Registration </Text> 
    </View>
    <TextInput
      underlineColorAndroid = "transparent"
      placeholder = "Enter Your Name"
      placeholderTextColor = "#9a73ef"
      onChangeText = {text => setUsername(text)}/>

    <TextInput 
      underlineColorAndroid = "transparent"
      placeholder = "Enter Your Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {text=>setEmail(text)}/>

    <TextInput 
      underlineColorAndroid = "transparent"
      placeholder = "Enter Your Password"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      secureTextEntry = "true"
      onChangeText = {text => setPassword(text)}/>

    <TouchableOpacity>
      <Text> Create Account </Text>
    </TouchableOpacity>

    </View>
  );
}

export default Signup;
