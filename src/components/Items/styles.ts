import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ItemList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
})``;

export const Item = styled.View`
  width: 300px;
  height: 74px;
  margin-right: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px;
`;

export const ItemImage = styled.Image`
  height: 100%;
  width: 74px;
  border-radius: 12px;
`;

export const PickItemButton = styled(RectButton)`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: 10px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  margin-left: 24px;
`;

export const Title = styled.Text`
  font-family: medium;
  color: ${colors.black};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const SubTitle = styled.Text`
  font-family: medium;
  font-size: 12px;
  color: ${colors.blackTwo};
`;
