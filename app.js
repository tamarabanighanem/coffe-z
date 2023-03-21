let uname = prompt("please enter your name");
let gender = prompt("please enter your Gender");
let age = prompt("please enter your age");
function gen() {
    while (gender != "male" && gender != "female") {
        gender = prompt("please enter your correct Gender");
    }

}
gen();
if (gender == "male") {
    alert("Welcome MR" + " " + uname);

}
else if (gender == "female") {
    alert("Welcome MS" + " " + uname);
}
else {
    alert("Welcome" + " " + uname);

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
console.log(uname + " " + drink);
let arr = [uname, gender, typeOfDrink, drink];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
let divv = document.getElementById('dom');

let div = document.createElement('div');

let text = document.createElement('p');
text.textContent = uname;

let ul = document.createElement('ul');

let li = document.createElement('li');
li.textContent = `Gender: ${gender}`;

let lii = document.createElement('li');
lii.textContent = `Age: ${age}`;

let liii = document.createElement('li');
liii.textContent = `Drink:${drink}`;

ul.appendChild(li);
ul.appendChild(lii);
ul.appendChild(liii);


div.appendChild(text);
div.appendChild(ul);

divv.appendChild(div);

