/* eslint-disable react/jsx-curly-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';
import * as S from './styles';
import colors from '../../styles/colors';
import { useOrder } from '../../hooks/useOrder';
import Load from '../../components/Load';
import noContentImg from '../../assets/illustrations/no-food.png';

const CreateOrder: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    orderProducts,
    handleProductQuantity,
    handleCreateOrder,
  } = useOrder();

  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateBack = useCallback(() => {
    navigate('Gallery');
  }, [navigate]);

  const handleFinishOrder = useCallback(() => {
    if (!orderProducts.length) return;

    setIsLoading(true);

    handleCreateOrder().then(_ => {
      setIsLoading(false);
      navigate('Gallery');
    });
  }, [handleCreateOrder, navigate, orderProducts.length]);

  return (
    <>
      <S.Container>
        <S.OrderList
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          data={orderProducts}
          keyExtractor={item => item.product.id}
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
          ListEmptyComponent={
            <S.NoContentContainer>
              <S.NoContentImage source={noContentImg} />
              <S.NoContentTitle>No Food selected</S.NoContentTitle>
            </S.NoContentContainer>
          }
          renderItem={({ item: { product, quantity } }) => (
            <S.Item>
              <S.ItemImage source={{ uri: product.image_url }} />
              <S.TitleContainer>
                <S.Title>{product.name}</S.Title>
                <S.SubTitle numberOfLines={1}>{product.description}</S.SubTitle>
              </S.TitleContainer>
              <S.PickQuantity>
                <S.MinusQuantity
                  onPress={() =>
                    handleProductQuantity({ product, quantity: -1 })
                  }
                >
                  <Entypo name="minus" size={20} color={colors.blackTwo} />
                </S.MinusQuantity>
                <S.QuantityText>{quantity}</S.QuantityText>
                <S.PlusQuantity
                  onPress={() =>
                    handleProductQuantity({ product, quantity: 1 })
                  }
                >
                  <Entypo name="plus" size={20} color={colors.white} />
                </S.PlusQuantity>
              </S.PickQuantity>
            </S.Item>
          )}
        />
      </S.Container>
      {isLoading && <Load isShadow />}
      <S.Footer>
        <S.Button
          onPress={
            !orderProducts.length ? handleNavigateBack : handleFinishOrder
          }
        >
          <S.ButtonIcon>
            <Feather name="arrow-right" size={20} color="#dd7329" />
          </S.ButtonIcon>
          <S.ButtonText>
            {!orderProducts.length ? 'Pick products' : 'Finish Order'}
          </S.ButtonText>
        </S.Button>
      </S.Footer>
    </>
  );
};

export default CreateOrder;
