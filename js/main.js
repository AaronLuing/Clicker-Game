let money = 0;
let power = 1;
let tool = "Teeth";

function mow() {
  money += power;
  document.getElementById("money").innerHTML = "Money: " + money
}

function upgrade() {
  if (money >= 5 && tool == "Teeth") {
    money - 5
    power += 4
    tool = "Rusty Scissors"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("upgrade").innerHTML = "SOLD OUT"
  } else if (tool == "Rusty Scissors") {
    alert("You bought everything!")
  } else {
    alert("You are too poor!")
  }
}