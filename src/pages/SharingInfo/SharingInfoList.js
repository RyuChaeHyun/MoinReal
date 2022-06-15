import styled from "styled-components/native";
import React, { useCallback, useMemo, useState } from "react";
import theme from "../../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ListItem from "../../components/sharingInfo/ListItem";
import Button from "./../../components/common/Button/Button";
import { getData } from "../../firebase/database";
import { useEffect } from "react";

const SharingInfoList = ({ navigation }) => {
  // 기본으로 불러와야하는 내용들
  const [lists, setLists] = useState({
    cafe: [],
    life: [],
    restaurant: [],
  });

  useEffect(() => {
    getData("sharingInfo", "", setLists);
  }, []);

  return (
    <Styled.container>
      <Button
        shape={"Text"}
        title={"글쓰기"}
        onPress={() => navigation.push("SharingInfoCreate")}
        style={{ alignSelf: "flex-end" }}
      />
      <KeyboardAwareScrollView extraScrollHeight={10}>
        <Styled.listBox>
          <Styled.listTitle
            onPress={(e) => {
              e.preventDefault();
              navigation.push("SharingInfoListDetail", {
                pageTitle: "맛집",
                pageSubTitle: "맛집을 자유롭게 공유해봐요~",
                list: Object.entries(lists.restaurant),
              });
            }}
          >
            <Styled.listTitleText>{"맛집 >"}</Styled.listTitleText>
          </Styled.listTitle>
          <Styled.listCategoryView
            horizontal={true}
            showsVerticalScrollIndicator={false}
          >
            <ListItem
              list={Object.entries(lists.restaurant)}
              navigation={navigation}
            />
          </Styled.listCategoryView>
        </Styled.listBox>

        <Styled.listBox>
          <Styled.listTitle
            onPress={(e) => {
              e.preventDefault();
              navigation.push("SharingInfoListDetail", {
                pageTitle: "카페",
                pageSubTitle: "카페 정보 자유롭게 공유해봐요~",
                list: Object.entries(lists.cafe),
              });
            }}
          >
            <Styled.listTitleText>{"카페 >"}</Styled.listTitleText>
          </Styled.listTitle>
          <Styled.listCategoryView
            horizontal={true}
            showsVerticalScrollIndicator={false}
          >
            <ListItem
              list={Object.entries(lists.cafe)}
              navigation={navigation}
            />
          </Styled.listCategoryView>
        </Styled.listBox>

        <Styled.listBox>
          <Styled.listTitle
            onPress={(e) => {
              e.preventDefault();
              navigation.push("SharingInfoListDetail", {
                pageTitle: "생활꿀팁 >",
                pageSubTitle: "꿀팁! 공유해봐요~",
                list: Object.entries(lists.life),
              });
            }}
          >
            <Styled.listTitleText>{"생활꿀팁 >"}</Styled.listTitleText>
          </Styled.listTitle>
          <Styled.listCategoryView
            horizontal={true}
            showsVerticalScrollIndicator={false}
          >
            <ListItem
              list={Object.entries(lists.life)}
              navigation={navigation}
            />
          </Styled.listCategoryView>
        </Styled.listBox>
      </KeyboardAwareScrollView>
    </Styled.container>
  );
};

const Styled = {
  container: styled.View`
    flex: 1;
    background-color: ${theme.colors.white};
  `,
  listBox: styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  listTitle: styled.TouchableOpacity`
    padding-left: 15px;
    width: flt-content;
  `,
  listTitleText: styled.Text`
    font-size: 30px;
    font-weight: 600;
    color: black;
  `,
  listCategoryView: styled.ScrollView`
    height: 230px;
  `,
};

export default SharingInfoList;

//theme처리도 해야하고.
//다른데 스크롤바 바꿔야됨. !!! 나는 input 안쓰니까.
//컴퍼넌트로 빼내기
//button눌렀을 때 해당 카테고리 색까 ㄹ바구끽
//인덴테이션 정리 .
