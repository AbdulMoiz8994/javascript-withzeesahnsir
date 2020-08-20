// // var a= 12;
// // var b=30;
// // var c=a++ + a-- - --b + 10;
// // console.log(c);
// // var fullName = "Abdul moiz";
// // var fatherName = "Zafar ali";
// // var nationality = "Pakistani";
// // var age = 18;
// // isYouPaidTheFee = true;
// // state = "Sindh";
// // console.log(`
// //   Full Name : ${fullName}
// //   Father Name : ${fatherName}
// //   Nationality : ${nationality}
// //   Age : ${age}
// //   IS Fees Paid : ${isYouPaidTheFee}
// //   State : ${state}
// // `)
// // var sellingprice = 199;
// // var lsitingprice = 399;
// // var discountprice = (lsitingprice -sellingprice)/lsitingprice *100;
// // console.log(discountprice);
// // totaldiscountprice = Math.round(discountprice)
// // console.log(totaldiscountprice+"% off");
// // var a =10;
// // var b=20;
// // var c=30;
// // var d = (a+b)/c *100;
// // console.log(d);
// // var a =10;
// // var b=20;
// // var c=30;
// // var d = (a-b)-c *100;
// // console.log(d);
// // var a =10;
// // var b=20;
// // var c=30;
// // var d = (a+b)/c + 100;
// // console.log(d);
// // var a =40;
// // var b=20;
// // var c = --a + ++a - b-- ;
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // var a ="56";
// // console.log(a==56);
// // console.log(a===56);
// // console.log(a!=56);
// // console.log(a>56);
// // console.log(a<56);
// // console.log(a>=56);
// // console.log(a<=56);
// var age = prompt("what is your age");
// console.log(age);
// var a = "hello "+ 2+3;
// console.log(a);
// var b = 2+3+" hello"
// console.log(b);
// var c="6" +2;
// console.log(c);
// var a = prompt("waht is your score");
// var num = 5;
// var sum = parseInt(a) + num;
// console.log(sum);
// var a = prompt("waht is your score");
// var num = 5;
// var sum = parseFloat(a) + num;
// console.log(sum);
// var a = prompt("waht is your score");
// var num = 5;
// var sum = Number(a) + num;
// console.log(sum);
// var a =10;
// var b="15.784";
// var c = a+parseInt(b);
// console.log(c);
// var a =10;
// var b="15.784";
// var c = a+parseFloat(b);
// console.log(c);
// var a =10;
// var b="15";
// var c = a+b;
// console.log(c);
// var a =10;
// var b =45;
// var c= a <b&& b<50;
// console.log(c);
// var a =10;
// var b =45;
// var c= a<b && b>50;
// console.log(c);
// var a =10;
// var b =45;
// var c= a >b || b>50;
// console.log(c);
// var a =10;
// var b =45;
// var c= !!(a <b&& b<50);
// console.log(c);
// var a =60;
// var b = a>100;
// var c= !b;
// var d= !!(b);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// var score =Number(prompt("what is your score"));
// if(score>=80 && score<=99){
//     console.log("Grade A1")
// }
// else if(score>=70 && score<=79.99){
//     console.log("Grade A")
// }
// else if(score>=60 && score<=69.99){
//     console.log("Grade B")
// }
// else if(score>=55 && score<=59.99){
//     console.log("Grade c")
// }
// else if(score>=40 && score<=49.99){
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }
// var a= 23
// var a = "cat" && 23;
// console.log(a);
// var b = 0 || null;
// console.log(b);
// var c = [] || 23;
// console.log(c);
// for(var a=1;a<10;a++){
//     console.log(a)
// }
// var num =20
// for(var a=1;a<10;a++){
//     if(a==11){
//         break;
//     }
//     console.log(a);
// }
// var num =9
// for(var a=20;a>num;a--){
//     if(a==11){
//         continue;
//     }
//     console.log(a);
// }
var table =Number(prompt("PLease Write your Favourite Table"));
for(var a=1;a<=10;a++){
    console.log(table+" x "+a+" = "+(table*a));
}