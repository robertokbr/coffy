import { FlatList, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface OrderData {
  image: any;
  index: number;
  quantity: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 12};
  padding-bottom: 12px;
`;

export const HeaderContent = styled.View``;

export const HeaderTitle = styled.Text`
  font-family: bold;
  color: ${colors.blackTwo};
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
`;

export const GoBackButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const OrderList = styled(
  FlatList as new () => FlatList<OrderData>
)`
  width: 100%;
`;

export const Item = styled.View`
  height: 74px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ItemImage = styled.Image`
  height: 100%;
  width: 74px;
  border-radius: 12px;
`;

export const PickQuantity = styled.View`
  height: 24px;
  width: 64px;
  background: ${colors.white};
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  margin-right: 16px;
  flex-direction: row;
  padding: 0 4px;
`;

export const PlusQuantity = styled(RectButton)`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundThree};
  margin-right: 10px;
  position: absolute;
  right: -28px;
`;

export const MinusQuantity = styled(RectButton)``;

export const QuantityText = styled.Text`
  font-family: bold;
  color: ${colors.black};
  font-size: 16px;
  flex: 1;
  margin-left: 8px;
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
