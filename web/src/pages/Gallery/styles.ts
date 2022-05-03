import { FlatList, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import colors from '../../styles/colors';

export interface GalleryItemProps {
  key: string;
  render: () => JSX.Element;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0 24px 12px;
  padding-top: ${getStatusBarHeight() + 12};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: bold;
  color: ${colors.blackTwo};
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const UserAvatar = styled(RectButton)`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const Gallery = styled(
  FlatList as new () => FlatList<GalleryItemProps>,
)``;

export const GalleryTitle = styled.Text`
  font-family: medium;
  font-size: 18px;
  color: ${colors.black};
  margin-left: 24px;
`;
