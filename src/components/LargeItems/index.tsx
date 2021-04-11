import React from 'react';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import items from '../../assets/items';
import colors from '../../styles/colors';

const LargeItems: React.FC = () => {
  return (
    <S.ItemList>
      {items.map(item => (
        <S.Item>
          <S.ImageContainer>
            <S.ItemImage source={item} />
            <S.PickItemButton>
              <Entypo name="check" size={20} color={colors.white} />
            </S.PickItemButton>
          </S.ImageContainer>
          <S.Content>
            <S.TitleContainer>
              <S.Title>
                Panquecas
              </S.Title>
              <S.SubTitle>
                Cada pedido acompanha 3 unidades
              </S.SubTitle>
            </S.TitleContainer>
          </S.Content>
        </S.Item>
      ))}
    </S.ItemList>
  );
}

export default LargeItems;
