//Remove all falsy values from an array.

//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.



function bouncer(arr) {
 arr=arr.filter(function(val){
   if(val!=false || val!=null || val!=0 || val!="" || val!=undefined || val!=NaN)
  return val;
 });
  return arr;
}

bouncer([7, "ate", "", false, 9]);
