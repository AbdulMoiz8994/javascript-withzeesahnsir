// // // var date1 = new Date("June,04,2020 14:04:30");
// // // var date2 = new Date("June,14,2020 14:04:30");
// // // console.log(date1);
// // // console.log(date2);
// // // var totalDiff = date2.getTime()-date1.getTime();
// // // console.log(totalDiff);
// // // var dayTotalTime=(1000*60*60*24);
// // // console.log(dayTotalTime);
// // // console.log(totalDiff/dayTotalTime+" Days Remaining for this big oppertunity");
// // function name(message){
// //     console.log("hello "+message);
// // }
// // name("abdul moiz");
// // // console.log(showMessage());
// // // function showMessage(){
// // //     console.log("hello moiz");
// // // }
// // // showMessage();
// // // function mul(num1,num2,num3){
// // //     console.log(num1*num2*num3);
// // // }
// // // mul(3,5,7);
// // // mul(10,82,89,81);
// // function nam(name,nub){
// //     console.log("hello "+name,nub)
// // }
// // nam("abdul moiz");
// // nam("zafar ali");
// // nam(true);
// // nam(45);
// // nam();
// // nam("moiz",12);
// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,6);
// sum(14);
// function mul(num1,num2){
//     console.log(num1*num2);
// }
// mul(10,5);
// mul(34,6,7);
// mul("abdul moiz")
function finalGrade(score){
    if(score>=80 && score<=100){
        console.log("Grade A1")
    }
    else if(score>=70 && score<=79.99){
        console.log("Grade A")
    }
    if(score>=60 && score<=69.99){
        console.log("Grade B")
    }
    if(score>=55 && score<=59.99){
        console.log("Grade C")
    }
    if(score>=50 && score<=54.99){
        console.log("Grade D")
    }
    else{
        console.log("Fail")
    }
}
finalGrade(78);
finalGrade(45);
finalGrade(87);
finalGrade(55);
finalGrade(67);
function num(){
    return 56;
} 
var a =num();
console.log(a);
function sum(){
    return 67;
    return 56;
} 
var a =sum();
console.log(a);