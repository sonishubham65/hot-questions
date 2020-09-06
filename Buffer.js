/**
 * What is Buffer?
 * Buffers in Node.js are used to represent binary data in the form of sequence of bytes.
 * Some Node API like Streama dn FS support Buffer.
 * We can convert between Buffers and strings, UTF-8 encoding will be used as the default.
 */

// Define a Buffer
var buffer = Buffer.from("Hello world", 'utf-8');
console.log("\n Binary data of bufer:\n", buffer);
console.log("\n Convert to String:\n", buffer.toString());
console.log("\n Convert to hex:\n", buffer.toString('hex'));
console.log("\n Convert to base64:\n", buffer.toString('base64'));


// Create a blank buffer and Store values.
var buffer = Buffer.alloc(9);
console.log("\n Blank buffer:\n", buffer);
for (let i = 0; i < buffer.size; i++) {
    buffer[i] = "John Doe"[i];
}
console.log("\n Filled Buffer with one blank value:\n", buffer);

// Save in buffer with Chunk
var buffer = Buffer.alloc(8);
buffer.write("John");
buffer.write(" Doe", 4); //Next chunk and previous pointer
console.log("\n Buffer with two chunks inseration:\n", buffer.toString())

// Concat
var buffer1 = Buffer.from("John");
var buffer2 = Buffer.from(" ");
var buffer3 = Buffer.from("Doe");
let concatBuffer = Buffer.concat([buffer1, buffer2, buffer3]);
console.log("\n ConcatBuffer:\n", concatBuffer.toString());

// Compare
var buffer1 = Buffer.from("John");
var buffer2 = Buffer.from("Joho"); // n comes before o
console.log("\n Compare two buffer:\n", buffer1.compare(buffer2));

//Copy
var buffer1 = Buffer.alloc(4);
var buffer2 = Buffer.from("John");

console.log("\nCopy buffer:\n", buffer2.toString());

// Check if buffer
var buffer = Buffer.from("John");
console.log("\nIS buffer:\n", Buffer.isBuffer(buffer), Buffer.isBuffer(1));

//Slice
var buffer = Buffer.from("John");
console.log("\nSlice of a buffer:\n", buffer.slice(1, 4).toString());