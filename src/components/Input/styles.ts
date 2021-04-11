import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  padding: 14px 24px;
  background: rgba(0,0,0,0.02);
  border-radius: 12px;
  margin-top: 36px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserNameInput = styled.TextInput`
  background: transparent;
  color: ${colors.blackTwo};
  font-family: regular;
  font-size: 18px;
  flex: 1;
`;