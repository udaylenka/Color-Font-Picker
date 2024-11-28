//Font & color picker JavaScript

//colors for text
var colorPicker = new iro.ColorPicker(".colorPicker", {

  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff" });

var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");

colorPicker.on(["color:init", "color:change"], function (color) {
  values.innerHTML = ["hex: " + color.hexString +" &nbsp / &nbsp " +  "rgb: " + color.rgbString].
  join("<br>");
  hexInput.value = color.hexString;
  let g=document.getElementById("aptr");
  g.style.backgroundColor=hexInput.value;
});

hexInput.addEventListener('change', function () {
  colorPicker.color.hexString = this.value;
});


function apply(){
	let t= document.getElementById("text");
    t.style.color=hexInput.value;
}

function apply1(){
	let t= document.getElementById("text");
	t.style.backgroundColor=hexInput.value;
}

//font styles for text

function fontstyle1(){
    let t= document.getElementById("text");
    t.style.fontFamily="Colonna MT";
}
function fontstyle2(){
    let t= document.getElementById("text");
    t.style.fontFamily="Times New Roman";
}
function fontstyle3(){
    let t= document.getElementById("text");
    t.style.fontFamily="SimSun-ExtB";
}
function fontstyle4(){
    let t= document.getElementById("text");
    t.style.fontFamily="Chiller";
}
function fontstyle5(){
    let t= document.getElementById("text");
    t.style.fontFamily="French Script MT";
}
function fontstyle6(){
    let t= document.getElementById("text");
    t.style.fontFamily="Edwardian Script ITC";
}
function fontstyle7(){
    let t= document.getElementById("text");
    t.style.fontFamily="Calibri";
}
function fontstyle8(){
    let t= document.getElementById("text");
    t.style.fontFamily="Gabriola";
}
function fontstyle9(){
    let t= document.getElementById("text");
    t.style.fontFamily="Ink Free";
}
function fontstyle10(){
    let t= document.getElementById("text");
    t.style.fontFamily="Old English Text MT";
}
function fontstyle11(){
    let t= document.getElementById("text");
    t.style.fontFamily="Lucida Handwriting";
}
function fontstyle12(){
    let t= document.getElementById("text");
    t.style.fontFamily="Agency FB";
}
function fontstyle13(){
    let t= document.getElementById("text");
    t.style.fontFamily="Stencil";
}
function fontstyle14(){
    let t= document.getElementById("text");
    t.style.fontFamily="Papyrus";
}
function fontstyle15(){
    let t= document.getElementById("text");
    t.style.fontFamily="Magneto";
}
function fontstyle16(){
    let t= document.getElementById("text");
    t.style.fontFamily="Gadugi";
}
function fontstyle17(){
    let t= document.getElementById("text");
    t.style.fontFamily="Forte";
}
function fontstyle18(){
    let t= document.getElementById("text");
    t.style.fontFamily="Curlz MT";
}

