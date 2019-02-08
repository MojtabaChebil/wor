function changefond()
{
var a=document.getElementById("textfond");
var z=a.options[a.selectedIndex].value;
document.getElementById("texta").style.fontfamily=z;

}
function changesize()
{
var e=document.getElementById("textsize");
var r=e.options[e.selectedIndex].value;
var x=document.getElementById("texta").style.fontsize=r;

}


function myi() {
  var  el1 = document.getElementById("myP");
  el1.classList.toggle("sol2");
}

function myg1() {
   var element= document.getElementById("myP");
   element.classList.toggle("sol1");
}
function myu() {
    var z=document.getElementById("myP");
    z.classList.toggle("sol");
}
function myv() {
    var listValue = document.getElementById("textarea").value;
    document.getElementById("myP").style.fontFamily = listValue;
}
function changesize(){
	var val =document.getElementById("textsize").value;
	document.getElementById("myP").style.fontSize= val;
}
function changecolor(){
	var val1=document.getElementById("cc").value;
	document.getElementById("myP").style.color= val1 ;
}
function myc() {
    document.getElementById("myP").style.textAlign = "center";
}
function myd() {
    document.getElementById("myP").style.textAlign = "right";
}
function myg() {
    document.getElementById("myP").style.textAlign = "left";
}
var x = document.getElementById("myAudio"); 

function playAudio() {
    x.play(); 

}
function pauseAudio() { 
    x.pause(); 
} 
