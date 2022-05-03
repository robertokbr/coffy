const path = require('path');

module.exports = {
  proto: path.resolve(
    __dirname,
    '..',
    '..',
    'proto',
    'github.com',
    'robertokbr',
    'coffy-auth',
    'v1',
  ),
  data: path.resolve(
    __dirname,
    '..',
    '..',
    'data',
    'db.sqlite',
  ),
  migrations: path.resolve(
    __dirname,
    '..',
    'database',
    'migrations'
  ),
}
