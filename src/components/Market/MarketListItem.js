import React from "react";
import {nanoid} from 'nanoid';
import styled from "styled-components/native";
import { View, Text, Image, ScrollView } from "react-native";

const dataList = [
    {url:'사진주소1', detail:'detail1....'},
    {url:'사진주소2', detail:'detail2....'},
    {url:'사진주소3', detail:'detail3....'},
    {url:'사진주소4', detail:'detail4....'},
    {url:'사진주소5', detail:'detail5....'},
    {url:'사진주소6', detail:'detail6....'},
]
// const data = {
//     id : nanoid(),
//     image : "사진주소", 
//     detail : "사세요..", 
// }

const MarketListItem = () => {
  return (
    <Styled.container>
      <Styled.itemsLayout>
          {dataList.map(item=> (
            <Styled.item key={nanoid()}>
              <Styled.cover>
                <Styled.imageBox><Styled.description>{item.url}</Styled.description></Styled.imageBox>
              </Styled.cover>
              <Styled.content>
                <Styled.description>
                  {item.detail}
                </Styled.description>
              </Styled.content>
            </Styled.item>
          ))}     
      </Styled.itemsLayout>
    </Styled.container>
  );
};

const Styled = {
  container: styled.View`

  `,
  item: styled.View`
    background: white;
    border-radius: 18px;
    margin: 10px;
    margin-top: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    width : 160px;   
`,
  cover : styled.View`
    width: 100%;
    height: 150px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
  `,
  imageBox: styled.View`
    width: 100%;
    height: 100%;
  `,
  content: styled.View`
    flex-direction: column;
    align-items: center;
    height: 60px;
  `,
  description: styled.Text`
    color: black;
    font-size: 13px;
    font-weight: 550;
  `,
  itemsLayout: styled.View`
    display: flex;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
  
  `,
};

export default MarketListItem;
