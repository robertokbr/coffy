import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import * as S from './styles';

interface InputProps {
  icon?: string;
  inputStyle?: Object;
  placeholder?: string;
  defaultValue?: string;
  handleInputText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  icon,
  inputStyle,
  placeholder,
  defaultValue,
  handleInputText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeInputText = useCallback(
    (text: string) => {
      if (!handleInputText) return;

      handleInputText(text);
    },
    [handleInputText],
  );

  return (
    <S.Container isFocused={isFocused}>
      <S.UserNameInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.blackTwo}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleChangeInputText}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={inputStyle}
      />
      <Feather
        name={icon as any}
        color={isFocused ? colors.primary : colors.white}
        size={24}
      />
    </S.Container>
  );
};

export default Input;
