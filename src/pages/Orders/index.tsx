import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Alert } from 'react-native';
import * as S from './styles';
import colors from '../../styles/colors';
import IOrder from '../../shared/models/IOrder';
import persistenceProvider from '../../shared/firebase';
import Load from '../../components/Load';
import noContentImg from '../../assets/illustrations/no-content.png';
import noImageUser from '../../assets/illustrations/no-img-user.png';
import { useAuth } from '../../hooks/useAuth';
import { useOrder } from '../../hooks/useOrder';

const Orders: React.FC = () => {
  const { user } = useAuth();
  const { handleCancelOrder } = useOrder();

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => setOrders([]), []);

  useEffect(() => {
    persistenceProvider.findOrders(order =>
      setOrders(state => [...state, order]),
    );
  }, []);

  useEffect(() => {
    persistenceProvider.getOrdersUpdate(order => {
      setOrders(state => {
        const allOrders = [...state];

        const orderIndex = allOrders.findIndex(({ id }) => id === order.id);

        if (!~orderIndex) return;

        allOrders[orderIndex] = order;

        return allOrders;
      });
    });
  }, []);

  const noDoneOrders = useMemo(
    () =>
      [...orders].filter(order => !['done', 'canceled'].includes(order.state)),
    [orders],
  );

  const handleCancelUserOrder = useCallback(
    async (order: IOrder) => {
      Alert.alert(
        'Are you sure about that?',
        'If you cancel, you will return to the end of queue',
        [
          {
            text: 'Confirm',
            onPress: async () => handleCancelOrder(order),
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
      );
    },
    [handleCancelOrder],
  );

  if (!orders) {
    return <Load />;
  }

  return (
    <S.Container>
      <S.Gallery
        data={noDoneOrders}
        contentContainerStyle={{
          padding: 24,
        }}
        keyExtractor={order => order.id}
        ListHeaderComponent={
          <S.Header>
            <S.HeaderTitle>Pedidos na fila 🍳</S.HeaderTitle>
          </S.Header>
        }
        ListEmptyComponent={
          <S.NoContentContainer>
            <S.NoContentImage source={noContentImg} />
            <S.NoContentTitle>No orders</S.NoContentTitle>
          </S.NoContentContainer>
        }
        renderItem={({ item }) => (
          <S.Item>
            <S.ItemImage
              source={
                item.user.image_url ? { uri: item.user.image_url } : noImageUser
              }
            />
            <S.TitleContainer>
              <S.OrderPosition>{item.user.name}</S.OrderPosition>
              <S.OrderStatus isTheFirst={item.state === 'process'}>
                {item.state === 'process' ? 'Preparing...' : 'In the queue'}
              </S.OrderStatus>
            </S.TitleContainer>
            {item.user.id === user.id && (
              <S.CancelOrder onPress={() => handleCancelUserOrder(item)}>
                <Ionicons name="ios-close" size={20} color={colors.white} />
              </S.CancelOrder>
            )}
          </S.Item>
        )}
      />
    </S.Container>
  );
};

export default Orders;
