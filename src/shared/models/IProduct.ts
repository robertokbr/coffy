export default interface IProduct {
  id: string;
  type: 'drink' | 'food';
  name: string;
  description: string;
  price: number;
  image_url: string;
}
