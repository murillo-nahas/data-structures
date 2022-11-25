## Arrays | Binary Arrays

### What are Binary Arrays?

JavaScript ArrayBuffer is a built-in object used to represent a generic and fixed-length raw binary data buffer.
The construtor object ArrayBuffer() creates a new ArrayBuffer instance with fixed size of bytes passed as a argument.

To work with ArrayBuffer, we should know the concept of TypedArray, a type of array to visualize these binary buffers.

```javascript
const typedArray = new Int8Array(8);
typedArray[0] = 50;

// Output: Int8Array [50, 0, 0, 0, 0, 0, 0, 0]
```

As you can see, we use the Int8Array constuctor to create an array of 8-bit unsigned integers, and we also have different types:

- Uint8Array: treats each byte as a separated number, with values from 0 to 255.

- Uint16Array: treats each two bits as a integer, with values from 0 to 65535.

- Uint32Array: treats each four bytes as a integer, with values from 0 to 4294967295.

#### Materials

Check these links to understand more about Arrays.

- [Developer Mozilla Array Buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [Developer Mozilla Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [DevTo Article](https://dev.to/nfo94/o-que-e-um-arraybuffer-e-como-manipular-seu-conteudo-3a2o#:~:text=O%20ArrayBuffer%20%C3%A9%20um%20objeto,de%20bytes%20fornecido%20como%20argumento.)
- [JavaScript Info](https://javascript.info/arraybuffer-binary-arrays)
