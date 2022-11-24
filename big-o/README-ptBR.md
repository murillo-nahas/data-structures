## Notação Big O

### O que é a Notação Big O?

Notação Big O é um modo que podemos representar o crescimento de uma determinada ação em relação em que a sua complexidade ou dados de entrada aumentam. Em poucas palavras, Big O define a complexidade de um algoritmo em termos de tempo e espaço. Normalmente, Big O tem seu foco no "cenário de pior caso", que no caso, levando em consideração este cenário, fica mais fácil para quantificar e pensar sobre sua complexidade.

Atualmente, existem alguns tipos de complexidades que diferenciam as Notações Big O, você pode ver abaixo:

- O(1); tempo constante.
- O(n) tempo linear.
- O(n²^) tempo quadrático.
- O(n³^) tempo cúbico.
- O(log(n)) tempo logarítmico.
- O(nlog(n)) tempo linearítmico.
- O(b^n^), b > 1 tempo exponencial.
- O(n!) tempo fatorial.

Nós podemos quantificar estas operações por:

- Operações fixas, independentes do input de entrada: O(1).
- Iterar sobre o input de entrada.

E também existem algumas regras:

- Nós devemos ignorar constantes e contar apenas as iterações.
- Nós devemos ignorar termos de baixa ordem.
- Nós devemos na maioria dos casos considerar apenas o pior cenário, (do qual o objeto é iterado).

<br>

Veja a imagem abaixo para entender sobre as diferentes abordagens de Notação Big O.
![Graphic BIGO](https://assets.digitalocean.com/articles/alligator/js/big-o-notation/o-complexity.png)

### Quando utilizar?

Podemos utilizar Notação Big O para diversas coisas, das quais são:

- Calcular a complexidade de um algoritmo em termos de tempo e espaço, trabalhando com O(n).
- Com Notação Big O, nós podemos checar a performance e eficiência de um algoritmo, de acordo com seus inputs.

#### Materiais

Veja os links abaixo para entender mais sobre Notação Big O.

- [Computerphile](https://www.youtube.com/watch?v=kgBjXUE_Nwc)
- [Artigo DigitalOcean](https://www.digitalocean.com/community/tutorials/js-big-o-notation)
- [Artigo Medium](https://medium.com/@erichnyaga1/the-big-o-notation-in-typescript-7f0a0221969d)
