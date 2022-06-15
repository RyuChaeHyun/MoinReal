import React from "react";
import styled from "styled-components/native";
import theme from "./../../theme";

const ListItem = ({ list, navigation }) => {
  return (
    <Styled.container>
      {list && list.map((item) => (
        <Styled.item
          key={item[0]}
          onPress={(e) => {
            e.preventDefault();
            navigation.push("SharingInfoDetail", {
                postId: item[0],
                category: item[1].category,
                detail: item[1].detail,
                image: item[1].image,
                title: item[1].title,
                writerId: item[1].writerId,
            });
          }}
        >
          <Styled.cover>
            <Styled.imageBox source={item[1].image}></Styled.imageBox>
          </Styled.cover>
          <Styled.content>
            <Styled.description>{item[1].title}</Styled.description>
          </Styled.content>
        </Styled.item>
      ))}
    </Styled.container>
  );
};

const Styled = {
  container: styled.View`
    display: flex;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
  `,
  item: styled.TouchableOpacity`
    background: white;
    border-radius: 18px;
    margin: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    width: 160px;
  `,
  cover: styled.View`
    width: 100%;
    height: 150px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
  `,
  imageBox: styled.Image`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.beige};
  `,
  content: styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 60px;
    padding: 8px;
  `,
  description: styled.Text`
    color: black;
    font-size: ${theme.fontSize.sm}px;
    font-weight: 550;
  `,
};

export default ListItem;
