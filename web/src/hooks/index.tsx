import React from 'react';
import { OrderContextProvider } from './useOrder';
import { AuthContextProvider } from './useAuth';

const Hooks: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
        <OrderContextProvider>
        { children }
      </OrderContextProvider>
    </AuthContextProvider>
  )
}

export default Hooks;