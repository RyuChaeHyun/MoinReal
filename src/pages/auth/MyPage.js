import FormScrollView from "../../components/common/FormScrollView/FormScrollView";
import Input from "./../../components/common/Input/Input";
import theme from "./../../theme";
import ProfileImage from "./../../components/auth/ProfileImage/ProfileImage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { getData } from "./../../firebase/database";

const MyPage = ({ navigation }) => {
  const auth = getAuth();
  let uid = 0;
  const [data, setData] = useState({
    name: '',
    email: '',
    village: '',
    phone: '',
    username: '',
    profileUrl: '',
  })

  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
      let ret = getData("users",uid);
      if(ret!==null) {
          setData(ret);
          console.log("!!!!!!!!!!!")
      }
    } else {
      // User is signed out (로그아웃되면 자동으로 signin가도록 설정)
      navigation.push("SharingInfoList");
    }
  });
  
  useEffect(()=>{
      console.log('mypage data ... ', data);
  }, [data])

  return (
    <FormScrollView
      buttonTitle={"수정하기"}
      buttonType={"Round"}
      onPress={() => navigation.push("MyPageEdit")}
    >
      <ProfileImage profileUrl={data.profileUrl} username={data.username} />
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
