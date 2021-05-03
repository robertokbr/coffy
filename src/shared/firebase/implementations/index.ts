import firebase, { database, storage } from 'firebase';
import IProduct from '../../models/IProduct';
import IOrder from '../../models/IOrder';
import IUploadUserAvatarDTO from '../../dtos/IUploadUserAvatarDTO';

class FirebasePersistenceProvider {
  private client: database.Database;

  private storage: storage.Storage;

  constructor() {
    if (firebase.apps.length <= 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBGKfkg5qFRi7DE5HGOnKXaGEemfusCAxM',
        authDomain: 'v-commerce-d40ed.firebaseapp.com',
        databaseURL: 'https://v-commerce-d40ed-default-rtdb.firebaseio.com',
        projectId: 'v-commerce-d40ed',
        storageBucket: 'v-commerce-d40ed.appspot.com',
        messagingSenderId: '347268996042',
        appId: '1:347268996042:web:4565d5fad97737636dcd33',
        measurementId: 'G-N3YQ340SJN',
      });
    }

    this.client = firebase.app().database();
    this.storage = firebase.app().storage();
  }

  public async findProducts(
    callback: (product: IProduct) => void,
  ): Promise<void> {
    const parse = (value: database.DataSnapshot) => {
      const { name, type, description, price, image_url } = value.val();

      const id = value.key;

      return {
        id,
        name,
        type,
        description,
        price,
        image_url,
      };
    };

    this.client

      .ref('products')
      .on('child_added', product => callback(parse(product)));
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
    console.log(user_id);

    return this.storage
      .ref(`users/user_${user_id}.jpg`)
      .put(file)
      .then(snapshot => snapshot.ref.getDownloadURL());
  }
}

export default FirebasePersistenceProvider;
