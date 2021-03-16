---
title: Introduction to Lodash — For JS lovers
date: "2019-01-09T15:00:37.121Z"
tags: ["JavaScript"]
---

I’m working with JavaScript arrays, objects & strings for a long time. But when it comes to developing apps; developers need to know the arts of manipulating arrays & objects.

Otherwise, we would use the vanilla (pure) javascript & makes our code with more lines of code & looks so complex to understand the workflow.

Nowadays in JS also **.map(), .reduce(), .filter()** like pre-built methods are there. To make a quick & elegant code workflow, Lodash module helps a lot with its pre-built methods.

What you all need to do is import the module in your project & start manipulating the arrays free of mind.

**But, you should have a look at how those methods are written in the pure javascript**. By clicking on the Lodash method’s name with **CTRL.**

**(if you are using VS Code for this=> its best)**

This will help to boost your coding skill. Before Lodash there was another one called UnderscoreJS

UnderscoreJS was later acquired by Lodash developers & developed ahead.

Nowadays, in most of the JS development project, Lodash used wisely.

If you want to include the Lodash inside your nodeJS project...

Simply type the following command in
```
npm i --save lodash
```
This will include the Lodash module inside your package.json file.

Then add the following piece of code to enable Lodash methods
```
var _ = require('lodash');
```
**Let’s jump into some of the Lodash Methods**

1.  **difference([array],[values])**
```
_.difference([2,3,1,4,5],[2],[3,4,5,6])  
//[**1**]
```
This **difference** method will compare the elements in the first array with the other arrays which are denoted as values. Then, it returns the elements which are not found in the other array as an array.

**2. isEqual(value, other)**
```
var o1 = {'value' : 1};  
var 02 = {'value' : 1};_.isEqual(object,other);  
//true
```
This will compare the parameters and returns boolean.

This method supports array, strings, boolean, maps & objects.

Objects are compared by their own, not inherited. It will check the key, value pair & returns boolean.

But functions & node are compared very strictly. [To know about Node [try this](https://developer.mozilla.org/en-US/docs/Web/API/Node)]

**3. differenceWith(array, [values], [comparator])**
```
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }] , _.isEqual));
//[ { x: 2, y: 1 } ]
```
This will perform similarly as like what different method performs. But here this takes comparator as an argument which can be another Lodash method or a function created by yourself.

This comparator is invoked by the previous two arguments (array & values).

**4. drop(array, n=1)**

This is something like slice method in Pure JavaScript. The array is the array to be included. n=1 is the default one.
```
var a1 = [1,6,3,6];  
_.drop(a1);  
//[ 6, 3, 6 ]_.drop(a1,3)  //[ 6 ]
```
Will remove the no.of elements from the left/starting of the array.

Similarly: dropRight, dropWhile are there.

**5. flatten(array)**

There is already [.flat() method in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) to flatten the array. It do the same thing.
```
_.flatten(   [1, [ 2,[4,5,[3, 5] ]] ])  
//[ 1, 2, [ 4, 5, [ 3, 5 ] ] ]
```
Similarly, flattenDeep(array) method will totally remove all sub-arrays and flatten to a single array.

There are many more methods which helps you to solve big lines of pure JS into a single line of code.

refer the Lodash [Documentation](https://lodash.com/docs/4.17.11) for more.

Happy Coding……!!

Connect with me on [Twitter](https://twitter.com/Parathantl)

