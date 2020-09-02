// // var a = ["moiz","malik","rafay","basit","rizwan","shahzaib","rafay"];
// // console.log(a);
// // a.splice(4,0,"Abdullah");
// // console.log(a);
// // a.splice(5,2,"Arsalan");
// // console.log(a);
// // var b = a.indexOf("rafay");
// // console.log(b);
// // var c = a.lastIndexOf("rafay");
// // console.log(c);
// // var d =a.slice(1,4);
// // console.log(d);
// // // string
// var a = "abdul\"moiz";
// console.log(a);
// var b = (a.length);
// console.log(b);
// var c ="abdul\\moiz";
// console.log(c);
// var d = "\t\tabdul moiz";
// console.log(d);
// var e = "\nabdul\nmoiz";
// console.log(e);
// var f = ("abdul moiz  Attari khanzada");
// console.log(f.toLocaleUpperCase());
var foods = ("sANDWICH");
var input =(prompt("please select one"));
console.log("User Input = "+input);
if(foods.toLocaleLowerCase() === input.toLocaleLowerCase()){
    console.log("Match");
}
else{
    console.log("Do Not Match");
}
var a = foods.slice(1,4);
console.log(a);

