import Passcode from '../models/Passcode.js';
import { connection } from '../../../database/index.js';

export default class PasscodesRepository {
  _client = connection('passcodes');

  /**
   * @param {string} code
   * @returns {Promise<Passcode>}
   */
  async findByCode (code) {
    const [passcode] = await connection.raw(
      `SELECT * FROM "passcodes" WHERE "code" = "${code}"`
    );

    return passcode;
  }

  /**
   * @returns {Promise<Passcode>}
   */
  async create () {
    const passcode = new Passcode();

    await this._client.insert(passcode);

    return passcode;
  }
}
