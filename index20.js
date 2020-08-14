var name = "abdul moiz";
var age = 34;
var country = "Pakistan";
var isFeePaid = true;
console.log(`
  Full Name = ${name}
  Age = ${34}
  Country = ${country}
  IS Fee Paid = ${isFeePaid}
`)  
// var a = 10;
// var b =12;
// var c= a && b;
// console.log(c);
// var a = "" || 0 || "heloo";
// console.log(a);
// var b = [] && {};
// console.log(b);
// var c = null || undefined;
// console.log(c);
// var d = true && {};
// console.log(d);
// var a = 10;
// for(var a=10;a>0;a--){
//     console.log(a);
// }
// for(var a=12;a<=20;a++){
//    console.log(a);
// }
// var number = parseInt(prompt("Please eneter number"))
// for(var a=1;a<=10;a++){
//     console.log(number+" x "+a+" = "+(number*a));
// }
// var score = parseInt(prompt("Please enter your score"));
// for(var score=70;score<=80;score++){
//     if(score=80){
//     break;
// }
// console.log("Grade A "+score);
// }
// var number = parseInt(prompt("what is your number"));
// for(var a=1;a<15;a++){
//     if(a==13){
//         break;
//     }
//     console.log(number+" x "+a+" = "+(number*a));
// }
// var number = parseInt(prompt("what is your number"));
// for(var a=1;a<15;a++){
//     if(a==10){
//         continue;
//     }
//     console.log(number+" x "+a+" = "+(number*a));
// }
// busniess logic of prime number
var num = parseInt(prompt("what is the value"));
var isprime =true;
for(var a=2;a<num;a++){
    var result= num%a;
    if(result==0){
        console.log("Number is not Prime  = "+num+" A "+a );
        isprime = false;
        continue;
    }
//     else{
//         console.log("Number is Prime"+num+" A "+a);
//     }
}
if(isprime){
    console.log("Number is prime "+num+" A "+a)
}

// var a = "x"
// var b = "x x"
// var c = "x x x"
// var d = "x x x x"
// var e = "x x x x x"
// console.log(`
//   ${a};
//   ${b};
//   ${c};
//   ${d};
//   ${e};
// `)
