//Connecting btn to function
document.getElementById("btn").addEventListener("click", btnclicked);
//function
function btnclicked() {
  //Making variables
  let num1 = +document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value.toLowerCase();
  let family = document.getElementById("num3").value.toLowerCase();
  let num4 = document.getElementById("num4").value.toLowerCase();
  let result = 0;

  // if/else statements (checking answers)
  if (num1 === 10) {
    result++;
    document.getElementById("out1").innerHTML = "CORRECT!";
    out1.style.color = "Green";
  } else {
    document.getElementById("out1").innerHTML = "INCORRECT!";
    out1.style.color = "red";
  }

  if (num2 === "edmonton") {
    result++;
    document.getElementById("out2").innerHTML = "CORRECT!";
    out2.style.color = "Green";
  } else {
    document.getElementById("out2").innerHTML = "INCORRECT!";
    out2.style.color = "red";
  }
  if (
    family === "mother" ||
    family === "mama" ||
    family === "mom" ||
    family === "myself"
  ) {
    result++;
    document.getElementById("out3").innerHTML = "CORRECT!";
    out3.style.color = "Green";
  } else {
    document.getElementById("out3").innerHTML = "INCORRECT!";
    out3.style.color = "red";
  }

  if (num4 === "june") {
    result++;
    document.getElementById("out4").innerHTML = "CORRECT!";
    out4.style.color = "Green";
  } else {
    document.getElementById("out4").innerHTML = "INCORRECT!";
    out4.style.color = "red";
  }
  //calculating final score
  let results = (result / 4) * 100;
  document.getElementById("results").innerHTML = results + "%";
  if (results === 25) {
    document.getElementById("comment").innerHTML =
      "Com'on your better then this. Try AGAIN! ";
  } else if (results === 50) {
    document.getElementById("comment").innerHTML =
      " You only know half of me? ";
  } else if (results === 75) {
    document.getElementById("comment").innerHTML = "Getting there..... ";
  } else if (results === 100) {
    document.getElementById("comment").innerHTML =
      " Finally someone that gets me!";
  } else {
    document.getElementById("comment").innerHTML = "You fauliure";
  }
}
