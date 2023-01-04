import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ItemList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  }
})``;

export const Item = styled.View`
  width: 300px;
  border-radius: 12px;
  overflow: hidden; 
  background: #fff;
  margin-right: 16px;
`;

export const ImageContainer = styled.View`
  position: relative;
`;

export const ItemImage = styled.Image`
  height: 160px;
  width: 100%;
  border-radius: 12px;
`;

export const PickItemButton = styled(RectButton)`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #fff;
  top: 10px;
  right: 10px;
`;

export const Content = styled.View`
  padding: 16px 24px;
`;

export const TitleContainer = styled.View``;

export const Title = styled.Text`
  font-family: medium;
  color: ${colors.black};
  font-size: 16px;
`;

export const SubTitle = styled.Text`
  font-family: medium;
  font-size: 12px;
  color: ${colors.blackTwo};
`;