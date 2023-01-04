import axios, { AxiosInstance } from 'axios';
import ICollection from '../../models/ICollection';
import { CoffyModel } from '../models/coffy-api.model';

export class CoffyApi implements CoffyModel {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_COFFY_API_URL,
    });
  }

  public async findCollections(
    callback: (collection: ICollection) => void,
  ): Promise<void> {
    const { data } = await this.client.get('/items');

    callback(data);
  }

  public async findOrders(
    callback: (order: IOrder | null) => void,
  ): Promise<void> {
    const parse = (value: database.DataSnapshot) => {
      const { user, content, date, state } = value.val();
      const id = value.key;

      const parsedObject = {
        id,
        user,
        content,
        date: new Date(date),
        state,
      };

      return parsedObject;
    };

    this.client

      .ref('orders')
      .on('child_added', order => callback(parse(order)));
  }

  public async getOrdersUpdate(
    callback: (order: IOrder | null) => void,
  ): Promise<void> {
    const parse = (value: database.DataSnapshot) => {
      const { user, content, date, state } = value.val();
      const id = value.key;

      const parsedObject = {
        id,
        user,
        content,
        date: new Date(date),
        state,
      };

      return parsedObject;
    };

    this.client
      .ref('orders')
      .on('child_changed', order => callback(parse(order)));
  }

  public async createOrder(order: Omit<IOrder, 'id'>): Promise<void> {
    await this.client.ref('orders').push(order);
  }

  public async updateOrder(order: IOrder): Promise<void> {
    const lol = await this.client.ref('orders').child(order.id).once('value');

    const orderValue = lol.val();

    orderValue.state = order.state;

    await this.client.ref('orders').child(order.id).update(orderValue);
  }

  public async updateUserAvatar({ file, user_id }: IUploadUserAvatarDTO) {
    return this.storage
      .ref(`users/user_${user_id}.jpg`)
      .put(file)
      .then(snapshot => snapshot.ref.getDownloadURL());
  }
}
