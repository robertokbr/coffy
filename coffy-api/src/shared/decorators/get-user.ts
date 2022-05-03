import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from 'src/modules/orders/dto/user.dto';

export const GetUser = createParamDecorator(
  async (_data, context: ExecutionContext): Promise<UserDto> => {
    const req = context.switchToHttp().getRequest();
    return req.user;
  },
);
