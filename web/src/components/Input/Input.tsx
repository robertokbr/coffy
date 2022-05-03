import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import * as S from './styles';

interface InputProps {
  icon?: string;
  inputStyle?: Object;
  placeholder?: string;
  defaultValue?: string;
  containerStyle?: Object;
  numberOfLines?: number;
  textAlignVertical?: 'bottom' | 'top' | 'center' | 'auto';
  handleInputText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  icon,
  inputStyle,
  placeholder,
  defaultValue,
  handleInputText,
  containerStyle,
  numberOfLines,
  textAlignVertical,
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
    <S.Container isFocused={isFocused} style={containerStyle}>
      <S.UserNameInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.blackTwo}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleChangeInputText}
        autoCapitalize="sentences"
        placeholder={placeholder}
        defaultValue={defaultValue}
        scrollEnabled
        multiline={numberOfLines > 0}
        numberOfLines={numberOfLines}
        textAlignVertical={textAlignVertical}
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
