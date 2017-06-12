//Check for Palindromes

function palindrome(str) {
  
  str=str.replace(' ','');
  str=str.toLowerCase().replace(/[^a-z0-9]/g, '');

  
  var splitArr=str.split('');
  var strRev=(splitArr.reverse()).join('');
  
  
  
 if(str==strRev)
  return true;
  else 
    return false;
}



palindrome("A man, a plan, a canal. Panama");