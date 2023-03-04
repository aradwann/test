import { db } from './dbConnection.js'

function createCart (username) {
  return db('carts').insert({ username })
}

function addItem (cartId, itemName) {
  return db('carts_items').insert({
    cartId,
    itemName
  })
}

export { createCart, addItem }
