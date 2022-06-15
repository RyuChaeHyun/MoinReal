import { View } from "react-native";
import { Text } from "react-native";
import FormScrollView from "../../components/common/FormScrollView/FormScrollView";
import Input from "../../components/common/Input/Input";
import theme from "../../theme";
import styled from "styled-components/native";
import { useState, useCallback, useEffect } from "react";
import ProfilePicker from "../../components/auth/ProfilePicker/ProfilePicker";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getData as getDataFromDB, updateData } from "../../firebase/database";

const MyPageEdit = ({ navigation }) => {
  // get Data에 필요한 것들
  // data 가져오게되면 강제 re-rendering해서 화면 다시 그림
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, [data]);
  // db로 부터 데이터를 가져오고(setData) 이를 사용함(data)
  const [data, setData] = useState({
    uid: "",
    email: "",
    password: "",
    name: "",
    username: "",
    village: "",
    phone: "",
    imageUrl: "",
  });

  // 유저 정보 가져옴
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let uid = user.uid;
        getDataFromDB("users", uid, setData);
        if (data === null) {
          alert("불러올 데이터가 없습니다.");
          Alert.alert("불러올 데이터가 없습니다.");
        }
      } else {
        // User is signed out (로그아웃되면 자동으로 signin가도록 설정)
        navigation.push("Signin");
      }
    });
  }, []);

  const [image, setImage] = useState(data.profileUrl);
  useEffect(() => {
    console.log("setImage : ", image);
    setData({ ...data, profileUrl: image });
  }, [image]);

  const setUsername = (text) => {
    setData({ ...data, username: text });
  };

  const setVillage = (text) => {
    setData({ ...data, village: text });
  };

  const onSubmitting = (e) => {
    console.log("submitting: ", data.uid,"    /  ", data);
    updateData('users/',data.uid,data);
    navigation.push("MyPage");
  };

  return (
    <FormScrollView
      buttonTitle={"수정하기"}
      buttonType={"Round"}
      onPress={() => onSubmitting()}
    >
      <ProfilePicker image={data.profileUrl} setImage={setImage} />
      <Input
        title={"닉네임"}
        defaultValue={data.username}
        onChangeSetText={(text) => setUsername(text)}
      />
      <Input
        title={"동네"}
        defaultValue={data.village}
        onChangeSetText={(text) => setVillage(text)}
      />
    </FormScrollView>
  );
};

const Styled = {
  imageUrlBox: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  `,
  imageUrl: styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
  `,
};

export default MyPageEdit;
