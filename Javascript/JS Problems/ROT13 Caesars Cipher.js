/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



*/


function rot13(str) { 
  var decoded='';
  var ascii;
  var asciiChar;
  for(var i=0;i<str.length;i++)
    {
      ascii=str.charCodeAt(i);
      if(ascii>=65 && ascii<78)
       asciiChar=String.fromCharCode(ascii+13);
      else if(ascii>=78 && ascii<=90)
        asciiChar=String.fromCharCode(ascii-13);
      else
        asciiChar=String.fromCharCode(ascii);
      decoded=decoded+asciiChar;
    }
  
  return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
