import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
import * as S from './styles';

const Load: React.FC<{ isShadow?: boolean }> = ({ isShadow }) => {
  return (
    <S.Container isShadow={isShadow}>
      <ActivityIndicator size="small" color={colors.primary} />
    </S.Container>
  );
};

export default Load;
