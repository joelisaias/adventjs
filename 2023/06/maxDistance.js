const assert = require('node:assert');
const { test } = require('node:test');

function maxDistance(movements) {
    const mov={'>':1,'<':-1}
    let total=0;
    let comodin=0;
    for(const movement of movements.split('')){
      if(movement==='*'){
        comodin++;
        continue      
      }
      total=total+mov[movement]
    }    
    return Math.abs(total)+comodin
}

test('return type', (context) => {
    assert.equal(typeof maxDistance(">>*<"),'number');
});

test('maxDistance(">>*<")', (context) => {
    assert.equal(maxDistance(">>*<"),2);
});

test('maxDistance("<<<<<")', (context) => {
    assert.equal(maxDistance("<<<<<"),5);
});

test('maxDistance(">***>")', (context) => {
    assert.equal(maxDistance(">***>"),5);
});

test('maxDistance("**********")', (context) => {
    assert.equal(maxDistance("**********"),10);
});

test('maxDistance("<<**>>")', (context) => {
    assert.equal(maxDistance("<<**>>"),2);
});