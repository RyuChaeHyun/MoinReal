import React, { useState, useEffect, useCallback } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components/native';
import theme from './../../../theme';
import Storage from './../../../firebase/storage';
import DotLoader from "react-spinners/DotLoader";

// imageurl = img reference
export default function ImagePickerExample({table, imageUrl, setImageUrl}) {
  // contain real image information
  const [image,setImage] = useState(null);
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
    setLoading(true)
    /** 
     * filename convension : images/${table}/${now}
     * ex. images/sharingInfo/19838428394 
     * **/
    const now = new Date().getTime();
    const fileName = `${table}/${now}`;

    if (!result.cancelled) {
      Storage.putImage(result.uri, fileName, setImage, setProgressStatus)
      .then(()=>{
          console.log('ImagePickerExample : it work');
          setProgressStatus(100);
          setLoading(false);
        })
        .catch(error=>{
          console.log("ImagePickerExample : " ,error)
          setLoading(false);
        })
    }
  };  

  return (
    <>
      {image ?(
        <Styled.imageBox onPress={pickImage} >
          <Styled.image source={{ uri: image }} />
        </Styled.imageBox>
      ) : (
        <Styled.imageBox onPress={pickImage} >
          <Text>{'사진 추가'}</Text>
          {progressStatus>0 ?
          (
            <><Text>{progressStatus}%</Text><DotLoader name={'DotLoader'} color={theme.colors.primary} loading={isLoading} size={30} /></>
            ):null
          }
        </Styled.imageBox>
      )}
    </>
  );
}

const Styled ={
  container : styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  imageBox : styled.TouchableOpacity`
    background-color: ${theme.colors.beige};
    border: 1px solid ${theme.colors.darkgray};
    width: 100%;
    height:160px;
    border-radius:3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  `,
  image: styled.Image`
    width: 100%;
    height: 100%
    object-fit: fill;
  `,
}