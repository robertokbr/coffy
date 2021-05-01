import React, { useCallback, useMemo } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import * as S from './styles';
import colors from '../../styles/colors';
import { useOrder } from '../../hooks/useOrder';

const Fab: React.FC = () => {
  const { navigate } = useNavigation();
  const { orderProducts } = useOrder();

  const handleNavigate = useCallback(() => {
    navigate('CreateOrder')
  }, []);

  return (
    <S.Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 3
      }}
      onPress={handleNavigate}
    >
      <S.Content>
        {orderProducts.length > 0 && (
          <S.Notification>
            <S.NotificationText>
              {orderProducts.length}
            </S.NotificationText>
          </S.Notification>
        )}
        <FontAwesome name="hand-stop-o" size={24} color={colors.blackTwo} />
      </S.Content>
   </S.Container>
  );
};

export default Fab;
