import PasscodesService from "../services/passcodes.service.js";

export default class PasscodesController {
  /**
   * @param {PasscodesService} passCodesService
   */
  constructor(passCodesService) {
    this._passCodesService = passCodesService;
  }

  async create() {
    return this._passCodesService.create();
  }
}
