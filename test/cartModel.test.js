
import { after, beforeEach, describe, it } from 'node:test'
import { strict as assert } from 'node:assert'
import { addItem, createCart } from '../src/cartModel.js'
import { db, closeConnection } from '../src/dbConnection.js'

describe('cartModel --integeration tests--', async () => {
  beforeEach(async () => {
    await db('carts').truncate()
    await db('carts_items').truncate()
  })

  after(async () => {
    await closeConnection()
  })

  it('createCart creates a cart for a username', async () => {
    await createCart('Ahmed')
    const result = await db.select('username').from('carts')
    const expected = [{ username: 'Ahmed' }]
    assert.deepEqual(result, expected)
  })

  it('addItem adds an item to a cart', async () => {
    const username = 'Ahmed'
    await createCart(username)
    const { id: cartId } = await db.select().from('carts').where({ username })
    // yes chess
    await addItem(cartId, 'chessCake')
    const result = await db.select('itemName').from('carts_items')
    const expected = [{ itemName: 'chessCake' }]
    assert.deepEqual(result, expected)
  })
})
