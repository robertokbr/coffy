import User from '../models/User.js';
import { connection } from '../../../database/index.js';

export default class UsersRepository {
  _client = connection('users');

  /**
   *
   * @param {string} id
   * @returns {Promise<User>}
   */
  async findById(id) {
    const [user] = await connection.raw(
      `SELECT * FROM "users" WHERE "id" = "${id}"`
    );

    return user;
  }

  /**
   * @param {User} user
   */
  async create(user) {
    await this._client.insert(user);

    return user;
  }
}
