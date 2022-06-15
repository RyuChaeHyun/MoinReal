import * as React from "react";
import * as firebase from "firebase/app";
import config from "../setting/firebase.json";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SharingInfoList from "./pages/SharingInfo/SharingInfoList";
import JobFindingList from "./pages/JobFinding/JobFindingList";
import JobOpeningList from "./pages/JobOpening/JobOpeningList";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import MarketList from "./pages/Market/MarketList";
import theme from "./theme";
import styled from 'styled-components/native';
import MyPage from "./pages/auth/MyPage";
import MyPageEdit from "./pages/auth/MyPageEdit";
import SharingInfoListDetail from "./pages/SharingInfo/SharingInfoListDetail";
import SharingInfoCreate from "./pages/SharingInfo/SharingInfoCreate";
import HeaderTab from "./components/common/Tab/HeadeTab";
import JobOpeningDetail_User from "./pages/JobOpening/JobOpeningDetail_User";
import JobOpeningPostCreate from "./pages/JobOpening/JobOpeningPostCreate";
import JobOpeningDetail_nonUser from "./pages/JobOpening/JobOpening_nonUser";
import { useEffect, useState } from "react";
import SharingInfoDetail from "./pages/SharingInfo/SharingInfoDetail";
import JobFindingCreate from "./pages/JobFinding/JobFindingCreate";
import JobFindingDetail_User from "./pages/JobFinding/JobFindingDetail_User";
import JobFindingDetail_nonUser from "./pages/JobFinding/JobFindingDetail_nonUser";
import Button from './components/common/Button/Button';

// none = 헤더없음 / basic = 뒤로가기버튼 + 페이지명 / home= 로고 + 채팅 + 프로필
// name은 절대 중복되면 안됨.
// none은 name과 component만 들어가고, basic은 name, component, title이 들어가고, home은 name, component만 들어감.
const pageHeaderList = [
  { type: "none", name: "Signin", component: Signin },
  { type: "home", name: "Tab", component: HeaderTab },
  { type: "basic", name: "Signup", component: Signup, title: "회원 가입" },
  { type: "basic", name: "MyPage", component: MyPage, title: "마이페이지" },
  {
    type: "basic",
    name: "MyPageEdit",
    component: MyPageEdit,
    title: "마이페이지 수정",
  },
  { type: "home", name: "SharingInfoList", component: SharingInfoList },
  {
    type: "basic",
    name: "SharingInfoCreate",
    component: SharingInfoCreate,
    title: "글쓰기",
  },
  {
    type: "basic",
    name: "SharingInfoDetail",
    component: SharingInfoDetail,
    title: "DETAIL",
  },
  {
    type: "basic",
    name: "SharingInfoListDetail",
    component: SharingInfoListDetail,
    title: "맛집",
  },
  { type: "basic", name: "MarketList", component: MarketList },
  { type: "home", name: "JobFindingList", component: JobFindingList },
  {
    type: "basic",
    name: "JobFindingCreate",
    component: JobFindingCreate,
    title: "구직 글쓰기",
  },
  { type: "home", name: "JobOpeningList", component: JobOpeningList },
  { type: "basic", name: "JobOpeningDetail", component: JobOpeningDetail_User },
  {
    type: "basic",
    name: "JobOpeningDetail_nonUser",
    component: JobOpeningDetail_nonUser,
  },
  {
    type: "basic",
    name: "JobFindingDetail_User",
    component: JobFindingDetail_User,
  },
  {
    type: "basic",
    name: "JobFindingDetail_nonUser",
    component: JobFindingDetail_nonUser,
  },
  // {type: 'basic', name:'JobOpeningPostCreate', component:JobOpeningPostCreate, title:'구인 글쓰기'},
  {
    type: "basic",
    name: "JobOpeningPostCreate",
    component: JobOpeningPostCreate,
    title: "구인 글쓰기",
  },
];

export default function App() {
  // basic setting
  firebase.initializeApp(config);
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  const toMyPage = (e) => {
    e.preventDefault();
    navigationRef.navigate("MyPage");
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{
          title: "Moin",
          headerTintColor: theme.colors.dark,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: theme.fontSize.lg,
          },
        }}
      >
        {pageHeaderList.map(({ ...el }) => {
          if (el.type === "none") {
            return (
              <Stack.Screen
                key={el.name}
                name={el.name}
                component={el.component}
                options={{
                  headerShown: false,
                }}
              />
            );
          } else if (el.type === "home") {
            return (
              <Stack.Screen
                key={el.name}
                name={el.name}
                component={el.component}
                options={{
                  title: "",
                  headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: theme.fontSize.lg,
                  },
                  headerLeft: () => {
                    return (
                      <Styled.leftContainer>
                        <Styled.logoText>MOIN</Styled.logoText>
                      </Styled.leftContainer>
                    );
                  },
                  headerRight: () => {
                    return (
                      <Styled.rightContainer>
                        <Button
                          shape={"Round"}
                          title={"채팅"}
                          onPress={() => console.log("move to chat")}
                        />
                        <Button
                          shape={"Round"}
                          title={"내정보"}
                          onPress={(e) => toMyPage(e)}
                        />
                      </Styled.rightContainer>
                    );
                  },
                }}
              />
            );
          } else {
            return (
              <Stack.Screen
                key={el.name}
                name={el.name}
                component={el.component}
                options={{ title: el.title, headerTitleAlign: "center" }}
              />
            );
          }
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styled = {
  logoText: styled.Text`
    font-weight: bold;
    font-size: ${theme.fontSize.xxl}px;
  `,
  leftContainer: styled.View`
    padding-left: 24px;
  `,
  rightContainer: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
    padding-right: 12px;
  `,
};
