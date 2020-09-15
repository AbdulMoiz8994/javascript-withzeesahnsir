// // // var name = "abdul moiz";
// // // console.log(`
// // //     Name = ${name}
// // // `)
// // function name(){
// //     console.log("heloo world");
// // }
// // name();
// // function multipy(num1,num2){
// //     var num3 = num1*num2;
// //     console.log(num3)
// // }
// // console.log("Before Invoking");
// // console.log("NOw This will go on calling");
// // multipy(5,10);
// // multipy(3,56);
// // multipy(5,45,67);
// // // for(var a=0;a<10;a++){
// // //     console.log(a);
// // // }
// // function showMessage(name){
// //     console.log("hello "+name)
// // }
// // showMessage("Abdul moiz");
// // showMessage("zafar ali");
// // showMessage(56);
// // showMessage(true);
// // showMessage(45,23);
// // function sum(a,b){
// //     console.log(a+b)
// // }
// // sum(10,5);
// // sum(15,100);
// // function findGrade(score){
// //     if(score>=80 && score<=99){
// //         console.log("Grade A1")
// //     }
// //     else if(score>=75 && score<=79.99){
// //         console.log("Grade A")
// //     }
// //     else if(score>=70 && score<=74.99){
// //         console.log("Grade B")
// //     }  
// //     else if(score>=60 && score<=69.99){
// //         console.log("Grade C")
// //     }
// //     else{
// //         console.log("Fail")
// //     }
// // }
// // findGrade(81);
// // findGrade(75);
// // findGrade(68);
// // findGrade(50);
// // findGrade(71);
// // function loops(nub=10){
// //     for(var a=0;a<=nub;a++){
// //         if(a==15){
// //             break;
// //         }
// //         console.log(a);
// //     }
// // }
// // loops(10);
// // loops(20);
// function loops(nub=10){
//     for(var a=0;a<=nub;a++){
//         if(a==15){
//             continue;
//         }
//         console.log(a);
//     }
// }
// loops(10);
// loops(20);
// loops(5,78);
// var date = new Date;
// console.log(date);
var date1 = new Date ("July 20 2020 10:30:40");
var date2 = new Date ("July 29 2020 10:50:40");
console.log(date1);
console.log(date2);
console.log(date1.getSeconds());
console.log(date1.getMonth());
console.log(date1.getMinutes());
var timeDate = date2.getTime() - date1.getTime(); 
console.log(timeDate);
var dayInTime = 1000*60*60*24;
console.log(dayInTime);
var totalTimeDiff = timeDate/dayInTime;
var remainDays = Math.floor(totalTimeDiff);
console.log(remainDays+" Days Remaining");
// console.log(totalTimeDiff);
function name(num1,num2,num3){
    console.log(num1+num2+num3)
}
name(12,5,78,84);