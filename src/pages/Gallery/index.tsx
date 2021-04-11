import React, { useCallback, useMemo } from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';
import colors from '../../styles/colors';
import commerceImage from '../../assets/commerce.jpeg';
import LargeItems from '../../components/LargeItems';
import { useNavigation } from '@react-navigation/core';
import Items from '../../components/Items';
import Fab from '../../components/Fab';

const Gallery: React.FC = () => {
  const { navigate } = useNavigation();

  const { items } = useMemo(() => {
    return {
      items: [
        {
          isTitle: true,
          render: () => <S.GalleryTitle>Sanduiches</S.GalleryTitle>,
          key: 'LIST_ONE_ITEM_TITLE'
        },
        {
          isTitle: false,
          render: () => <LargeItems/>,
          key: 'LIST_ONE_ITEM'
        },
        {
          isTitle: true,
          render: () => <S.GalleryTitle>Bebidas</S.GalleryTitle>,
          key: 'LIST_TWO_ITEM_TITLE'
        },
        {
          isTitle: false,
          render: () => <Items/>,
          key: 'LIST_TWO_ITEM'
        },
        {
          isTitle: true,
          render: () => <S.GalleryTitle>Sobremesas</S.GalleryTitle>,
          key: 'LIST_THREE_ITEM_TITLE'
        },
        {
          isTitle: false,
          render: () => <LargeItems/>,
          key: 'LIST_THR_ITEMEE'
        }
      ]
    }
  }, []);

  const handleNavigateBack = useCallback(() => {
    return navigate('Home')
  }, []);

  return (
    <>
      <S.Container>
        <S.Gallery
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
                <S.Image source={commerceImage}/>
              </S.HeaderContent>
            </S.Header>
          }
          data={items}
          keyExtractor={item => item.key}
          renderItem={({ item }) => item.render()}
        />
      </S.Container>
      <Fab/>
    </>
  );
};

export default Gallery;
