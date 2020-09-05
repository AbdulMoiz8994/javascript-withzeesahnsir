// // // // // var date = new Date();
// // // // // console.log(date);
// // // // // var dates = new Date(2020,07,30,10,22,10,300);
// // // // // console.log(dates);
// // // // // var date = new Date(2019,8,12);
// // // // // console.log(date);
// // // // // var date = new Date(2019/8/12);
// // // // // console.log(date);
// // // // // var date = new Date("2019/8/12");
// // // // // console.log(date);
// // // // // var date = new Date();
// // // // // console.log(date.getTime());
// // // // // // console.log(dates.length);
// // // // // var a = new Date(0)
// // // // // console.log(a);
// // // // var fullName = "Abdul moiz";
// // // // var fatherName = "zafar ali";
// // // // var surName = "Khanzada";
// // // // var collageName = "Asam Collage";
// // // // var state = "Sindh";
// // // // var nationality = "Pakistani";
// // // // var age = 19;
// // // // isFeePaidByPayPal = true;
// // // // console.log(`
// // // //      Full Name = ${fullName};
// // // //      Father Name = ${fatherName};
// // // //      SurName = ${surName};
// // // //      Collage Name = ${collageName};
// // // //      State = ${collageName}; 
// // // //      Nationality = ${nationality};
// // // //      Age = ${age};
// // // //      Is Fee Paid = ${isFeePaidByPayPal};
// // // // `)
// // // // var userPercentage = parseInt(prompt("What is your Grade"));
// // // // if(userPercentage >=80 && userPercentage <=100){
// // // //     console.log("Grage A");
// // // // }
// // // // else if(userPercentage >=70 && userPercentage <=79.99){
// // // //     console.log("Grade B");
// // // // }
// // // // else if(userPercentage >=60 && userPercentage <=69.99){
// // // //     console.log("Grade C")
// // // // }
// // // // else if (userPercentage >=55 && userPercentage <=59.99){
// // // //     console.log("Grade D")
// // // // }
// // // // else{
// // // //     console.log("Fail");
// // // // }
// // // var score =parseInt(prompt("What is your Score"));
// // // for(var a=0;a<score;a++){
// // //     console.log("A = "+a);
// // // }
// // var table = parseInt(prompt("Please Write table"));
// // for(var a=1;a<=10;a++){
// //     for(var b=0;b<=3;b++){
// //         console.log("B = "+b)
// //    console.log(+table+" x "+a+" = "+(table*a));
// //     }
// // }
// var data = ["abdul moiz","zafar ali","19","Asam Collage","Pakistani","Sindh","false","abdul moiz"];
// // console.log(a.length);
// // console.log(a.pop());
// // console.log(a.pop());
// // var b= a.unshift("Attari");
// // console.log(a);
// // console.log(a.length);
// // var c = a.shift();
// // console.log(c);
// // for(d=0;d<data.length;d++){
// //     console.log(data[d]);
// // }
// var a = data.splice(1,3,"khanzada","Intermediate");
// // console.log(data);
// // console.log(data.slice(2,5));
// var b = data.indexOf("abdul moiz");
// console.log(b);
// console.log(data.lastIndexOf("abdul moiz"));
// string
var a = [("name : abdulmoiz"),("father : zafar ali")]
console.log(a);
var b = "abdul\nmoiz";
console.log(b);
var c="abdul moiz\t\tattari"
console.log(c)
var personal = ("Abdul MOIZ zafar ALI khanzada rajput abdul moiz");
// console.log(name);
// var names = name.toLocaleLowerCase();
// console.log(names);
console.log(personal.toLocaleUpperCase());
var e = personal.charAt(11)
console.log(e);
console.log(personal.slice(1,13));
console.log(personal.replace(/abdul/gi,"ABDUL"));
var listingPrice = 799;
var sellingPrice = 199;
var averagePrice = (listingPrice -sellingPrice)/listingPrice *100
console.log(averagePrice);
var totalAverage = Math.round(averagePrice);
console.log(totalAverage);
var topPrice = Math.ceil(averagePrice);
console.log(topPrice);
var lessPrice = Math.floor(averagePrice);
console.log(lessPrice);
var fixedNub = Math.random();
console.log(fixedNub);
var num1 = fixedNub*6;
console.log(num1);
var num2 = num1+1;
console.log(num2);
var num3 = Math.floor(num2);
console.log(num3);
var num4 = averagePrice.toFixed(3);
console.log(num4);
var date = new Date()
console.log(date);
date.getTime();


