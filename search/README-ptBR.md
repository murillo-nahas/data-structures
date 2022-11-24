## Pesquisa Linear

### O que é a Pesquisa Linear?

Pesquisa Linear ou Pesquisa Sequencial é um método que nós podemos criar para encontrar um elemento dentro de uma lista. Basicamente, iteramos sobre cada elemento de uma lista até acharmos o nosso elemento alvo (elemento que estamos procurando).
No caso de nosso algoritmo não encoontrar nosso valor alvo dentro de uma lista, temos um caso de fracasso.

![Linear Search](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png)

### Métodos Built-In

Em JavaScript, podemos utilizar alguns métodos built-in que "implementam" algoritmos de pesquisa dentro de arrays, estes são:

- indexOf();
- includes();
- find();
- findIndex();

### Complexidade

Se o elemento alvo está no começo do array, nós teremos um tempo constante de O(1), o algoritmo irá performar em apenas uma comparação. Em caso do elemento estar no final, teremos a complexidade O(n).

### Quando utilizar?

Nós podemos utilizar Pesquisa Linear quando nós temos um array não ordenado e desejamos pesquisar por um elemento, por exemplo: [2, 4, 5, 3, 1], provavelmente a Pesquisa Linear se encaixaria.

#### Materiais

Veja os links abaixo para entender mais sobre Pesquisa Linear.

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)
- [Geeks for Geeks](https://www.geeksforgeeks.org/linear-search/)
- [Artigo](https://www.doabledanny.com/linear-search-in-javascript)

## Pesquisa Binária

### O que é a Pesquisa Binária?

Pesquisa Binária é um algoritmo de pesquisa que encontra a posição de um valor alvo em um array ordenado. Porém, diferente da pesquisa linear, a pesquisa binária joga um valor X para o meio do array e se o valor alvo não é encontrado, uma metade é eliminada e a pesquisa continua com a outra metade do array.

![Pesquisa Binária](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png)

#### Materiais

Veja os links abaixo para entender mais sobre Pesquisa Binária.

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Geeks for Geeks](https://www.geeksforgeeks.org/binary-search/)
- [Artigo](https://www.codeguru.co.in/2020/05/how-to-implement-binary-search-in.html)
