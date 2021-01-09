// JavaScript source code

function calc() {
  var Num1 = parseInt(document.querySelector("#Num1").value);

  var Num2 = parseInt(document.querySelector("#Num2").value);

  var Op = document.querySelector("#Operation").value;

  var Calculate;

  if (Op == "add") {
      Calculate = Num1+Num2;
  }
  else if (Op == "min") {
      Calculate = Num1-Num2;
  }
  else if (Op == "div") {
      Calculate = Num1/Num2;
  }
  else if (Op == "mul") {
      Calculate = Num1*Num2;
  }

  document.querySelector("#result").innerHTML =  Calculate;

}
