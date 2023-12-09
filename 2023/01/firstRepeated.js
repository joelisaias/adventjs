function findFirstRepeated(gifts) {
    let found=[]
    const index=gifts.map((elm,idx,arr)=>{
      const repeated=arr.findIndex((x,i)=>i!==idx&&elm===x)!=-1
      if(repeated&&found.findIndex(({elm:w})=>w===elm)==-1){
        found=[...found,{elm,idx}]          
      }
      return [elm,idx,arr.findIndex((x,i)=>i!==idx&&elm===x)]
    })
    .filter(
      ([elm,idx,idxr])=>{
      return idxr!==-1
      &&found.find(({elm:w,idx})=>elm===w)?.idx==idx
      }
      )
    .map(([elm,idx,idxr])=>idxr)
    .sort((a,b)=>a-b)
return index.length>0?gifts[index[0]]:-1

}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez
const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5


const firstRepeatedId8 = findFirstRepeated([2, 1, 3, 5, 3, 2])
console.log(firstRepeatedId8) // 3
