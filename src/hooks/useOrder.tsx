import React, { createContext, useCallback, useContext, useState } from 'react';
import ICreateOrderDTO from '../shared/dtos/ICreateOrderDTO';
import IOrder from '../shared/models/IOrder';
import IProduct from '../shared/models/IProduct';
import persistenceProvider from '../shared/firebase';
import { useAuth } from './useAuth';

type IOrderProduct = {
  product: IProduct;
  quantity: number;
};

interface IOrderContext {
  orderProducts: Array<IOrderProduct>;
  handleAddOrderProducts: (product: IProduct) => void;
  handleProductQuantity: (orderProduct: IOrderProduct) => void;
  handleCreateOrder: (details?: string) => Promise<void>;
  handleCancelOrder: (order: IOrder) => Promise<void>;
}

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderContextProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const [orderProducts, setOrderProducts] = useState<IOrderProduct[]>([]);

  const handleAddOrderProducts = useCallback(
    (product: IProduct) => {
      const allOrderProducts = [...orderProducts];

      const orderProductIndex = orderProducts.findIndex(
        orderProduct => orderProduct.product === product,
      );

      if (~orderProductIndex) {
        allOrderProducts.splice(orderProductIndex, 1);
      } else {
        allOrderProducts.push({
          product,
          quantity: 1,
        });
      }

      setOrderProducts(allOrderProducts);
    },
    [orderProducts],
  );

  const handleProductQuantity = useCallback(
    ({ product, quantity }: IOrderProduct) => {
      const allOrderProducts = [...orderProducts];

      const productIndex = allOrderProducts.findIndex(
        orderProduct => orderProduct.product === product,
      );

      allOrderProducts[productIndex].quantity += quantity;

      if (allOrderProducts[productIndex].quantity <= 0) {
        allOrderProducts.splice(productIndex, 1);
      }

      setOrderProducts(allOrderProducts);
    },
    [orderProducts],
  );

  const handleCreateOrder = useCallback(
    async (details?: string) => {
      const order: ICreateOrderDTO = {
        content: orderProducts,
        user,
        date: new Date(),
        state: 'queue',
      };

      if (details) {
        order.details = details;
      }

      await persistenceProvider.createOrder(order);

      setOrderProducts([]);
    },
    [orderProducts, user],
  );

  const handleCancelOrder = useCallback(async (order: IOrder) => {
    order.state = 'canceled';
    await persistenceProvider.updateOrder(order);
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orderProducts,
        handleAddOrderProducts,
        handleProductQuantity,
        handleCreateOrder,
        handleCancelOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = (): IOrderContext => {
  const context = useContext(OrderContext);

  const isContextEmpty = !context;

  if (isContextEmpty) {
    throw new Error('useOrder must be used within the OrderContextProvider!');
  }

  return context;
};

export { useOrder, OrderContextProvider };
