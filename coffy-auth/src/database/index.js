import knex from 'knex';
import knexfile from '../../knexfile.js';

export const connection = knex(knexfile);
