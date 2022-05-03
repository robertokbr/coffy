import crypto from 'crypto';

export default class Passcode {
  code = crypto.randomBytes(4).toString('hex');
  createdAt = new Date();
}
