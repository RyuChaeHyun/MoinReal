import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import theme from "../../theme";
import * as ImagePicker from "expo-image-picker";
import storage from "../../firebase/storage";

export const CommonImagePicker = ({ table, image, setImage, ...props }) => {
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
     * ex. images/sharingInfo/19838428394
     * **/
    const now = new Date().getTime();
    const fileName = `${table}/${now}`;

    if (!result.cancelled) {
      storage
        .putImage(result.uri, fileName, setImage, setProgressStatus)
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
      <Styled.imageBox {...props}>
        <Styled.imageTouchable onPress={pickImage}>
          <Styled.imageUrl source={image} />
          {progressStatus > 0 && progressStatus < 100 && (
            <Styled.addImgMsgBox>
              <Styled.addImgMsg>{"사진 추가"}</Styled.addImgMsg>
              {progressStatus > 0 ? (
                <Styled.addImgMsg>
                  {progressStatus.toFixed(0)}%
                </Styled.addImgMsg>
              ) : null}
            </Styled.addImgMsgBox>
          )}
        </Styled.imageTouchable>
      </Styled.imageBox>
    </Styled.container>
  );
};

const InputWithImage = ({ label, ...props }) => {
  return (
    <Styled.outterContainer>
      <Styled.label>{label}</Styled.label>
      <CommonImagePicker {...props} />
    </Styled.outterContainer>
  );
};

const Styled = {
  outterContainer: styled.View`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0;
  `,
  label: styled.Text`
    font-size: ${theme.fontSize.md}px;
    font-weight: bold;
    color: black;
  `,
  container: styled.View`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
  `,
  imageBox: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  imageTouchable: styled.TouchableOpacity`
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: ${theme.colors.beige};
  `,
  addImgMsgBox: styled.View`
    width: 100%;
    height: 100%;
    border-radius: 4px;

    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.3);
  `,
  addImgMsg: styled.Text`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.md};
  `,
  imageUrl: styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: fill;
  `,
};

export default InputWithImage;
