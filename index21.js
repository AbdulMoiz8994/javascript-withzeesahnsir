var a = 17;
var b = 20;
console.log(a+b);
var a = 234;
var b = 300;
var c = a++ - --a + ++b - b--;
console.log(a);
console.log(b);
console.log(c);
var a = 30;
var c =30;
// var d = a > c && a<20 && a != c && a ==b;
// console.log(d);
// var d = a > c || a<20 || a == c || a ===b;
// console.log(d);
// var a = "20";
// var b = a==20;
// console.log(b);
// var number = 20;
// for(var a = 5;a<=15;a++){
//     console.log(number+" x "+a+" = "+(number*a));
// }
// var a = 10;
// for(var a=10;a<=20;a++){
//     console.log(a);
// }
// var b = 50;
// for(var b=50;b>30;b--){
//     if(b==40){
//         break;
//     }
//     console.log(b);
// }
// var b = 50;
// for(var b=50;b>=30;b--){
//     if(b==40){
//         continue;
//     }
//     console.log(b);
// }
// var number=parseInt(prompt("Please enter number"));
//     for(var a=1;a<15;a++){
//         if(a==10){
//         break;
//     }
//     console.log(number+" x "+a+" = "+(number*a));
// }
// var number=parseInt(prompt("Please enter number"));
//     for(var a=1;a<15;a++){
//         if(a==10){
//         continue;
//     }
//     console.log(number+" x "+a+" = "+(number*a));
// }
// var num = parseInt(prompt("Please enter number"));
// var isprime = true;
// for(var a=2;a<num;a++){
//     var result = num % a;
//     if(result == 0){
//         console.log("This number is not prime "+num +" A / "+a);
//         isprime = false
//         break;
//     }
//     // else{
//     //     console.log("This is the prime nub "+num +" A /"+a);
//     // }
// }
// if(isprime == true){
//     console.log("this is  prime nub "+num);
// }
// var table =parseInt(prompt("what is your table"));
// for(var a=1;a<=10;a++){
//     console.log(table+" x "+a+" = "+(table*a));
// }
// Array Example

// var food = ["pizza","Burger","Sandwich"];
// // var food2 =  new Array["pizza","Burger","Sandwich"];
// var a =food[0];
// alert(a);
// var b = food[1]
// alert(b);
// alert(food[2]);
// var arr1 = [23,45,56,12,56];
// var arr2 = [true,false,true,false,333];
// var arr3 = [1,"abdul moiz",1111];
// const arr4 = [{name: "Abdul",name: "Moiz"}]
// console.log(arr1[2]);
// console.log(arr2[4]);
// console.log(arr3[1]);
// console.log(arr4[0]);
// var foods = ["pizza","Burger","Sandwitch"];
// alert(foods);
// console.log(foods);
// console.log(foods[3]);
// console.log(foods[4]);
// we  will update things
var foods = [];
console.log(foods);
foods [0] = "pizza";
// foods [1] = "burger";
// foods [2] = "sandwitch"
foods [1] = "sandwitch"
foods [2] = "frenchfries"
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods);
foods[1] = "burger";
console.log(foods);
console.log(foods[1]);
// foods [7] = "PIZZA";
// console.log(foods);