import React, { useCallback, useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';
import items from '../../assets/items';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

interface OrderData {
  image: any;
  index: number;
  quantity: number;
}

const CreateOrder: React.FC = () => {
  const { navigate } = useNavigation();

  const [orderItem, setOrderItem] = useState<OrderData[]>([]);

  useEffect(() => {
    const orderData = items.map((item, index) => ({
      image: item,
      index,
      quantity: 1,
    }));

    setOrderItem(orderData)
  }, [items]);

  const handleNavigateBack = useCallback(() => {
    return navigate('Gallery')
  }, []);

  const handleQuantity = useCallback(({
    index,
    quantity,
  }: Omit<OrderData, 'image'>) => {
    setOrderItem(state => {
      const items = [...state];
      items[index].quantity += quantity;

      if (items[index].quantity < 0) {
        items.splice(index, 1);
      }

      return items;
    });
  }, []);

  return (
    <S.Container>
      <S.OrderList 
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        data={orderItem}
        keyExtractor={item => String(item.index)}
        ListHeaderComponent={
          <S.Header>
            <S.HeaderContent>
              <S.GoBackButton onPress={handleNavigateBack}>
                <Feather 
                  name="chevron-left" 
                  size={24} 
                  color={colors.backgroundThree}
                />
              </S.GoBackButton>
            </S.HeaderContent>
          </S.Header>
        }
        renderItem={({ item, index }) => (
          <S.Item>
          <S.ItemImage source={item.image} />
          <S.TitleContainer>
            <S.Title>
              Panquecas
            </S.Title>
            <S.SubTitle>
              720 ml
            </S.SubTitle>
          </S.TitleContainer>
          <S.PickQuantity>
            <S.MinusQuantity 
              onPress={() => handleQuantity({index, quantity: -1})}
            >
            <Entypo name="minus" size={20} color={colors.blackTwo} />
            </S.MinusQuantity>
            <S.QuantityText>
              {item.quantity}
            </S.QuantityText>
            <S.PlusQuantity 
              onPress={() => handleQuantity({index, quantity: 1})}
            >
            <Entypo name="plus" size={20} color={colors.white} />
            </S.PlusQuantity>
          </S.PickQuantity>
        </S.Item>
        )}
      >
      </S.OrderList>
    </S.Container>
  );
};

export default CreateOrder;
