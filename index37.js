// // // // // // // // var a = 7;
// // // // // // // // function sum(){
// // // // // // // //   var b = 6;
// // // // // // // //   a = b +10;
// // // // // // // //   console.log(a);
// // // // // // // // }
// // // // // // // // console.log(a);
// // // // // // // // sum(console.log(a));
// // // // // // // var a =10;
// // // // // // // function sum(){
// // // // // // //     var b= 10;
// // // // // // //     var c = a+b;
// // // // // // //     console.log(c);
// // // // // // // }
// // // // // // // sum();
// // // // // // // console.log(a);
// // // // // // a =10;
// // // // // // function num(){
// // // // // //     var a =20;
// // // // // //     a =40+a;
// // // // // // }
// // // // // // num();
// // // // // // console.log(a);
// // // // // var a = 8;
// // // // // function sum(){
// // // // //     var b =10;
// // // // //     var a =a+5;
// // // // //     console.log(b);
// // // // //     console.log(a);
// // // // // }
// // // // // sum();
// // // // // console.log(a);
// // // // a =10;
// // // // function num(){
// // // //     b =20;
// // // //     var a =b+5;
// // // //     console.log(a);
// // // //     console.log(b);
// // // // }
// // // // // console.log(b)
// // // // num();
// // // // console.log(b);
// // // // console.log(a);
// // // var sum = function(a){return a*a ; };
// // // var b =sum(parseInt(prompt("please type number")));
// // // console.log(b);
// // var num = function(a,b,c){
// //     return a+b-c;
// // };
// // var a =num(2,9,3);
// // console.log(a);
// function multiply(num1,num2,num3){
//     return num1*num3+num2
// }
// function sum(a,b,c){
//     return multiply(a,b,c)
// }
// var d = sum(20,10,10);
// console.log(d);
function multiply(num1,num2){
    return num1*num2;
}
function div(a,b){
    return a/b;
}
var a=div(multiply(10,20),5);
console.log(a);

