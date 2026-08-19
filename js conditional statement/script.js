console.log("Hi");
let age = 20;
if (age>=18){
    console.log("You can vote");
}
else if (age==0){
    console.log("Are you  kidding me");

}
else{
    console.log("You can't vote");
}
let a=23;
console.log("Your age is "+a);
(a>=18)?console.log("You can drive"):console.log("You can't drive");
console.log(""+age==a);
let s=90;
let r="90";
console.log(s==r);//this checks only value
console.log(s===r); //this checks value and type both
console.log(s!==r);//this checks value and type both but gives true if neither matches