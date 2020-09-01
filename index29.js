// // // var a = ["pizza","Mango","Orange","sandwich","pizza"];
// // // console.log(a);
// // // a.splice(1,0,"fries");
// // // console.log(a);
// // // a.splice(3,1,"snakes");
// // // console.log(a);
// // // var b=a.lastIndexOf("pizza");
// // // console.log(b);
// // // // string
// // var a = "hello abdul moiz";
// // console.log(a.length);
// // var b = "hello\"world";
// // console.log(b);
// // var c = "hello\\world";
// // console.log(c);
// // var d = "hello\nworld";
// // console.log(d);
// // var e = "hello\t\tmoiz";
// // console.log(e);
// var names = "abdul MOIZ";
// var updatename = names.toLocaleLowerCase();
// console.log(names);
// console.log(updatename);
var food = "Sandwich";
var input = prompt("write your favourite food");
console.log("user input = "+input);
if(food.toLocaleLowerCase() === input.toLocaleLowerCase()){
    console.log("Match");
}
else{
    console.log("Do Not Match");
}

