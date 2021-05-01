import React from 'react';
import { Entypo } from '@expo/vector-icons';

import * as S from './styles';
import colors from '../../styles/colors';
import { useOrder } from '../../hooks/useOrder';
import IProduct from '../../shared/models/IProduct';

const Items: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const { orderProducts, handleAddOrderProducts } = useOrder();

  return (
    <S.ItemList>
      {products.map(product => (
        <S.Item key={product.id}>
          <S.ItemImage source={{ uri: product.image_url }} />
          <S.TitleContainer>
            <S.Title>{product.name}</S.Title>
            <S.SubTitle numberOfLines={1}>{product.description}</S.SubTitle>
          </S.TitleContainer>
          <S.PickItemButton onPress={() => handleAddOrderProducts(product)}>
            <Entypo
              name="check"
              size={20}
              color={
                orderProducts.find(op => op.product === product)
                  ? colors.green
                  : colors.white
              }
            />
          </S.PickItemButton>
        </S.Item>
      ))}
    </S.ItemList>
  );
};

export default Items;
