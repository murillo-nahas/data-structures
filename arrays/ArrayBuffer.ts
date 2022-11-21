// We can visualize the number of bytes with byteLength.
let buffer = new ArrayBuffer(16); 
console.log(buffer.byteLength);

// Here we're creating a new Int8Array and setting the "50" value to index 0.
const typedArray = new Int8Array(8);
typedArray[0] = 50;