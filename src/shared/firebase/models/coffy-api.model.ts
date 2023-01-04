import IUploadUserAvatarDTO from "../../dtos/IUploadUserAvatarDTO";
import ICollection from "../../models/ICollection";
import IOrder from "../../models/IOrder";

export interface CoffyModel {
  findCollections(
    callback: (data: ICollection) => void
  ): Promise<void>;
  findOrders(
    callback: (data: IOrder) => void
  ): Promise<void>;
  getOrdersUpdate(
    callback: (data: IOrder | null) => void
  ): Promise<void>;
  createOrder(order: Omit<IOrder, 'id'>): Promise<void>;
  updateOrder(order: IOrder): Promise<void>;
  updateUserAvatar(data: IUploadUserAvatarDTO): Promise<any>;
}
