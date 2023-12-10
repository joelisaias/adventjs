const assert = require('node:assert');
const { test } = require('node:test');

function findFirstRepeated(gifts) {
  const uniqueGift=[];
  for(let gift of gifts){
    if(uniqueGift.includes(gift)) 
      return gift
    uniqueGift.push(gift)
  }
  return -1

}

test("return type", (context) => {
  const giftIds = []
  assert.equal(typeof findFirstRepeated(giftIds),'number');
});

test("findFirstRepeated([2, 1, 3, 5, 3, 2])", (context) => {
  const giftIds = [2, 1, 3, 5, 3, 2]
  assert.equal(findFirstRepeated(giftIds),3);
});

test("findFirstRepeated([1, 2, 3, 4])", (context) => {
  const giftIds = [1, 2, 3, 4]
  assert.equal(findFirstRepeated(giftIds),-1);
});

test("findFirstRepeated([5, 1, 5, 1])", (context) => {
  const giftIds = [5, 1, 5, 1]
  assert.equal(findFirstRepeated(giftIds),5);
});
test("findFirstRepeated([2, 1, 3, 5, 3, 2])", (context) => {
  const giftIds = [2, 1, 3, 5, 3, 2]
  assert.equal(findFirstRepeated(giftIds),3);
});