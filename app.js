let name = prompt("please enter your name");
let gender = prompt("please enter your Gender");
function gen() {
    while (gender != "male" && gender != "female") {
        gender = prompt("please enter your correct Gender");
    }

}
gen();
if (gender == "male") {
    alert("Welcome MR" + " " + name);

}
else if (gender == "female") {
    alert("Welcome MS" + " " + name);
}
else {
    alert("Welcome" + " " + name);

}


let typeOfDrink = " "
if (confirm("Do you want a hot drink☕") == true) {
    typeOfDrink = "hot";
}
else {
    typeOfDrink = "cold";
}
let drink = prompt("what's the name of your drink");
alert("your drink is" + " " + drink);
console.log(name + " " + drink);
let arr = [name, gender, typeOfDrink, drink];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// console.log(`the price is ${drink}`)