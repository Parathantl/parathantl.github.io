---
title: Let’s explore Slice(), Splice() & Spread Syntax(…) in JavaScript
date: "2019-01-25T21:30:37.121Z"
tags: ["JavaScript"]
---
I came across this [freeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice) challenge and got stuck for some time thinking about how I could find a way to solve it. They already mentioned solving using Slice & Splice. I was confused at that time when to use Slice and when to use Splice.

Here, I’m gonna share how I solved it with those methods.

Both Slice and Splice are used to manipulate arrays. Let’s see how they do it.

# Slice:

The Slice method takes 2 arguments.

**1st Argument**: Specifies from where the selection should be started.

For Example:
```
var arr1 = [1,5,8,9];  
arr1.slice(1); // [5,8,9]
```
From the first index (5) it will return the elements.

**2nd Argument**: Specifies at which level the endpoint should be. If you didn’t put this in the parenthesis while calling the slice method, it will return the elements from the starting index to the end of the array.
```
var arr1 = [1,5,8,9];
console.log(arr1.slice(1,3));  
//[ 5, 8 ]
```
If you put a negative number while calling, the selection will be selected from the end of the array.
```
var arr1 = [1,5,8,9];  
console.log(arr1.slice(-2));  
//[ 8, 9 ]
```
**Note: Slice always returns the selected elements from the array.**

**Slice won’t change the array. The array remains intact. See the below Example:**
```
var arr1 = [1,5,8,9];
arr1.slice(2);
console.log(arr1);  
// [ 1, 5, 8, 9 ]
```
Even if you made some changes to the array it won’t affect it. It will return the original array as it is at the start.

# **Splice:**

It can take multiple arguments.

That means,

**1st Argument**: Specifies at which position a new element or existing element should be added/removed. If the value is negative the position will be counted from the end of the array.

**2nd Argument**: The numbers of elements to be removed from the starting position. If it is 0, then no elements will be removed. If it is not passed, it will delete all elements from the starting position.
```
var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2));  
// [ 5, 8 ]
```
**3rd Argument ->nth Argument**: The value of the items you want to add to the array.
```
var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2,'Hi','Medium'));  
// [5,8]
```
You may think that we have added ‘Hi’,’Medium’ to the array but it doesn't show here…. Right?

Yes, we have consoled the **arr1.splice(1,2,’Hi’,’Medium’).**

**Note:**

-   **Splice will return removed elements from the array only.**
-   **Splice will change the original array**
```
var arr1 = [1,5,8,9];
arr1.splice(1,2,'Hi','Medium');
console.log(arr1);  
// [ 1, 'Hi', 'Medium', 9 ]
```
# **Spread Syntax:**

**Definition**: Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Let's have an example for this:
```
var arr1 = [1,3,6,7];  
var arr2 = [5,arr1,8,9];  
console.log(arr2);  
// [ 5, [ 1, 3, 6, 7 ], 8, 9 ]
```
I want this to be in a single array like **[ 5, 1, 3, 6, 7, 8, 9 ].**

I can use this Spread Syntax to solve this:
```
var arr1 = [1,3,6,7];
var arr2 = [5,...arr1,8,9];

console.log(arr2);
//[ 5, 1, 3, 6, 7, 8, 9 ]
```
Another main use of Spread Syntax is while copying an array:
```
var arr = [1, 2, 3];
var arr2 = arr;
arr2.push(4);
console.log(arr2);  // [ 1, 2, 3, 4 ]

console.log(arr);// [ 1, 2, 3, 4 ]
```
I added “**4**” to **arr2** only. But it made the change to arr also.

We can solve this using the Spread Syntax as follows...
```
var arr = [1, 2, 3];
var arr2 = [...arr];  // like arr.slice()

arr2.push(4);
console.log(arr2);
// [ 1, 2, 3, 4 ]

console.log(arr);
// [ 1, 2, 3]
```
You may refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) documentation for more info about Spread Syntax.

**So, let’s have a look at the challenge.**
```
function frankenSplice (arr1, arr2, n) {
	// It's alive. It's alive!
	let array2Copy = [...arr2];
	array2Copy.splice(n,0, ...arr1); 
	//console.log(array2Copy);
	return array2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```
The main condition of this challenge is “should not alter arr1/arr2 after function has executed”.

So, created a **copy array of arr2,** and **using the splice** **method** add the arr1 inside the arr2’s copy which is named as **array2Copy.**

## **Final Conclusion:**

-> Slice method will

-   return the selected elements from the array
-   take 2 arguments
-   not alter the original array

-> Splice method will

-   return the removed elements of the array
-   take multiple arguments
-   alters the original array

This is my first ever tutorial about coding — thanks for reading! Your feedback will help me to shape up my coding & writing skill.

Happy Coding…!

Connect with me through [Twitter](https://twitter.com/parathantl)

