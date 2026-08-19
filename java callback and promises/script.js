console.log("Yes");
setTimeout(() => {
    console.log("Ok in timeout")
}, 1000);
console.log("No");
let a=(callback)=>{
a.onload=console.log("Inside a");
callback();
}
function callback() {
    console.log("complete");
}
a(callback);