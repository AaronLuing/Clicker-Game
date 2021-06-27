let money = 0;
let power = 1;
let tool = "Teeth";
let sold = 0;
let victory = "You have bought all the upgrades!  There is nothing left to do but mow and collect cash.  Congratulations!"

function mow() {
  money += power;
  document.getElementById("money").innerHTML = "Money: " + money
}

function winner() {
  if (sold == 1) {
    alert(victory)
  } else {
    return
  }
}

function upgrade() {
  if (money >= 5 && tool == "Teeth") {
    money -= 5
    power += 4
    tool = "Rusty Scissors"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $25"
    winner()
  } else if (money >= 25 && tool == "Rusty Scissors") {
    money -= 25
    power += 5
    tool = "Old Timey Mower"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $50"
    winner()
  } else if (money >= 50 && tool == "Old Timey Mower") {
    money -= 50
    power += 15
    tool = "Battery-Powered Motor"
    sold += 1
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("upgrade").innerHTML = ""
    winner()
  } else if (tool == "Battery-Powered Motor") {
    alert("You bought everything!")
  } else {
    alert("You are too poor!")
  }
}