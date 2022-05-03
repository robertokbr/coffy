import { Logger } from '@nestjs/common';
import { ILogger } from './model/ILogger';

const prismaLogger = new Logger();

export const logger: ILogger = {
  error: (data) => prismaLogger.error(data.message, data.stack, data.context),
  warn: (data) => prismaLogger.warn(data.message, data.context),
  info: (data) => prismaLogger.log(data.message, data.context),
  debug: (data) => prismaLogger.debug(data.message, data.context),
};
