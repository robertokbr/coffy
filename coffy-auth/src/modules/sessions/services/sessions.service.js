import jsonwebtoken from 'jsonwebtoken';
import jwtConfigs from '../../../configs/jwt.js';
import PasscodesRepository from '../repositories/passcodes.repository.js';
import { isAfter, addHours } from 'date-fns';
import CreateSessionDTO from '../dtos/create-session.dto.js';
import UpdateSessionDTO from '../dtos/update-session.dto.js';
import UsersRepository from '../repositories/users.repository.js';
import User from '../models/User.js';

export default class SessionsService {
  /**
   * @param {PasscodesRepository} passCodesRepository
   * @param {UsersRepository} usersRepository
   */
  constructor(passCodesRepository, usersRepository) {
    this._passCodesRepository = passCodesRepository;
    this._usersRepository = usersRepository;
  }

  /**
   * @param {string} code
   */
  async _validCode(code) {
    const passCode = await this._passCodesRepository.findByCode(
      code,
    );

    if (!passCode) return new Error('Invalid code!');

    const expiration = addHours(passCode, jwtConfigs.expirationHours);

    if (isAfter(Date.now(), expiration)) return new Error('Code out of date!');

    return passCode;
  }

  /**
   * @param {CreateSessionDTO} data
   */
  async create(data) {
    const validatedCode = await this._validCode(data.code);

    if (validatedCode instanceof Error) throw validatedCode;


    let user = await this._usersRepository.findById(data.id);

    if(!user) {
      user = new User(data.name);

      await this._usersRepository.create(user)
    }

    const jwt = jsonwebtoken.sign(
      {...user},
      jwtConfigs.secret,
      { expiresIn: jwtConfigs.expiration }
    );

    const expiration = addHours(new Date(), jwtConfigs.expirationHours);

    return { jwt, expiration };
  }

  /**
   * @param {UpdateSessionDTO} param0
   */
  async update({ code, jwt }) {
    try {
      await this.validCode(code);

      const { exp, iat, ...payload } = jsonwebtoken.verify(
        jwt,
        jwtConfigs.secret
      );

      payload.code = code;

      const newJwt = jsonwebtoken.sign(
        payload,
        jwtConfigs.secret,
        { expiresIn: jwtConfigs.expiration });

      const expiration = addHours(new Date(), jwtConfigs.expirationHours);

      return { jwt: newJwt, expiration };
    } catch (_error) {
      return Error('Invalid Request!')
    }
  }
}
