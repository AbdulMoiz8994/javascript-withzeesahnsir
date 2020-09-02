// // // // var a = ["pizza","Mango","Orange","sandwich","pizza"];
// // // // console.log(a);
// // // // a.splice(1,0,"fries");
// // // // console.log(a);
// // // // a.splice(3,1,"snakes");
// // // // console.log(a);
// // // // var b=a.lastIndexOf("pizza");
// // // // console.log(b);
// // // // // string
// // // var a = "hello abdul moiz";
// // // console.log(a.length);
// // // var b = "hello\"world";
// // // console.log(b);
// // // var c = "hello\\world";
// // // console.log(c);
// // // var d = "hello\nworld";
// // // console.log(d);
// // // var e = "hello\t\tmoiz";
// // // console.log(e);
// // var names = "abdul MOIZ";
// // var updatename = names.toLocaleLowerCase();
// // console.log(names);
// // console.log(updatename);
// // var food = ("Sandwich","piZZa");
// // var input = prompt("write your favourite food");
// // console.log("user input = "+input);
// // if(food.toLocaleLowerCase() === input.toLocaleLowerCase()){
// //     console.log("Match");
// // }
// // else{
// //     console.log("Do Not Match");
// // }
// var a = ("khanzada123 moiz abdul");
// console.log(a);
// var b =a.slice(3);
// console.log(b);
// console.log(a.indexOf("moiz"));
// console.log(a.indexOf("zada"));
// console.log(a.indexOf("bdul"));
// console.log(a.slice(-9,-1));
// var a = "to Be or|not To be";
// var b = a.indexOf("not");
// console.log(b);
// var b = a.lastIndexOf("be");
// console.log(b);
// var b = a.indexOf("be",10);
// console.log(b);
// var c = a.lastIndexOf("to",9);
// console.log(c);
// var d = a.indexOf("n");
// console.log(d);
// var e = a.indexOf("or not");
// console.log(e);
// var f = a.charAt(9);
// console.log(f);
// console.log(a.charAt(1));
// var b = a.replace("to","me");
// console.log(b);
// console.log(a);
// var c=a.replace(/to/gi,"hello");
// console.log(c);
// var d =a.replace(/be/gi,"me");
// console.log(d);
// console.log(a.replace(/To/i,"us"));
// console.log(a.replace("To","us"));
// split
var a = "to,be or|not to,be";

var b = a.split(" ");
console.log(b);
// console.log(b.length);
// console.log(a.split(","));
// console.log(a.split("|"));
var c = a.split("|");
console.log(c);
var d = a.split(",");
console.log(d);
var e = "hello, moizkhanzada";
console.log(e.split(" "));
var f = " helo moiz|khanzada123";
console.log(f.split("|"));
var g = "helomoiz,khanzada123";
console.log(g.split(","))