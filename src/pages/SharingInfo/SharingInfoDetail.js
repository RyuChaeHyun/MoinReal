import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import DetailProfile from "./../../components/sharingInfo/DetailProfile";
import theme from "./../../theme";
import { getData } from "./../../firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Alert } from 'react-native';

const SharingInfoDetail = ({ route, navigation }) => {
  const [data, setData] = useState({
    postId: "",
    category: "",
    detail: "",
    image: "",
    title: "",
    writerId: "",
  });
  useEffect(() => {
    const { postId, postData } = route.params;
    setData({ postId: postId, ...postData });
  }, []);

  // db로 부터 데이터를 가져오고(setData) 이를 사용함(data)
  const [userData, setUserData] = useState({
    uid: "",
    username: "",
    profileUrl: "",
  });

  // 유저 정보 가져옴
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let uid = user.uid;
        getData("users", uid, setUserData);
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

//   const userData = {
//     uid: "1234",
//     url: "프로필 사진 주소",
//     username: "테스트 이미지",
//   };
  return (
    <Styled.container>
      <Styled.detailInfoBox>
        <Styled.image source={data.image} />
        <Styled.title>{data.title}</Styled.title>
        <Styled.subTitle>{data.detail}</Styled.subTitle>
        <Styled.category>{data.category}</Styled.category>
      </Styled.detailInfoBox>
      <DetailProfile
        source={userData.profileUrl}
        username={userData.username}
        sameUser={userData.uid == data.writerId}
      />
    </Styled.container>
  );
};

const Styled = {
  container: styled(KeyboardAwareScrollView)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${theme.colors.white};
    height: 100%;
    width: 100%;
  `,
  detailInfoBox: styled.View`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 0 10px 0;
    padding: 10px;
  `,
  image: styled.Image`
    background-color: ${theme.colors.beige};
    width: 100%;
    height: 200px;
    border-radius: 3px;
    padding-bottom: 10px;
  `,
  title: styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin-top: 17px;
    margin-bottom: 10px;
  `,
  subTitle: styled.Text`
    font-size: 13px;
    color: #000000;
    margin-top: 7px;
    margin-bottom: 9px;
  `,
  category: styled.Text`
    font-size: 15px;
    color: #000000;
    align-self: flex-end;
  `,
};

export default SharingInfoDetail;
