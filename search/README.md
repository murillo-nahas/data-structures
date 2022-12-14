## Linear Search

### What is Linear Search?

Linear Search || Sequential Search is a method that we create to find an element within a list.
Basically, we iterate over each element of a list until we match the target element.
In case our algorithm don't reach any target value, we have a unsuccesfull case.

![Linear Search](https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png)

### Built-in Methods

In Javascript, we can use some built-in array methods to perform the Linear Search, these are:

- indexOf();
- includes();
- find();
- findIndex();

### Time Complexity

If the target value is in the beginning of the array, we have the constant time O(1), the algorithm will perform only over one comparison.
In case the target is in the final, we have the O(n) complexity.

### When to use?

We can use the Linear Search when we have an unsorted array, such as [2, 4, 5, 3, 1], probably is the best case.
We can use sort methods/algorithms with linear search to sort and find an element.

#### Materials

Check these links to understand more about Linear Search.

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)
- [Geeks for Geeks](https://www.geeksforgeeks.org/linear-search/)
- [Article](https://www.doabledanny.com/linear-search-in-javascript)

## Binary Search

### What is Binary Search?

Binary Search is a search algorithm that finds the position of a target value within a sorted array.
It compares the target value to the middle of the array and if they are not equal, the half in which the
target cannot lie is elimined and the search continues with the remaining half.

![Binary Search](https://media.geeksforgeeks.org/wp-content/uploads/20220309171621/BinarySearch.png)

#### Materials

Check these links to understand more about Binary Search.

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [Geeks for Geeks](https://www.geeksforgeeks.org/binary-search/)
- [Article](https://www.codeguru.co.in/2020/05/how-to-implement-binary-search-in.html)
