console.log("Hey this is tutorial 55");

var a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);

// WHY THE TYPE OF NULL IS OBJECT?

// The line "During the early design and implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0." refers to the internal way that JavaScript represented data values at a low level in memory.

// Detailed Explanation:
// In the early JavaScript engine implementation (specifically in the first versions used in browsers like Netscape), each value (like numbers, strings, objects) was stored together with an accompanying type tag.

// This type tag is a small piece of metadata, often just a few bits, that signals what kind of data the value holds. For example, whether the value is a number, a string, an object, etc.

// The engine used these tags to quickly identify the type of data during operations like typeof.

// For example:

// Numbers might have had a particular tag,

// Strings another tag,

// And objects a tag represented by 0.

// The problem with null:

// null was represented with the same tag that was used for objects (which is 0).

// This happened because null was implemented as a special memory value but shared the type tag used for objects.

// Consequently, when JavaScript’s typeof operator checked the type tag of null, it saw the tag 0 and returned "object".

// Why does this matter?
// This was a design/implementation detail and a bug that became part of the language standard for backward compatibility.

// Changing this behavior now would break a lot of existing JavaScript code on the web, so it has remained as a known oddity in JavaScript's type system.

// Summary
// In essence, the engine keeps a numeric code (type tag) internally with each variable to know its datatype. Early on, the tag 0 was assigned to objects, and by mistake, null was given the same tag. The typeof operator reads that tag, so for null, it misleadingly returns "object".

// This quirk remains an artifact of JavaScript’s early days and explains the surprising result of typeof null === "object".

// Let me know if a more technical explanation about how type tags work in virtual machines or interpreters is needed!