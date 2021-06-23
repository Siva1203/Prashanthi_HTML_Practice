document.getElementById("l1").addEventListener("mouseover",display);
function display(){
    document.getElementById("l1").src="lightOn.PNG";
}
document.getElementById("l1").addEventListener("mouseout",display1);
function display1(){
    document.getElementById("l1").src="lightOff.PNG";
}

function callme(){
    document.getElementById("btn").innerHTML="Do not Save";
}

function doNotCallme(){
    document.getElementById("btn").innerHTML="Save";
}