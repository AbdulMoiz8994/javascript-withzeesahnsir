var fullName = "abdul moiz";
var fatherName = "zafar ali";
var nationality = "Pakistan";
var email = "moiza88994@gmail.com";
var collageName = "Asam Collage";
var age = 20;
var isYouLogginFromGoogle = true;
var state = "sindh";
console.log(`
   Full Name = ${fullName};
   Father Name = ${fatherName};
   Nationality = ${nationality};
   Email = ${email};
   Collage Name = ${collageName};
   Age = ${age};
   Is You Loggin = ${isYouLogginFromGoogle};
   State = ${state};
`)
// var arr1 = ["abdul moiz","zafar ali","abdul Rafay","abdul Rafay"];
// console.log(arr1);
// arr1.push("rizwan");
// arr1.push("Abdullah");
// console.log(arr1);
// console.log("Length "+arr1.length);
// arr1.unshift("Faizan");
// arr1.unshift("Whadan","Zeeshan");
// console.log(arr1);
// console.log(arr1[0]);
// var a= arr1.pop();
// console.log(a);
// console.log(arr1);
// console.log(arr1.length);
// var b = arr1.unshift("khanzada123");
// console.log(b);
// console.log(arr1[0]);
// var c = arr1.shift();
// console.log(c);
// var d = arr1.shift();
// console.log(d);
// console.log(arr1);
// var foods = ["Pizza","Burger","Snacks","Sandwich"];
// for(var a=0;a<foods.length;a++){
//     console.log(foods[a]);
// }
// var arr1 = [4,6,8,10,12,1];
// for(var a=1;a<arr1.length;a++){
//     arr1[a] = arr1[a]*2;
//     // console.log(arr1[a]);
// }
// for(var b =0;b<arr1.length;b++){
//     console.log(arr1[b]);
// }
// var arr = [32,45,76,64,72,83];
// var input = parseInt(prompt("Please write the array number"));

// console.log("User input "+input);
// var found = false;
// for(var a=0;a<arr.length;a++){
//     // console.log(arr[a]);
//     if(arr[a] === input){
//         console.log("Found "+input+" on index = "+a)
//         found = true;
//         break;
//     }
//     // else{
//     //     console.log("not found");
//     // }
// }
// if(!found){
//     console.log("Not found");
// }
// var foods = ["pizza","sandwich","Burger","Snacks"];
// console.log(foods);
// foods.splice(1,0,"Fries");
// console.log(foods);
// foods.splice(2,3,"khanzada123");
// console.log(foods);
// var arr2 =foods.slice(0,2);
// console.log(arr2);
// var arr1 = [1,2,34,56,78,35,86,67];
// console.log(arr1.slice(1));
var arr1 = ["pizza","Mango","Orange","Burger"];
// arr1.slice(2);
// console.log(arr1.slice(1));
// var arr2 = [1,2,3,4,5,67,5];
// console.log(arr2);
// console.log(arr2.slice(2,5));
// console.log(arr1.length);
// var a = "hello\"World";
// console.log(a);
// a = "hello\'world";
// console.log(a);
// a = "hello\\world";
// console.log(a);
// a= "hello\nworld";
// console.log(a);
// a ="\thelloworld";
// console.log(a);
var arr2 = ("hello","moiz","malik","rafay");
console.log(arr2.toLocaleUpperCase());
var food = "piZZa";
var input = "pizzA";
console.log(food.toLocaleUpperCase());
console.log(food.toLowerCase());
if(food.toLowerCase() === input.toLowerCase()){
   console.log("Match");
}
else{
   console.log("Dont Not Match");
}
var b = "hello world";
console.log(b);
c =b.slice(4,7)
console.log(c);