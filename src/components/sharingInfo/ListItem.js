import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, ScrollView} from 'react-native';

const ListItem = () => {
    return(
        <Styled.Container>
        <Styled.ItemsLayout>
                <Styled.Item>
                    <Styled.Cover>
                        <Styled.ImageBox></Styled.ImageBox>
                    </Styled.Cover>
                    <Styled.Content>
                        <Styled.Description>‘헤센주’ 양식 맛집 정보 공유합니다!</Styled.Description>
                    </Styled.Content>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Cover>
                        <Styled.ImageBox></Styled.ImageBox>
                    </Styled.Cover>
                    <Styled.Content>
                        <Styled.Description>카프레제 맛집 정보 공유할게요!</Styled.Description>
                    </Styled.Content>
                </Styled.Item>
                <Styled.Item>
                    <Styled.Cover>
                        <Styled.ImageBox></Styled.ImageBox>
                    </Styled.Cover>
                    <Styled.Content>
                        <Styled.Description>샌드위치 맛집 정보 공유할게요!</Styled.Description>
                    </Styled.Content>
                </Styled.Item>

            <Styled.Item>
                <Styled.Cover>
                    <Styled.ImageBox></Styled.ImageBox>
                </Styled.Cover>
                <Styled.Content>
                    <Styled.Description>분위기도, 맛도 모두 좋았던 ‘브레멘’  샐러드 맛집 꼭 가보세요~</Styled.Description>
                </Styled.Content>
            </Styled.Item>
            <Styled.Item>
                <Styled.Cover>
                    <Styled.ImageBox></Styled.ImageBox>
                </Styled.Cover>
                <Styled.Content>
                    <Styled.Description>독일에 있으면 꼭 먹어야 하는 음식점 Best1</Styled.Description>
                </Styled.Content>
            </Styled.Item>
            <Styled.Item>
                <Styled.Cover>
                    <Styled.ImageBox></Styled.ImageBox>
                </Styled.Cover>
                <Styled.Content>
                    <Styled.Description>여기 진짜 JMT.. 꼭가보세요!</Styled.Description>
                </Styled.Content>
            </Styled.Item>
        </Styled.ItemsLayout>
        </Styled.Container>
    )
}

const Styled = {
    Container : styled.View``
, 
    Item : styled.View`
    background: white;
    border-radius: 18px;
    margin: 10px;
    margin-top: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    width : 150px;   
`,
    Cover : styled.View`
    width: 100%;
    height: 150px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    overflow: hidden;
`, 
    ImageBox : styled.View`
    width: 100%;
    height: 100%;
`,
    Content : styled.View`
    flex-direction: column;
    align-items: center;
    height: 60px;
`, 
    Description : styled.Text`
    color: black;
    font-size: 13px;
    font-weight: 550;
`, 
    ItemsLayout : styled.View`
    // flex-wrap : wrap;
    display : flex;
    align-content : flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justifyContent : center;
`, 
}

export default ListItem;