import crypto from 'crypto';

export default class User {
  id = crypto.randomBytes(4).toString('hex');
  name;
  createdAt = new Date();

  constructor(name) {
    this.name = name;
  }
}
