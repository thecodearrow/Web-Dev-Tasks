/*
Convert the given number into a roman numeral.
*/



function convertToRoman(num) {
  //Create an Array of Objects i.e. key-value pair
  
  var RomanNumList=[
  {key:1000,
   value:'M'
 },
 {key:900,
   value:'CM'
 },
 {key:500,
   value:'D'
 },
 {key:400,
   value:'CD'
 },
 {key:100,
   value:'C'
 },
 {key:90,
   value:'XC'
 },
 {key:50,
   value:'L'
 },
 {key:40,
   value:'XL' 
 },
 {key:10,
   value:'X'
   
 },
 {key:9,
   value:'IX'
   
 },
 {key:5,
   value:'V'
   
 },
 {key:4,
   value:'IV'
   
 },
 {key:1,
   value:'I'
   
 }
 ];
 
 var roman='';
 for(var i=0;i<RomanNumList.length;i++){
  
   while(num>=RomanNumList[i].key){
     roman=roman+RomanNumList[i].value;
     num=num-RomanNumList[i].key;
     
     
   }
 }
 
 return roman;
 
}

convertToRoman(36);
