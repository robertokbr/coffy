import { View as MotiView } from 'moti';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10%;
`;

export const Header = styled.View`
  flex: 1;
  max-height: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled(MotiView)`
  position: absolute;
  border-radius: 300px;
  width: 600px;
  height: 600px;
  bottom: 10%;
  right: -224px;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundTwo};
`;

export const CommerceImage = styled.View`
  position: absolute;
  bottom: -40px;
  left: 44%;
`;

export const Content = styled(MotiView)`
  padding: 0 24px;
  align-items: center;
  width: 100%;
`;

export const Image = styled.Image`
  height: 240px;
  width: 240px;
  border-radius: 150px;
`;

export const Title = styled.Text`
  font-family: bold;
  font-size: 28px;
  color: ${colors.black};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: regular;
  font-size: 18px;
  color: ${colors.blackTwo};
`;

export const Button = styled(RectButton)`
  height: 56px;
  background: #312927;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  overflow: hidden;
  width: 100%;
  position: relative;
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
