## Big O Notation

### What is Big O Notation?

Big O Notation is a way of representing the growth of a task as you increase
its inputs. In short, Big O defines an algorithm complexity, in terms
of time and space. Usually, Big O is focused on the worst-case scenario, which is easier for us to quantify and think about the complexity.

Currently, there are different types of standards that Big O notations includes, as you can see below:

- O(1) constant time.
- O(n) linear time.
- O(n²^) quadratic time.
- O(n³^) cubic time.
- O(log(n)) logarithmic time.
- O(nlog(n)) linearithmic time.
- O(b^n^), b > 1. exponential time
- O(n!) factorial time.

We can count these operations by:

- Fixed operation independent of the input: O(1).
- Loop that iterate the input.

And there are some rules:

- We should ignore constants and count only the iterations.
- We should ignore terms of lower order.
- We should only consider the worst case, the case in which the object is iterated.

<br>

Check the picture below to understand different approachs of Big O.
![Graphic BIGO](https://assets.digitalocean.com/articles/alligator/js/big-o-notation/o-complexity.png)

### When to use?

We can use Big O Notations for several things, which are:

- Calculate the complexity of an algorithm in terms of time and space working with O(n) inputs;
- With BigO Notations, we can check the perfomance and eficiency, according of its inputs;

#### Materials

Check these links to understand more about Big O Notations.

- [Computerphile](https://www.youtube.com/watch?v=kgBjXUE_Nwc)
- [DigitalOcean Article](https://www.digitalocean.com/community/tutorials/js-big-o-notation)
- [Medium Article](https://medium.com/@erichnyaga1/the-big-o-notation-in-typescript-7f0a0221969d)
