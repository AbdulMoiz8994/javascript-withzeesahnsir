// // // var name = prompt("what is your Name");
// // // var fatherName = prompt("what is your Father Name");
// // // var age = prompt("what is your Age");
// // // var isfeepaidbygoogle = prompt("Is fees paid by Google");
// // // console.log(`
// // //     Name = ${name}
// // //     Father Name = ${fatherName}
// // //     Age = ${age}
// // //     Fees Paid = ${isfeepaidbygoogle}
// // // `)
// // // iffeePiadbythesesites = prompt("which websites did you pay the fees");
// // // var email = prompt("Login via email");
// // // var facebook = prompt("Login via Facebook");
// // // var google = prompt("Login via Google");
// // var email = false;
// // var facebook = false;
// // var google = true;
// // if(email || facebook || google){
// //     console.log("Login Sucess")
// // }
// // else{
// //     console.log("Not Login")
// // }
// var autenticated = false;

// if(autenticated){
//     console.log("show signout Button");
// }
// else{
//     console.log("show Login Button")
// }
// var name ="abdul moiz";
// console.log(typeof(name));
// var autenticated = true;
// autenticated ? console.log("Signout Button") : console.log("LogIn")
function autenticated(feesPaid){
    return (feesPaid ? console.log("Get the ticket") : console.log("Pay the fees first of ticket"));
}
autenticated(true);
autenticated(false);
// var a = autenticated(true);
// console.log(a);
function test(){
    console.log("hello moiz")
}
test();
function showMessage(name){
    console.log("hello "+name)
}
showMessage("abdul moiz");
showMessage(true);
showMessage(19);
showMessage();
showMessage("");
function multipy (num1,num2,num3){
    console.log(num1*num2+num3)/2
}
multipy(30,45,67);
multipy(45,12,32);
function maths(nub1,nub2,nub3,nub4){
    return(nub1/nub4+nub1+nub3+nub2)/5
}
function findGrade(grade){
    if(grade>=80 && grade<=99){
        console.log("Grdae A1")
    }
    else if(grade>=70 && grade<=79.99){
            console.log("Grdae A")
        }
    else if(grade>=60 && grade<=69.99){
                console.log("Grdae B")
            }
    else if(grade>=55 && grade<=59.99){
                    console.log("Grdae C")
                }
    else if(grade>=50 && grade<=54.99){
        console.log("Grade D")
    }            
    else{
        console.log("Fail")
    }
}
var a=maths(45,34,67,12);
var b=(maths(45,72,67,91,82));
var c =maths(98,84,91,12,45);
console.log(a);
var lib=Math.floor(a);
console.log(lib);
console.log(b);
console.log(c);
findGrade(a);
findGrade(b);
findGrade(c);

// findGrade(86);
// findGrade(79);
// findGrade(71);
// findGrade(64);
// findGrade(56);
// findGrade(52);
// findGrade(45);








