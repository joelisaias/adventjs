const assert = require('node:assert');
const { test } = require('node:test');

function cyberReindeer(road, time) {
    const result=[]
    let index=0;
    let current='';
    let past='';
    for(let currentTime=1;currentTime<=time;currentTime++){
      past=current
      if(currentTime===6){
        road=road.replaceAll('|','*')
      }
      if(currentTime===1){
        result.push(road);
        index++
        continue
      }
      current=road[index];
      if(current==='|'){
        result.push(road);
        continue
      }
      const replacement=past!=='*'?'.':past
      road=road.slice(0, index) + 'S' + road.slice(index + 1);
      road=road.slice(0, index-1) + replacement + road.slice(index);    
      result.push(road);
      index++;
    }
  
      return result
  }

  function replaceAt(current,value,index){
    const pre=current.slice(0, index) ;
    const post=current.slice(index + 1);
    return pre+value+post;

  }




  
  test("cyberReindeer('S..|...|..', 10)", (context) => {
    const giftIds = [2, 1, 3, 5, 3, 2]
    assert.deepEqual(cyberReindeer('S..|...|..', 10)
    ,
    [
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S.."
    ]
    );
  });
  