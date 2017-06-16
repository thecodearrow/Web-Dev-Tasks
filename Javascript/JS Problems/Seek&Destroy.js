/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

*/


function destroyer(arr) {
 
 
  var array=arguments[0];
  var newArr=[];
    var bool=[];
  
  for(var i=0;i<array.length;i++){
    for(var j=1;j<arguments.length;j++)
      {
        if(array[i]==arguments[j]){
          bool[i]=false;
        }
        
          
        }
        
      }
  
  for(i=0;i<array.length;i++){
    
    if(bool[i]!=false)
      newArr.push(array[i]);
  }
     
    
    return newArr;
 
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
