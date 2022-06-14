import styled from 'styled-components/native';
import theme from '../../../theme';

const ProfileImage = ({profileUrl, username}) => {
  return (
    <Styled.imageBox>
      <Styled.image source={profileUrl} />
      {username && <Styled.text>{username}</Styled.text>}
    </Styled.imageBox>
  );
};

const Styled = {
  imageBox: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  `,
  image: styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
  `,
  text: styled.Text`
    font-size: ${theme.fontSize.xxl}px;
    font-weight: bold;
  `,
};

export default ProfileImage;
