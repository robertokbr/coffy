import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import * as S from './styles';
import commerceImage from '../../assets/commerce.jpeg';
import Input from '../../components/Input/Input';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [isDisplayed, setHeaderPosition] = useState(false);

  useEffect(() => {
    setHeaderPosition(true);
  }, [])

  const handleNavigate = useCallback(() => {
    return navigate('Tabs');
  } ,[]);

  return (
    <S.Container>
      <S.Header
       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
       style={{ flex: 1 }}
       enabled
      >
        <S.HeaderContent
          animate={{ translateY: isDisplayed ? 0 : - 201 }}
        >
          <S.CommerceImage>
            <S.Image source={commerceImage} />
          </S.CommerceImage>
        </S.HeaderContent>
      </S.Header>
      <S.Content >
        <S.Title>
          Bem vindo ao v-commerce! {'\n'}
          <S.Subtitle>
            Digite seu nome para começar a pedir {' '}
            <S.Emoji 
              animate={{ translateY: isDisplayed ? 0 : 10 }}
              transition={{
                type: 'timing',
                loop: true,
                duration: 600,
              }}
            >
              <S.Subtitle>
                🥞
              </S.Subtitle>
            </S.Emoji>
          </S.Subtitle>
        </S.Title>
        <Input 
          placeholder="Digite seu nome..."  
          icon="user" inputStyle={{ outline: 0 }}
          handleInputText={e => console.log(e)}
        />
        <S.Button onPress={handleNavigate}>
          <S.ButtonIcon>
            <Feather name="arrow-right" size={20} color="#dd7329"/>
          </S.ButtonIcon>
          <S.ButtonText>
            Continuar
          </S.ButtonText>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}

export default Home;