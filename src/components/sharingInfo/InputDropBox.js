import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import theme from "../../theme";

const Styled = {
  container: styled.View`
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
};

const InputDropBox = ({ label, category, setCategory }) => {
  return (
    <Styled.container>
      <Styled.label>{label}</Styled.label>
      <RNPickerSelect
        placeholder={{
          label: "맛집",
          value: "restaurant",
        }}
        style={pickerSelectStyles}
        value={category}
        onValueChange={(value) => setCategory(value)}
        useNativeAndroidPickerStyle={true}
        items={[
        //   { label: "맛집", value: "restaurant" },
          { label: "카페", value: "cafe" },
          { label: "생활꿀팁", value: "life" },
        ]}
      />
    </Styled.container>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputWeb: {
    fontSize: 16,
    height: 50,
    width: "100%",
    color: theme.colors.dark,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  inputIOS: {
    fontSize: 16,
    height: 50,
    width: "100%",
    color: theme.colors.dark,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  inputAndroid: {
    fontSize: 16,
    height: 50,
    width: "100%",
    color: theme.colors.dark,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
});

export default InputDropBox;
