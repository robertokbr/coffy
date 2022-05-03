import { connection } from "../index.js";

/**
 * @param {typeof connection} knex
 */
export async function up (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').unique().notNullable();
    table.timestamp('name').notNullable();
    table.timestamp('createdAt').notNullable();
  });
}

/**
 *
 * @param {typeof connection} knex
 */
export async function down (knex) {
  return knex.schema.dropTable('users');
}
