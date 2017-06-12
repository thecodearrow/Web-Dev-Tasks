var one=document.getElementById('one');
var two=document.getElementById('two');

two.addEventListener("input",add);

p=document.querySelector('p')



function add(){
var sum=parseFloat(one.value)+ parseFloat(two.value);
p.innerHTML="<strong>The sum is:</strong>" + (sum);
}
