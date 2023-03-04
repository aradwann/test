import knex from 'knex'
import config from '../knexfile.js'

const db = knex(config.development)

async function closeConnection () {
  await db.destroy()
}

export { db, closeConnection }
