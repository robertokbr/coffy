import { FlatList, RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import IProduct from '../../shared/models/IProduct';
import colors from '../../styles/colors';

type IOrderProduct = {
  product: IProduct;
  quantity: number;
};

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Header = styled.View``;

export const HeaderContent = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-bottom: 12px;
`;

export const HeaderTitle = styled.Text`
  font-family: bold;
  color: ${colors.blackTwo};
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
`;

export const Label = styled.Text`
  font-family: medium;
  font-size: 18px;
  color: ${colors.black};
  margin-top: 24px;
`;

export const GoBackButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const OrderList = styled(FlatList as new () => FlatList<IOrderProduct>)`
  width: 100%;
`;

export const NoContentContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50%;
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

export const TextArea = styled.View``;

export const Button = styled(RectButton)`
  height: 56px;
  background: #312927;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 0 0 ${getBottomSpace() + 24}px;
`;

export const ButtonIcon = styled.View`
  background: rgba(0, 0, 0, 0.1);
  height: 56px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: absolute;
  left: 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: regular;
  text-align: center;
  flex: 1;
`;
