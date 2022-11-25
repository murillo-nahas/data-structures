## Arrays | Arrays Binários

### O que são Arrays Binários?

ArrayBuffers em Javascript é um objeto built-in utilizado para representar um genério e de tamanho fixado, dado buffer binário.
O objeto construtor ArrayBuffer() cria uma nova instância de ArrayBuffer com um tamanho fixo de bytes passado como argumento.

Para trabalhar com ArrayBuffers, nós precisamos saber o significado de TypedArray, um tipo de Array para visualizar Buffers Binários.

```javascript
const typedArray = new Int8Array(8);
typedArray[0] = 50;

// Output: Int8Array [50, 0, 0, 0, 0, 0, 0, 0]
```

Como você pode ver, nós utilizamos o construtor Int8Array para criar um array de 8 bits unsigned integers, e nós temos também outros tipos diferentes:

- Uint8Array: trata cada byte como um número separado, com valores de 0 a 255.

- Uint16Array: trata cada byte como um inteiro, com valores de 0 a 65535.

- Uint32Array: trata cada quatro bytes como um inteiro, com valores de 0 a 4294967295.

#### Materiais

Veja os links abaixo para entender mais sobre Arrays.

- [Developer Mozilla Array Buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [Developer Mozilla Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Artigo DevTo](https://dev.to/nfo94/o-que-e-um-arraybuffer-e-como-manipular-seu-conteudo-3a2o#:~:text=O%20ArrayBuffer%20%C3%A9%20um%20objeto,de%20bytes%20fornecido%20como%20argumento.)
- [JavaScript Info](https://javascript.info/arraybuffer-binary-arrays)
