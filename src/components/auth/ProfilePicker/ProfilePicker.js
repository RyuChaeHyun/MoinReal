import React, { useState, useEffect, useCallback } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import theme from "./../../../theme";
import Storage from "./../../../firebase/storage";

// 나중에 common으로 옮겨가는 일이 생기면 이 부분 파라미터로 받게 변경
const table = 'auth'; 
const ProfilePicker = ({ title, image, setImage, ...props }) => {
  // contain real image information
  const [isLoading, setLoading] = useState(false);
  const [progressStatus, setProgressStatus] = useState(0);

  // function - select image using imagepicker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // loading
    setLoading(true);

    /**
     * filename convension : images/${table}/${now}
     * ex. images/auth/19838428394
     * **/
    const now = new Date().getTime();
    const fileName = `${table}/${now}`;

    if (!result.cancelled) {
      Storage.putImage(result.uri, fileName, setImage, setProgressStatus)
        .then(() => {
          console.log("ImagePickerExample : it work");
          setProgressStatus(100);
          setLoading(false);
        })
        .catch((error) => {
          console.log("ImagePickerExample : ", error);
          setLoading(false);
        });
    }
  };

  return (
    <Styled.container>
      <Styled.imageText>{title}</Styled.imageText>
      <Styled.imageBox { ...props}>
      {image && progressStatus===100 ? (
          <Styled.imageTouchable onPress={pickImage}>
            <Styled.imageUrl source={{ uri: image }} />
          </Styled.imageTouchable>
      ) : (
          <Styled.imageTouchable onPress={pickImage}>
            <Text>{"사진 추가"}</Text>
            {progressStatus > 0 ? <Text>{progressStatus.toFixed(0)}%</Text> : null}
          </Styled.imageTouchable>
      )}
      </Styled.imageBox>
    </Styled.container>
  );
};

const Styled = {
  container: styled.View`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0;
  `,
  imageText: styled.Text`
    font-size: ${theme.fontSize.md}px;
    font-weight: bold;
    color: black;
  `,
  imageBox: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  `,
  imageTouchable: styled.TouchableOpacity`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    display: flex;
    flex-direction : column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.gray};
  `,
  imageUrl: styled.Image`
    object-fit: fill;
  `,
};

export default ProfilePicker;
