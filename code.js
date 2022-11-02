document.write("<h2>Hello world from JS</h2>");

var x = document.getElementById("myH1");
x.style = "color: red;";

var y = document.getElementById("myH2");
y.innerHTML = "New text from JS";

var z = document.getElementById("txt1");
function myFunction(){
  y.innerHTML = "the text is " + z.value + "<br/>";
}

var a = getElementById("RadioForm")
function myFunction2(){
  var aa = a.RadioForm.rd1.value;
  alert("Hi")
}
