
function isOccured(string,char){
    if(string.length===0){
        return false;
    }else if(string.charAt(0)===char){
   return true;  
}else{
    return 0+isOccured(string.substring(1),char);
}
}
console.log("check the occurance of the given character: ",isOccured('apple','m'));
let arr=['apple','grape','orange'];

function findOccuranceInArray(array,index,element){
    if(array.length===0 ||index<0){
        return false;
    }else if(array[index]===element){
        return true;
    }else{
        return findOccuranceInArray(array,index-1,element)
    }
}

console.log("find occurance of elements in the array: ",findOccuranceInArray(arr,arr.length-1,'apple'));


// function findFromLastIndex(array,string){
// if(array.length===0){
//     return 0;
// }else if(array)
// }
function findMin(arr, index = 0, min = Infinity) {
    if (index === arr.length) {
      return min;
    } else {
      min = Math.min(min, arr[index]);
      return findMin(arr, index + 1, min);
    }
  }
  

  function reverseString(str){
   if(str===''){
    return '';
   }else{
    return reverseString(str.substring(1))+str.charAt(0);
   }
  }

  console.log(reverseString('wengel'));