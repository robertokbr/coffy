import React, { useCallback, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';
import items from '../../assets/items';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

const Orders: React.FC = () => {
  const { navigate } = useNavigation();

  const image = useMemo(() => 
    'https://avatars.githubusercontent.com/u/60328400?v=4'
  , []);


  const handleNavigateBack = useCallback(() => {
    return navigate('Gallery')
  }, []);

  return (
    <S.Container>
      <S.Gallery
        data={items}
        contentContainerStyle={{
          padding: 24,
        }}
        keyExtractor={_ => String(Math.random())}
        ListHeaderComponent={
          <S.Header>
            <S.HeaderTitle>
              Pedidos na fila 🍳
            </S.HeaderTitle>
          </S.Header>
        }
        renderItem={({ item, index }) => (
          <S.Item>
            <S.ItemImage source={{ uri: image }} />
            <S.TitleContainer>
              <S.OrderPosition>
                Pedido número { index + 1}
              </S.OrderPosition>
              <S.OrderStatus isTheFirst={index === 0}>
                {index === 0 ? 'Em preparo' : 'Aguardando na fila'}
              </S.OrderStatus>
            </S.TitleContainer>
            <S.PickItemButton>
             <Ionicons name="ios-close" size={20} color={colors.white} />
            </S.PickItemButton>
         </S.Item>
        )}
      />
    </S.Container>
  );
};

export default Orders;
