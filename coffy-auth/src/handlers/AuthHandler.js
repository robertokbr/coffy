import PasscodesController from "../modules/sessions/controllers/passcodes.controller.js";
import PayloadsController from "../modules/sessions/controllers/payloads.controller.js";
import SessionsController from "../modules/sessions/controllers/sessions.controller.js";

export default class AuthHandler {
  /**
   * @param {{
   *  sessionsController: SessionsController,
   *  payloadsController: PayloadsController,
   *  passCodesController: PasscodesController,
   * }} data
   */
  constructor(data) {
    this._sessionsController = data.sessionsController
    this._payloadsController = data.payloadsController
    this._passCodesController = data.passCodesController
  }

  async createPasscode({ request }, callback){
    return this._passCodesController.create(request)
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }

  async createSession({ request }, callback){
    return this._sessionsController.create(request)
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }

  async updateSession({ request }, callback){
    return this._sessionsController.update(request)
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }

  async getSessionPayload({ request }, callback) {
    return this._payloadsController.verify(request.jwt)
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
  }
}
