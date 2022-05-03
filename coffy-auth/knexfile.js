import paths from './src/configs/paths.cjs';

export default {
  client: 'sqlite3',
  connection: {
    filename: paths.data,
  },
  migrations: {
    directory: paths.migrations,
  },
  useNullAsDefault: true,
}
