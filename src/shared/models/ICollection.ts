import IProduct from './IProduct';

export default interface ICollection {
  id: string;
  title: string;
  isLargeSize: boolean;
  content: Array<IProduct>;
}
