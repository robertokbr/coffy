import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import * as S from './styles';
import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/Input/Input';
import commerceImg from '../../assets/commerce.jpeg';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { signIn, user } = useAuth();

  const [isDisplayed, setIsDisplayed] = useState(false);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setIsDisplayed(true);
    setInputText(user.name);
  }, [user]);

  const handleCreateUser = useCallback(async () => {
    if (inputText.length < 1) return;

    await signIn(inputText);

    return navigate('Tabs');
  }, [navigate, signIn, inputText]);

  const handleInputText = useCallback((text: string) => {
    setInputText(text);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      enabled
    >
      <S.Container>
        <S.Header>
          <S.HeaderContent animate={{ translateY: isDisplayed ? 0 : -201 }}>
            <S.CommerceImage>
              <S.Image source={commerceImg} />
            </S.CommerceImage>
          </S.HeaderContent>
        </S.Header>
        <S.Content>
          <S.Title>
            Wellcome to v-commerce!
            {'\n'}
            <S.Subtitle>Text your name to start to order 🥞</S.Subtitle>
          </S.Title>
          <Input
            placeholder="Your name..."
            icon="user"
            handleInputText={handleInputText}
            defaultValue={inputText}
          />
          <S.Button onPress={handleCreateUser}>
            <S.ButtonText>Continuar</S.ButtonText>
            <S.ButtonIcon>
              <Feather name="arrow-right" size={20} color="#dd7329" />
            </S.ButtonIcon>
          </S.Button>
        </S.Content>
      </S.Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
