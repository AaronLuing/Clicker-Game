// here I declare my variables
let money = 0;
let power = 1;
let tool = "Teeth";
let sold = 0;
let victory = "You have bought all the upgrades!  There is nothing left to do but mow and collect cash.  Congratulations!"
// I set a function that will increase the money variable based on the current set power.
// This function also updates the html to display the current variable value
function mow() {
  money += power;
  document.getElementById("money").innerHTML = "Money: $" + money
}
// the following function checks the sold variable to determine if victory is achieved
function winner() {
  if (sold == 1) {
    alert(victory)
  } else {
    return
  }
}
// This function, when run, will remove the selected html element (the upgrade button) from the DOM.
function soldOut() {
  const button2 = document.getElementById("upgrade");
  button2.remove()
}
// This function will upgrade the tool & power accordingly based upon current money.
// Each Else-If adds another step in the upgrade chain, until the hardcoded SOLD OUT is achieved
function upgrade() {
  if (money >= 5 && tool == "Teeth") {
    money -= 5
    power += 4
    tool = "Rusty Scissors"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: $" + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $25"
    winner()
  } else if (money >= 25 && tool == "Rusty Scissors") {
    money -= 25
    power += 5
    tool = "Old Timey Mower"
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: $" + money
    document.getElementById("upgrade").innerHTML = "Upgrade Tool: $50"
    winner()
  } else if (money >= 50 && tool == "Old Timey Mower") {
    money -= 50
    power += 15
    tool = "Battery-Powered Motor"
    sold += 1
    document.getElementById("tool").innerHTML = "Tool: " + tool
    document.getElementById("money").innerHTML = "Money: $" + money
    soldOut()
    winner()
  } else if (tool == "Battery-Powered Motor") {
    alert("You bought everything!")
  } else {
    alert("You are too poor!")
  }
}