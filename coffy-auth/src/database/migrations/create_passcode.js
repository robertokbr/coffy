import { connection } from "../index.js";

/**
 * @param {typeof connection} knex
 */
export async function up (knex) {
  return knex.schema.createTable('passcodes', (table) => {
    table.string('code').unique().notNullable();
    table.timestamp('createdAt').notNullable();
  });
}

/**
 *
 * @param {typeof connection} knex
 */
export async function down (knex) {
  return knex.schema.dropTable('passcodes');
}
