
let i = 1;
let input = document.getElementById("input"); 
let output = document.getElementById("output");
    

function Add(){
 
    output.innerHTML += "<br>" +i + ". " + input.value; 
    i++; 
}

function del(){
    output.innerHTML = "";
    i=1
}

function Add_emoji(parametr){
    output.innerHTML += "" + parametr;
}