document.getElementById("img").addEventListener("mouseover",display);
function display(){
    document.getElementById("event").innerHTML="Mouseover is active.";
}
document.getElementById("img").addEventListener("mouseout",display1);
function display1(){
    document.getElementById("event").innerHTML="Mouseout is active.";
}
document.getElementById("img").addEventListener("click",display2);
function display2(){
    document.getElementById("event").innerHTML="clicked .";
}
document.getElementById("img").addEventListener("rightclick",display3);
function display3(){
    
} 
document.getElementById("img").oncontextmenu = function() 
{
    document.getElementById("event").innerHTML="rightclicked.";
  }