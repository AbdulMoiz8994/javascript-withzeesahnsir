// // // // // // // var a = ["moiz","malik","rafay","basit","rizwan","shahzaib","rafay"];
// // // // // // // console.log(a);
// // // // // // // a.splice(4,0,"Abdullah");
// // // // // // // console.log(a);
// // // // // // // a.splice(5,2,"Arsalan");
// // // // // // // console.log(a);
// // // // // // // var b = a.indexOf("rafay");
// // // // // // // console.log(b);
// // // // // // // var c = a.lastIndexOf("rafay");
// // // // // // // console.log(c);
// // // // // // // var d =a.slice(1,4);
// // // // // // // console.log(d);
// // // // // // // // string
// // // // // // var a = "abdul\"moiz";
// // // // // // console.log(a);
// // // // // // var b = (a.length);
// // // // // // console.log(b);
// // // // // // var c ="abdul\\moiz";
// // // // // // console.log(c);
// // // // // // var d = "\t\tabdul moiz";
// // // // // // console.log(d);
// // // // // // var e = "\nabdul\nmoiz";
// // // // // // console.log(e);
// // // // // // var f = ("abdul moiz  Attari khanzada");
// // // // // // console.log(f.toLocaleUpperCase());
// // // // // // var foods = ("sANDWICH");
// // // // // // var input =(prompt("please select one"));
// // // // // // console.log("User Input = "+input);
// // // // // // if(foods.toLocaleLowerCase() === input.toLocaleLowerCase()){
// // // // // //     console.log("Match");
// // // // // // }
// // // // // // else{
// // // // // //     console.log("Do Not Match");
// // // // // // }

// // // // // // var a = foods.slice(1,7);
// // // // // // console.log(a);
// // // // // var a = "abdul moiz khanzada attari Moiz";
// // // // // console.log(a.indexOf("zada attari"));
// // // // // var b = a.slice(-26,-1);
// // // // // console.log(b);
// // // // // var c = a.charAt(11);
// // // // // console.log(c);
// // // // // var c = a.replace("moiz","rafay");
// // // // // console.log(c);
// // // // // var d = a.replace(/moiz/i,"rafay");
// // // // // console.log(d);
// // // // // var e = a.replace(/moiz/ig,"malik");
// // // // // console.log(e);
// // // // // // split
// // // // a = "abdulmoiz, khanzada|malik rafay";
// // // // var b = a.split(",");
// // // // console.log(b);
// // // // var c = a.split("|");
// // // // console.log(c);
// // // // var d = a.split(" ");
// // // // console.log(d);
// // // // // math
// // // var average = (15 + 23 + 30)/3;
// // // console.log(average);
// // // var totalAverage = Math.round(average);
// // // console.log(totalAverage);
// // // average = (40+57-32)/2;
// // // console.log(average);
// // // console.log(Math.round(average));
// // // var a = Math.round(4.7);
// // // console.log(a);
// // // var b = Math.round(4.3);
// // // console.log(b);
// // // var c = Math.round(4.5);
// // // console.log(c);
// // // var d = Math.round(-4.1);
// // // console.log(d);
// // // var e = Math.round(-4.7);
// // // console.log(e);
// // // var f = Math.round(-4.6);
// // // console.log(f);
// // var a = Math.ceil(4.7);
// // console.log(a);
// // var a = Math.ceil(4.1);
// // console.log(a);
// // var a = Math.ceil(4.5);
// // console.log(a);
// // var a = Math.ceil(4.9);
// // console.log(a);
// // var a = Math.ceil(-4.9);
// // console.log(a);
// // var a = Math.ceil(-3.3);
// // console.log(a);
// // var a = Math.ceil(-2.5);
// // console.log(a);
// var a = Math.floor(4.9);
// console.log(a);
// var a = Math.floor(4.7);
// console.log(a);
// var a = Math.floor(3.5);
// console.log(a);
// var a = Math.floor(2.2);
// console.log(a);
// var a = Math.floor(-4.9);
// console.log(a);
// var a = Math.ceil(-4.9);
// console.log(a);
// var num = Math.random();
// console.log(num);
// var num1 = num*6;
// console.log(num1);
// var num2 = num1+1;
// console.log(num2);
// var num3 = Math.floor(num2);
// console.log(num3);
// tofixed
var num = (49+56-71)/3;
console.log(num);
console.log(num.toFixed(3));
var num1 = (23/2)