import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(0,0,0,0.02);
  border-radius: 12px;
  margin-top: 36px;
  flex-direction: row;
  align-items: center;
`;

export const UserNameInput = styled.TextInput`
  flex: 1;
  background: transparent;
  color: ${colors.blackTwo};
  font-family: regular;
  font-size: 16px;
`;