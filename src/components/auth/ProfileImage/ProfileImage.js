import styled from 'styled-components/native';
import theme from '../../../theme';

const ProfileImage = ({profileUrl, username}) => {
  return (
    <Styled.imageUrlBox>
      <Styled.imageUrl source={profileUrl} />
      <Styled.imageText>{username}</Styled.imageText>
    </Styled.imageUrlBox>
  );
};

const Styled = {
  imageUrlBox: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  `,
  imageUrl: styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
  `,
  imageText: styled.Text`
    font-size: ${theme.fontSize.xxl}px;
    font-weight: bold;
  `,
};

export default ProfileImage;
