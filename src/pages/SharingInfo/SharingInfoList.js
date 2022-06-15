import styled from 'styled-components/native';
import React from'react';
import theme from '../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListItem from '../../components/sharingInfo/ListItem';
import Button from './../../components/common/Button/Button';

const listItems = [
    {name : '맛집', link: 'SharingInfoRestaurant'},
    {name : '카페', link: 'SharingInfoCafe'},
    {name : '생활꿀팁', link: 'SharingInfoTip'},
];

const SharingInfoList = ({navigation} ) => {
    return (
        <Styled.container>
            <Button shape={'Text'} title={"글쓰기"} onPress = {()=> navigation.push('SharingInfoCreate')}/>
            <KeyboardAwareScrollView extraScrollHeight={10} >
                {listItems.map(item=>(
                    <Styled.listBox key={item.name}>
                        <Styled.listTitle onPress = {()=> navigation.push(item.link)}>
                            <Styled.listTitleText>{item.name}</Styled.listTitleText>
                        </Styled.listTitle>
                        <Styled.listCategoryView horizontal={true} showsVerticalScrollIndicator={false}>
                            <ListItem />
                        </Styled.listCategoryView>
                    </Styled.listBox>
                ))}
            </KeyboardAwareScrollView>
        </Styled.container>
    )
}

const Styled = {
    container : styled.View`
        background-color : ${theme.colors.white};
    `,
    listBox: styled.View`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,
    listTitle : styled.TouchableOpacity`
        padding-left: 15px;
    `,
    listTitleText : styled.Text`
        font-size : 30px;
        font-weight: 600;
        color: black;
    `,
    listCategoryView : styled.ScrollView`
        height : 230px;
    `,
    
}

export default SharingInfoList;

//theme처리도 해야하고. 
//다른데 스크롤바 바꿔야됨. !!! 나는 input 안쓰니까. 
//컴퍼넌트로 빼내기 
//button눌렀을 때 해당 카테고리 색까 ㄹ바구끽
//인덴테이션 정리 .
