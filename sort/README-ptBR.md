## Ordenação por Flutuação (Bubble Sort)

### O que é Ordenação por Flutuação?

Ordenação por Flutuação, ou Bubble Sort, é um algoritmo básico para organizar/ordenar elementos de um array em ordem certa.
O algoritmo consiste em apenas checar os elementos da esquerda para direita, trocando de lugar caso não esteja em ordem certa. É um algoritmo bem simples de se escrever, apenas necessita de comparar dois valores, e se necessário, trocá-los de lugar.

### Quando utilizar?

Nós podemos utilizar ordenação por flutuação quando nós queremos organizar um array. Em JavaScript, podemos utilizar a função built-in sort().

![Bubble Sort](https://lh5.googleusercontent.com/_oLwPF5ZvaZZ4pGD-HvSUSw6nTwwHjUwcLpNigUvb24-PKNwjMUwXcWYWf2wp4HopzHkh9JVmZd_AFYP4HjSYelidbw4FRo1fHrWV3KxbFM13xlRLALb-y-EbLhEmln11lhwEZPV)

#### Materiais

Veja os links abaixo para entender mais sobre Ordenação por Flutuação.

- [Trybe](https://blog.betrybe.com/tecnologia/bubble-sort-tudo-sobre/)
- [Wikipedia](https://pt.wikipedia.org/wiki/Bubble_sort)

## Listas Encadeadas

### O que são Listas Encadeadas?

Listas Encadeadas são uma estrutura de dados linear, onde os elementos não são armazenados em memória contígua. Uma lista ordenada consiste em nós onde cada nó tem um valor e aponta para o próximo nó na lista (similar à árvores). O primeiro nó é chamado de "head" e o último nó é chamado de "tail", e também é necessário saber que Listas Encadeadas são uma estrutura de dados dinâmica, que significa: pode aumentar ou diminuir de tamanho.
![Example Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

Existem três tipos de listas encadeadas:

- Singly Linked List - Cada nó apenas aponta para o próximo nó.
- Doubly Linked List - Cada nó aponta para o próximo nó e o nó antecessor.
- Circular Linked List - O último nó aponta para o primeiro elemento.

### Quando utilizar?

Você pode utilizar Listas Encadeadas quando você precisa de inserções constantes em uma lista, quando você não precisa acessar qualquer elemento, ou quando você não sabe quantos itens estarão em um array.

#### Materiais

Veja os links abaixo para entender mais sobre Listas Encadeadas.

- [Geeks for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Artigo](https://javascript.plainenglish.io/build-a-linked-list-in-typescript-78a4414d140e)
- [Artigo](https://ricardoborges.dev/data-structures-in-typescript-linked-list)

## Filas

### O que são Filas?

Filas são uma estrutura de dados elementar, que consiste em itens no padrão FIFO (first in, first out) ou primeiro a entrar, primeiro a sair. Os itens são removidos do Array na mesma ordem da qual entraram. Com Filas, podemos trabalhar com alguns métodos:

- enqueue: Adiciona um item à fila.
- dequeue: Remove um item da fila.
- size: Retorna o tamanho da fila.

### Quando utilizar?

Nós podemos utilizar Filas quando processos não necessitam de ser processados de imediato, e devemos utilizar o padrão FIFO.

#### Materiais

- [Artigo Dev.to](https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld#queue)
- [Artigo](https://javascript.plainenglish.io/how-to-make-a-queue-in-typescript-b56416970670)

## Pilhas

### O que são Pilhas?

Pilhas podem ser descritos como similar à Filas, porém, utilizando o padrão LIFO (last in, first out), ou último a entrar, primeiro a sair.
Pilhas possuem os seguintes métodos:

- push: Adiciona um item à Pilha.
- pop: Retorna e remove o último item adicionado à Pilha.
- peek: Retorna o último item sem removê-lo da Pilha.

### Quando utilizar?

Nós podemos utilizar Pilhas quando processos não necessitam de ser processados de imediato, e devemos utilizar o padrão LIFO.

#### Materiais

- [Artigo Dev.to](https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld#queue)

## QuickSort

### O que é QuickSort?

QuickSort é um algoritmo baseado em partições. Nós temos um array, escolhemos um número pivô e baseado neste pivô, todo número à esquerda deve ser menor e todos os números à direita devem ser maiores do que o pivô.
Imagine o seguinte array: [3, 8, 7, 10, 0, 23, 2, 1, 77, 7], nosso pivô é 3.
Utilizando QuickSort, o array ficaria: [1, 0, 2, 3, 8, 23, 7, 10, 77, 7].

![QuickSort Example](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### Quando utilizar?

Nós podemos utilizar o algoritmo de QuickSort quando nós queremos ordenar um array com uma ordem definida.

#### Materiais

- [Artigos](https://joaoarthurbm.github.io/eda/posts/quick-sort/)
- [Wikipedia](https://pt.wikipedia.org/wiki/Quicksort)
