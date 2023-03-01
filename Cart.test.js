import test from 'node:test';
import { strict as assert } from 'node:assert';
import { Cart } from './Cart.js';

test("The addToCart function can add an item to the cart", () => {
    const cart = new Cart();

    cart.addToCart("panCake");

    assert.deepEqual(cart.items, ["panCake"]);
})

test("The removeFromCart function can remote an items from the cart", () => {
    const cart = new Cart();

    cart.addToCart("badPanCake");

    cart.removeFromCart("badPanCake");

    assert.deepEqual(cart.items, []);

})