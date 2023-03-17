let name = prompt("please enter your name");
let gender = prompt("please enter your Gender");
if (gender == "male") {
    alert("Welcome MR" + " " + name);

}
else if (gender == "femal") {
    alert("Welcome MS" + " " + name);
}
else {
    alert("Welcome" + " " + name);

}
confirm("Do you want a hot drink?");
confirm("Do you want a cold drink?");
let drink = prompt("what's the name of your drink");
alert("your drink is" + " " + drink);
console.log(name + " " + drink);