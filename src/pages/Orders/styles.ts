import { FlatList, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import IOrder from '../../shared/models/IOrder';

interface StatusProps {
  isTheFirst: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const NoContentTitle = styled.Text`
  font-family: medium;
  font-size: 24px;
  color: ${colors.white};
  margin-top: 24px;
`;

export const NoContentImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Gallery = styled(FlatList as new () => FlatList<IOrder>)`
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

export const CancelOrder = styled(RectButton)`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
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
  color: ${props => (props.isTheFirst ? colors.green : colors.blackTwo)};
`;
