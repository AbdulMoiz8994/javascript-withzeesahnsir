// var a = 50;
// var b = prompt("what is your age");
// var c = parseInt(b);
// console.log(a + c);
// var a = 50;
// var b = prompt("what is your age");
// var c = parseFloat(b);
// console.log(a / c);
// var a = 50;
// var b = prompt("what is your age");
// var c = Number(b);
// console.log(a + c);
// var a= "7";
// var b;
// console.log(a==7);
// console.log(a===7);
// console.log(a!=7);
// console.log(a>7);
// console.log(a<7);
// console.log(a>=7);
// console.log(a<=7);
// console.log(typeof a);
// console.log(typeof b);
// var a = 60;
// var b = a <40 || a<100;
// console.log(b);
// var a = 50;
// var b = 39;
// console.log(a<b && b>a || b>a);
var a = 10;
var b =11;
var c = a>b || a<b || a===b;
console.log(c);  
var age = prompt("what is your age");
age = Number(age);
if(age >=50 && age <=80){
    alert("Not Allow");
}
    // if (age  >80){
    //     console.log("Say Sorry");
    //     alert("Say Sorry");
    // }
else if(age <= 18){
    alert("Allowed but Some restrictions");
}
else if(age >18 && age <50){
    console.log("Allow Fully");
    alert("Allow Fully");
    if(age >18 && age <50){
        alert("Thank you for Shopping");
    }
}
    else{
        alert("Share with their Friends");
        alert("Sorry");
    }
// else{
//     alert("Error");
// }