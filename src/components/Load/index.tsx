import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';
import * as S from './styles';

const Load: React.FC = () => {
  return (
    <S.Container>
      <ActivityIndicator size="small" color={colors.primary} />
    </S.Container>
  )
}

export default Load;