import { FlatList, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface StatusProps {
  isTheFirst: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Gallery = styled(
  FlatList as new () => FlatList<any>
)`
  width: 100%;
`;


export const Header = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 12};
  padding-bottom: 24px;
`;


export const HeaderTitle = styled.Text`
  font-family: bold;
  color: ${colors.blackTwo};
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
`;

export const Item = styled.View`
  height: 74px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
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

export const OrderPosition = styled.Text`
  font-family: medium;
  color: ${colors.black};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const OrderStatus = styled.Text<StatusProps>`
  font-family: medium;
  font-size: 12px;
  color: ${props => props.isTheFirst ? '#9ef01a' : colors.blackTwo};
`;
