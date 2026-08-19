// function sum(c,d,e,f,g){
//     return c+d+e+f+g
// }
// let a=[1,2,3,4,5]
// let b=(sum(...a))
// let avg=b/5
// console.log(avg)
let b = (n) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve(n)
       }, n*1000);
    })
}
(async function main()
{
    console.log(await b(5))
    console.log(await b(10))
})()
