let money = 0;
let power = 1;
let tool = "Teeth";

function mow() {
  money += power;
  document.getElementById("money").innerHTML = "Money: " + money
}

// function winner() {}

function upgrade() {
  if (money >= 5 && tool == "Teeth") {
    money -= 5
    power += 4
    tool = "Rusty Scissors"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $25"
  } else if (money >= 25 && tool == "Rusty Scissors") {
    money -= 25
    power += 5
    tool = "Old Timey Mower"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $50"
  } else if (money >= 50 && tool == "Old Timey Mower") {
    money -= 50
    power += 15
    tool = "Battery-Powered Motor"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = "SOLD OUT"
  } else if (tool == "Battery-Powered Motor") {
    alert("You bought everything!")
  } else {
    alert("You are too poor!")
  }
}