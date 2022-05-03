import CreateSessionDTO from '../dtos/create-session.dto.js';
import UpdateSessionDTO from '../dtos/update-session.dto.js';
import SessionsService from '../services/sessions.service.js';

export default class SessionsController {
  /**
   * @param {SessionsService} sessionsService
   */
  constructor(sessionsService) {
    this._sessionsService = sessionsService;
  }

  /**
   * @param {CreateSessionDTO} data
   */
  async create(data) {
    const session = await this._sessionsService.create(data);

    return session;
  }

  /**
   * @param {UpdateSessionDTO} data
   */
  async update(data) {
    const session = await this._sessionsService.update(data);

    return session;
  }
}
