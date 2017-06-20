/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.



*/


function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i=0;i<arr1.length;i++)
    for(j=0;j<arr2.length;j++)
      {
        if(arr2[j]==arr1[i])
          {
            delete arr2[j];
            delete arr1[i];
          }
        
      }
  
  if(arr1.length>arr2.length)
    var length=arr1.length;
  else
    var length=arr2.length;
  
  for(i=0;i<length;i++)
  {
    
    if(arr1[i]!=null)
      newArr.push(arr1[i]);
    
    if(arr2[i]!=null)
      newArr.push(arr2[i]);
    
    
  }
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
