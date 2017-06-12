function titleCase(str) {
  str=str.toLowerCase();
  var strArr=str.split(' ');
  for(var i=0;i<strArr.length;i++){

  strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].substr(1);
  }
  str=strArr.join(' ');
  
  return str;
}

titleCase("I'm a little tea pot");
