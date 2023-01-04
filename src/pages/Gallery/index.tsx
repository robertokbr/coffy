import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import { Platform, Alert, ActivityIndicator } from 'react-native';

import * as S from './styles';
import { useAuth } from '../../hooks/useAuth';
import colors from '../../styles/colors';
import LargeItems from '../../components/LargeItems';
import Items from '../../components/Items';
import Fab from '../../components/Fab';
import persistenceProvider from '../../shared/firebase';
import Load from '../../components/Load';
import noImageUser from '../../assets/illustrations/no-img-user.png';
import ICollection from '../../shared/models/ICollection';

type ImagePickerReturn = {
  cancelled: boolean;
  type: 'image' | 'video';
  uri: string;
  width: number;
  height: number;
  base64: string;
};

const Gallery: React.FC = () => {
  const { navigate } = useNavigation();
  const { user, updateUser } = useAuth();

  const [collections, setCollections] = useState<ICollection[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    persistenceProvider.findCollections(collection =>
      setCollections(state => [...state, collection]),
    );
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  const items = useMemo(() => {
    const listItems: S.GalleryItemProps[] = [];

    collections.forEach(category => {
      listItems.push(
        {
          render: () => <S.GalleryTitle>{category.title}</S.GalleryTitle>,
          key: `${category.title}`,
        },
        {
          render: () =>
            category.isLargeSize ? (
              <LargeItems products={category.content} />
            ) : (
              <Items products={category.content} />
            ),
          key: `${category.id}`,
        },
      );
    });

    return listItems;
  }, [collections]);

  const handleNavigateBack = useCallback(() => {
    return navigate('Home');
  }, [navigate]);

  const handleUpdateAvatar = useCallback(async () => {
    setIsLoading(true);

    try {
      const result = (await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: false,
        base64: true,
      })) as ImagePickerReturn;

      if (!result.cancelled) {
        const file = await fetch(result.uri);

        const blob = await file.blob();

        const fileUrl = await persistenceProvider.updateUserAvatar({
          file: blob,
          user_id: user.id,
          base64: result.base64,
        });

        Object.assign(user, { image_url: fileUrl });

        await updateUser(user);
      }
    } finally {
      setIsLoading(false);
    }
  }, [updateUser, user]);

  if (collections.length <= 0) {
    return <Load />;
  }

  return (
    <>
      <S.Container>
        <S.Gallery
          showsVerticalScrollIndicator={false}
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
                <S.UserAvatar onPress={handleUpdateAvatar}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color={colors.primary} />
                  ) : (
                    <S.Image
                      source={
                        user.image_url ? { uri: user.image_url } : noImageUser
                      }
                    />
                  )}
                </S.UserAvatar>
              </S.HeaderContent>
            </S.Header>
          }
          data={items}
          keyExtractor={item => item.key}
          renderItem={({ item }) => item.render()}
        />
      </S.Container>
      <Fab />
    </>
  );
};

export default Gallery;
