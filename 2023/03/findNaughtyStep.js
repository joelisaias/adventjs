const assert = require('node:assert');
const { test } = require('node:test');

function findNaughtyStep(original, modified) {
    if(original==='') return modified

    if(original===modified) return ''

    const originalArray=[...original]
    const modifiedArray=[...modified]

    if(original.length>modified.length){
      return originalArray.find((curr,idx)=>modifiedArray[idx]!==curr)
    }else{
      return modifiedArray.find((curr,idx)=>originalArray[idx]!==curr)
    }  
}

  test("findNaughtyStep('abcd', 'abcde')", (context) => {
    const original = 'abcd'
    const modified = 'abcde'
    assert.equal(findNaughtyStep(original, modified),'e')
  });

  test("findNaughtyStep('stepfor', 'stepor')", (context) => {
    const original = 'stepfor'
    const modified = 'stepor'
    assert.equal(findNaughtyStep(original, modified),'f')
  });

  test("findNaughtyStep('abcde', 'abcde')", (context) => {
    const original = 'abcde'
    const modified = 'abcde'
    assert.equal(findNaughtyStep(original, modified),'')
  });

  test("findNaughtyStep('xxxx', 'xxoxx')", (context) => {
    const original = 'xxxx'
    const modified = 'xxoxx'
    assert.equal(findNaughtyStep(original, modified),'o')
  });