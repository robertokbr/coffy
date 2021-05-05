import IProduct from './IProduct';
import IUser from './IUser';

export default interface IOrder {
  id: string;
  user: IUser;
  content: Array<{
    product: IProduct;
    quantity: number;
  }>;
  details?: string;
  date: Date;
  state: 'queue' | 'process' | 'done' | 'canceled';
}
