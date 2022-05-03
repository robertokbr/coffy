import IOrder from '../models/IOrder';

type ICreateOrderDTO = Omit<IOrder, 'id'>;

export default ICreateOrderDTO;
