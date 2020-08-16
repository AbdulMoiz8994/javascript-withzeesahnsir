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
var num = parseInt(prompt("Please enter tabel"));
for(var a=2;a<num;a++){
    var result = num%a;
    if(result==0){
        console.log("This number is not prime "+num +" A / "+a);
    }
}