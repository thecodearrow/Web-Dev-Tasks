
function findLongestWord(str) {
  
  
  var strArray=str.split(" ");
  
  var max_length=0;
  
  for(var i=0;i<strArray.length;i++)
    {
      if(max_length<strArray[i].length)
        max_length=strArray[i].length;
      
      
    }
  return max_length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
