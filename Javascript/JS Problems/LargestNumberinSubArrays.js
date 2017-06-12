function largestOfFour(arr) {


  var newarr=[];
  
  for(var i=0;i<arr.length;i++){
      var large=0;
    
    for(var j=0;j<arr[i].length;j++)
    {
      
     if(large<arr[i][j])
       large=arr[i][j];
      
}
    newarr[i]=(large);
 
}
   return newarr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
