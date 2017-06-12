var list=document.getElementById("todolist");
var items=list.querySelectorAll("li");
var inputs=list.querySelectorAll("input");

for(var i=0;i<items.length;i++)
{  items[i].addEventListener("click",edit_list);
   inputs[i].addEventListener("blur",update_list)
    inputs[i].addEventListener("keypress",update_list1)
}

function edit_list()
{
	this.className="edit";
	var input=this.querySelector("input");
	input.focus();
	input.setSelectionRange(0,input.value.length);
}

function update_list()
{
	
	this.previousElementSibling.innerHTML=this.value;
	this.parentElement.className="";
}

function update_list1(event1)
{  
	this.previousElementSibling.innerHTML=this.value;
	if(event1.which==13)
    { 
    	this.parentElement.className="";

    }
}