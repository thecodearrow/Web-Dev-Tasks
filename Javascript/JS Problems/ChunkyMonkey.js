/*
Write a function that splits an array (first argument) into groups the length of size (second argument)
 and returns them as a two-dimensional array.

 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
 chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

*/


function chunkArrayInGroups(arr, size) {
 
  var newArr=[];
  var n=Math.ceil(arr.length/size);
  var k=0;
  for(var i=0;i<n;i++){
    var tempArr=[];
    for(var j=0;j<size;j++)
    { if(k<arr.length)
      tempArr.push(arr[k++]);
    }
    newArr[i]=tempArr;
    
  }
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);