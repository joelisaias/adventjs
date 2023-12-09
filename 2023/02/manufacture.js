const assert = require('node:assert');
const { test } = require('node:test');

function manufacture(gifts, materials) {
    return gifts.filter(gift=>
       [...gift].findIndex(letter=>!materials.includes(letter))==-1
    )
  }
  

  test('Test Type', (context) => {
    let gifts = ['tren', 'oso', 'pelota']
    let materials = 'tronesa'
  });
  test("manufacture(['tren', 'oso', 'pelota'], 'tronesa')", (context) => {
    let gifts = ['tren', 'oso', 'pelota']
    let materials = 'tronesa'
    assert.equal(JSON.stringify(manufacture(gifts, materials)),JSON.stringify(["tren", "oso"]));
  });
