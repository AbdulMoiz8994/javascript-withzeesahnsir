// var a = 5;
// var b = prompt("what is your age?")
// var c = a + Number(b);
// console.log(c);
// var a = 5;
// var b = prompt("what is your age?")
// var c = a + parseInt(b);
// console.log(c);
// var a = 5;
// var b = prompt("what is your age?")
// var c = a + parseFloat(b);
// console.log(c);
// var a = 10;
// var b = (a < 13 && a < 15);
// console.log(b);
// var a = 5;
// var b = 8;
// var c = a < 8 && b > a && a === 4;
// console.log(c); 
// var a  = 12;
// console.log(a == 15);
// console.log(a === 12);
// console.log(a != 12);
// console.log(a > 12);
// console.log(a <12);
// console.log(a >= 12);
// console.log(a <= 12);
// var a = 40;
// var b = 20;
// var c = a < 7 || a > 20;
// console.log(c);
// console.log("A = "+a);
// console.log("B = "+b);
// console.log("C = "+c);
// var a = 7;
// var b = 8;
// var c = a > 100;
// var d = !c;
// var e = !!c;
// console.log(d);
// console.log(e);
// var a = 70;
// var b =!(a < 80 || a > 50);
// console.log(b);
// var b =!!(a < 80 || a > 50);
// console.log(b);
// var score = "60";
// var a = score > 50 && score < 70 && score === 60;
// console.log(a);
// var c = !true;
// console.log(c);
// var d = !!true;
// console.log(d);
// new
// var Grade = 50;
// if (Grade < 60){
//     console.log("Pass "+Grade);
//     // console.log("Pass "+Grade);
// }
// else{
//     console.log("Fail");
// }
// console.log("pass");
// var score = prompt("What is your score");
// score = parseInt(score)
// if (score >= 80){
//     console.log("Grade A");
// }
// else if (score >= 70){
//     console.log("Grade B");
// }
// else if (score >= 60){
//     console.log("Grade C");
// }
// else{
//     console.log("Failed");
// }
// var age = prompt("what is your age?");
// if (age < 60){
//     alert("Entry");
// }
// else{
//     alert("Not Allow");
// }
// nested if
var score = prompt("what is your score");
score = parseInt(score);
if(score >= 80){
    console.log("Grade A");
    if(score > 90){
        console.log("Reward $100");
    }
    else if(score >= 85){
       console.log("Reward $50");
    }
    else{
        console.log("Reward $20");
    }
}
else{
    console.log("failed");
}