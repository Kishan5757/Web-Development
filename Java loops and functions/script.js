// let sum = 0;
// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }
// while (sum < 10) {
//     console.log(sum);
//     sum++;
    
// }
// do {
    
// } while (condition);
// function suma(a,b) {
//     return a + b;
// }
// const r = suma(2,3);
// console.log(r);
const obj = {
  count: 10,
  incrementLater() {
    setTimeout(() => {
      this.count++;   // `this` refers to `obj` here because of lexical binding
      console.log(this.count);
    }, 1000);
  }
};
obj.incrementLater();  // Logs: 11 after 1 second
