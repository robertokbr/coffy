import React, {
  useCallback,
  useState,
  useContext,
  createContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';
import IUser from '../shared/models/IUser';

interface AuthContextData {
  user: IUser;
  loading: boolean;
  signIn(user_name: string): Promise<void>;
  updateUser(user: IUser): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const user = await AsyncStorage.getItem('@user');

      if (user) {
        setUserData(JSON.parse(user));
      }

      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(
    async (user_name: string) => {
      let user: IUser = JSON.parse(await AsyncStorage.getItem('@user'));

      if (!user || user.name !== userData.name) {
        user = {
          id: String(uuid.v4()),
          name: user_name,
          image_url: '',
        };

        await AsyncStorage.setItem('@user', JSON.stringify(user));
      }

      setUserData(user);
    },
    [userData.name],
  );

  const updateUser = useCallback(async (user: IUser) => {
    setUserData(state => ({
      ...state,
      ...user,
    }));

    await AsyncStorage.setItem('@user', JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: userData, updateUser, loading, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used within AuthContextProvider as wrapper',
    );
  }

  return context;
}

export { AuthContextProvider, useAuth };
