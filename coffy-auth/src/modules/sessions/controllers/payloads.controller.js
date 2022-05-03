import jsonwebtoken from 'jsonwebtoken';
import jwtConfigs from '../../../configs/jwt.js';

export default class PayloadsController {
  /**
   * @param {string} jwt
   */
  async verify(jwt) {
    try {
      const payload = jsonwebtoken.verify(
        jwt,
        jwtConfigs.secret
      );

      return payload;
    } catch (_error) {
      throw new Error('Invalid JWT!')
    }
  }
}
