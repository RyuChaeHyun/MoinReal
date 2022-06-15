import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React from "react";
import theme from '../../theme';
import {nanoid} from 'nanoid';
import styled from "styled-components/native";

const dataList = [
    {id : '1', title:'KAKAO 독일 베를린 지사 (test: 남이쓴 글)', detail:'독일 베를린 지사 KAKAO DATA 분야 전문가를 모집합니다.', income : '5000만원'},
    {id : '2', title:'NAVER 독일 뮌헨 지사', detail:'detail2....', income : '200만원'},
    {id : '3', title:'구인3', detail:'detail3....', income : '4000만원'},
    {id : '4', title:'구인4', detail:'detail4....', income : '3000만원'},
    {id : '5', title:'구인5', detail:'detail5....', income : '3000만원'},
    {id : '6', title:'구인6', detail:'detail6....', income : '3000만원'},
];

  
  const Item = ({ title, detail, income}) => (
    <Styled.item>
      <Styled.title>{title}</Styled.title>
      <Styled.detail>{detail}</Styled.detail>
      <Styled.income>{income}</Styled.income>
    </Styled.item>
  );
  
  const OpeningList = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} detail = {item.detail} income = {item.income}/>
    );
  
    return (
      <Styled.container>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Styled.container>
    );
  }
  
  const Styled = {
    container : styled(SafeAreaView)`
        display: flex ;
        margin-top : 20px;
    `,
    item : styled.View`
        background-color : ${theme.colors.white};
        padding : 20px;
        margin-top : 6px;
        margin-left : 10px;
    `,
    title : styled.Text`
        font-size : 20px;
        font-weight: 550;
    `, 
    detail : styled.Text`
        font-size : 15px;
    `,
    income : styled.Text`
        font-size : 9px;
    `,
  };
  
  export default OpeningList;



