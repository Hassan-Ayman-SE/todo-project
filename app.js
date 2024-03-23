'use strict'
let username = prompt("Enter your name:");


let gender = prompt("Enter your gender:");
let age = prompt("Enter your age:");
if(age <= 0){
    alert("Wrong! age is less than or equal to zero");
}

let isConfirmed = confirm("Want to skip the welcome message?");

if(!isConfirmed){
if(gender != 'male' &&  gender != 'female'){
    alert("Welcome ");
}else{

    if(gneder == 'male'){
        alert("Welcome Mr." + username);
    }else{
        alert("Welcome Ms." + username);
    }
}
}