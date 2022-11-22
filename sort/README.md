## Bubble Sort

### What is Bubble Sort?

Bubble Sort is a basic algorithm that organizes an element array in correct order.
The algorithm just checks the elements from left to the right, swapping
their positions if its not in order. It's a very simple algorithm to write and test, you just
need to comparate two values, and if it is necessary, swap them.

### When to use?

We can use Bubble Sort algorithm when we want to organize a element list.
It's like the sort() Javascript built-in function.

![Bubble Sort](https://lh5.googleusercontent.com/_oLwPF5ZvaZZ4pGD-HvSUSw6nTwwHjUwcLpNigUvb24-PKNwjMUwXcWYWf2wp4HopzHkh9JVmZd_AFYP4HjSYelidbw4FRo1fHrWV3KxbFM13xlRLALb-y-EbLhEmln11lhwEZPV)

#### Materials

Check these links to understand more about Bubble Sort.

- [Trybe](https://blog.betrybe.com/tecnologia/bubble-sort-tudo-sobre/)
- [Wikipedia](https://pt.wikipedia.org/wiki/Bubble_sort)

## Linked List

### What is Linked List?

A linked list is a linear data structure, where the elements aren't stored
in contiguous memory. A linked list consist in nodes where each node has data and points
to the next node in the list. The first node is called head and the last node is called tail, and you also
need to know that Linked Lists are a dynamic data structure, which means: it can grow or shrink in its size.
![Example Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

There are three types of linked lists:

- Singly linked list - Each node has only a pointer to the next node.
- Doubly linked list - Each node has pointers to both the previous and next node.
- Circular linked list - The last node points to the first element.

### When to use?

You can use a Linked List when you need constant time insertions from the list, when you don't need
random access to any element, when you don't know how many items will be in the list, etc.

#### Materials

- [Geeks for Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Blog Article](https://javascript.plainenglish.io/build-a-linked-list-in-typescript-78a4414d140e)
- [Blog Article](https://ricardoborges.dev/data-structures-in-typescript-linked-list)

## Queue

### What is Queue?

A Queue is an elementary data structure, handling items as a FIFO
(first in, first out). The items will be removed from the Queue in the same order they
were added there. With Queues, we can work with three types of methods, described below:

- enqueue: adds an item to the queue
- dequeue: removes an item from the queue
- size: returns the size of the queue

### When to use?

We can use Queue when things doesn't have to be processed immediately, but have to use the FIFO order.

#### Materials

- [Dev.to Article](https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld#queue)
- [Blog Article](https://javascript.plainenglish.io/how-to-make-a-queue-in-typescript-b56416970670)

## Stack

### What is Stack?

Stack can be described as very similar as the Queue. But, instead of FIFO pattern, with Stack, we have to use
the LIFO pattern, (last in, first out). Stacks usually have the following methods:

- push: adds an item to the stack
- pop: return and remove the last item added to the stack.
- peek: returns the last added item without removing it from the stack.

### When to use?

We can use Queue when things doesn't have to be processed immediately, but have to use the LIFO order.

#### Materials

- [Dev.to Article](https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld#queue)

## QuickSort

### What is QuickSort?

QuickSort is a sort algorithm mostly based in partition. So, if we have an array, we choose a pivot number
and based in this pivot, every number in the left should be less than and every number in the right should be
greather than the pivot. Imagine we have a simple array: [3, 8, 7, 10, 0, 23, 2, 1, 77, 7] and our pivot is 3. We have to swap the positions to put it in order, until we get the result: [1, 0, 2, 3, 8, 23, 7, 10, 77, 7].

![QuickSort Example](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### When to use?

We can use QuickSort when we want to sort an array that have a defined order.

#### Materials

- [Article](https://joaoarthurbm.github.io/eda/posts/quick-sort/)
- [Wikipedia](https://pt.wikipedia.org/wiki/Quicksort)
