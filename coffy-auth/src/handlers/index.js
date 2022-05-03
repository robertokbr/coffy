import AuthHandler from './AuthHandler.js';
import PasscodesController from "../modules/sessions/controllers/passcodes.controller.js";
import PayloadsController from "../modules/sessions/controllers/payloads.controller.js";
import SessionsController from "../modules/sessions/controllers/sessions.controller.js";
import PasscodesService from '../modules/sessions/services/passcodes.service.js';
import SessionsService from '../modules/sessions/services/sessions.service.js';
import PasscodesRepository from '../modules/sessions/repositories/passcodes.repository.js';
import UsersRepository from '../modules/sessions/repositories/users.repository.js';

//Repositories
const passCodesRepository = new PasscodesRepository();
const usersRepository = new UsersRepository()

// Services
const sessionsService = new SessionsService(
  passCodesRepository,
  usersRepository,
);
const passCodesService = new PasscodesService(passCodesRepository);

// Controllers
const sessionsController = new SessionsController(sessionsService);
const payloadsController =  new PayloadsController();
const passCodesController = new PasscodesController(passCodesService);

export const authHandler = new AuthHandler({
  sessionsController,
  payloadsController,
  passCodesController
});
