import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  position: absolute;
  bottom: 20px;
  right: 24px;
  background: #fff;
  height: 56px;
  width: 56px;
  border-radius: 43px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

export const Notification = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0;
  right: -0;
`;

export const NotificationText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: regular;
`;