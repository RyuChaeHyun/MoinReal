import FormScrollView from "../../components/common/FormScrollView/FormScrollView";
import Input from "./../../components/common/Input/Input";
import theme from "./../../theme";
import ProfileImage from "./../../components/auth/ProfileImage/ProfileImage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useCallback } from "react";
import { getData } from "./../../firebase/database";

const MyPage = ({ navigation }) => {
  // get Data에 필요한 것들
  // data 가져오게되면 강제 re-rendering해서 화면 다시 그림
  const [, updateState] = useState();
  const forceUpdate = useCallback(()=> updateState({}),[]);
  useEffect(()=>{
      forceUpdate();
  }, [data])
  // db로 부터 데이터를 가져오고(setData) 이를 사용함(data)
  const [data, setData] = useState({
    name: '',
    email: '',
    village: '',
    phone: '',
    username: '',
    profileUrl: '',
  })

  // 유저 정보 가져옴
  const auth = getAuth();
  let uid = 0;
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid;
        getData("users",uid, setData);
        if(data===null) {
          alert("불러올 데이터가 없습니다.");
          Alert.alert("불러올 데이터가 없습니다.");
        }
      } else {
        // User is signed out (로그아웃되면 자동으로 signin가도록 설정)
        navigation.push("Signin");
      }
    });
  }, [])



  return (
    <FormScrollView
      buttonTitle={"수정하기"}
      buttonType={"Round"}
      onPress={() => navigation.push("MyPageEdit")}
    >
      <ProfileImage source={data.profileUrl} username={data.username} />
      <Input
        title={"이름"}
        value={data.name}
        editable={false}
        selectTextOnFocus={false}
        style={{ backgroundColor: theme.colors.gray }}
      />
      <Input
        title={"이메일"}
        value={data.email}
        editable={false}
        selectTextOnFocus={false}
        style={{ backgroundColor: theme.colors.gray }}
      />
      <Input
        title={"동네"}
        value={data.village}
        editable={false}
        selectTextOnFocus={false}
        style={{ backgroundColor: theme.colors.gray }}
      />
      <Input
        title={"전화번호"}
        value={data.phone}
        editable={false}
        selectTextOnFocus={false}
        style={{ backgroundColor: theme.colors.gray }}
      />
    </FormScrollView>
  );
};

export default MyPage;
