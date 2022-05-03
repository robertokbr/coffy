import PasscodesRepository from "../repositories/passcodes.repository.js";

export default class PasscodesService {
  /**
   * @param {PasscodesRepository} passCodesRepository
   */
  constructor(passCodesRepository){
    this._passCodesRepository = passCodesRepository;
  }

  async create() {
    return this._passCodesRepository.create();
  }
}
