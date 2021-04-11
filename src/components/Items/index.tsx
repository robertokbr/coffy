import React from 'react';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import items from '../../assets/items';
import colors from '../../styles/colors';

const Items: React.FC = () => {
  return (
    <S.ItemList>
      {items.map(item => (
        <S.Item>
          <S.ItemImage source={item} />
          <S.TitleContainer>
            <S.Title>
              Panquecas
            </S.Title>
            <S.SubTitle>
              720 ml
            </S.SubTitle>
          </S.TitleContainer>
          <S.PickItemButton>
           <Entypo name="check" size={20} color={colors.white} />
          </S.PickItemButton>
        </S.Item>
      ))}
    </S.ItemList>
  );
}

export default Items;
