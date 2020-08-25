// var a = [1,2,3,4,56,7];
// console.log(a);
// var lists= [];
// lists.push("abdul moiz");
// lists.push("ali khanzada");
// console.log(lists);
// console.log(lists.pop());
// console.log(lists);
// console.log(lists.length);
// lists.push("malik");
// console.log(lists);

// console.log(lists.shift());
// console.log(lists);
// console.log(lists.length);
// lists.push("rafay");
// lists.push("basit");
// lists.unshift("abdul moiz");
// console.log(lists);
// lists.unshift("khanzada123");
// console.log(lists);
// var fullName = "abdul moiz";
// var fatherName = "zafar ali";
// var age = "50";
// var collage = "Asam Collage";
// var state = "sindh";
// var country = "Pakistan";
// var nationality = "Pakistani";
// var isFeePaid = "true";
// var isYouLogginFromGoogle = "false"
// var sellingPrice =499;
// var listingPrice = 999;
// var discountPrice = (listingPrice - sellingPrice) / listingPrice *100;
// var bigDiscount = Math.round(discountPrice)
// console.log(`
//     First Name = ${fullName}
//     Father Name = ${fatherName}
//     Age = ${age}
//     Collage = ${collage}
//     State = ${state}
//     Country = ${nationality}
//     Nationality = ${nationality}
//     Is Fee Paid = ${isFeePaid}
//     Is You Loogin From Google = ${isYouLogginFromGoogle}
//     Big Discount Price = ${bigDiscount+"% off"}
// `)
// var percentage = prompt("what is your percentage");
// if(percentage >=80 && percentage<=99){
//     console.log("Grade A1");
//     if(percentage>=90 && percentage<=99){
//         console.log("Reward $50")
//     }
// }
// else if(percentage >=70 && percentage<=79.99){
//     console.log("Grade A");
// }    
// else if(percentage >=60 && percentage<=69.99){
//     console.log("Grade B");
// }
// else if(percentage >=50 && percentage<=59.99){
//     console.log("Grade C");
// }
// else{
//     console.log("fail");
// }
// var input = prompt("what is the alphabat");
// if(input == "A" || input == "A" || input == "E" || input == "I" || input == "O" || input == "U"){
//     console.log("This is vowel");
// }
// else{
//     console.log("This is consonant");
// }
// for(var a=10;a>5;a--){
//     console.log(a);
// }
// var score = parseInt(prompt("what is your score"));
// for(var a=1;a<=10;a++){
//     for(var b=0;b<=score;b++){
//         if(b==3){
//             continue;
//         }
//         console.log("B "+b);
//     }
//     console.log(score+" x "+a+" = "+(score*a));
// }
var arr1 = [];
arr1.push("abdul moiz");
arr1.push("zafar ali");
arr1.push("19");
arr1.push(true);
arr1.push("Pakistan");
console.log(arr1);
console.log(arr1.pop());
arr1.push("khanzada");
console.log(arr1);
var a =arr1.shift();
console.log(a);
console.log(arr1);
// var b = arr1.unshift();
arr1.unshift("baba");
console.log(arr1);
arr1.push("abdul moiz123","rizwan");
console.log(arr1);
console.log(arr1.length);
