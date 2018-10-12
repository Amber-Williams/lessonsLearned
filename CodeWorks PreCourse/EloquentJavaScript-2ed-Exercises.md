## 2. Program Structure Exercises

#### Looping a triangle

Write a loop that makes seven calls to `console.log` to output the following triangle:

```
#
##
###
####
#####
######
#######
```

It may be useful to know that you can find the length of a string by writing `.length` after it.

```javascript
var abc = "abc";
console.log(abc.length);
// → 3
```

Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.



```javascript
function createTriangleImage (num){
  	var partImage ='';
	for(var i = 0; i < num; i++){
    	partImage+='#';
      	console.log(partImage);
    }
}
createTriangleImage(7);
```





#### FizzBuzz

Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print `"Fizz"` instead of the number, and for numbers divisible by 5 (and not 3), print `"Buzz"` instead.

When you have that working, modify your program to print `"FizzBuzz"`, for numbers that are divisible by both 3 and 5 (and still print `"Fizz"` or `"Buzz"`for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

```javascript
function fizzBuzz() {
	for(var i = 1; i <= 100; i++){
    	if (i%3 == 0 && i%5 == 0){
          console.log('FizzBuzz');
        } else if (i%3 == 0){
        	console.log('Fizz');
        } else if (i%5 == 0){
        	console.log('Buzz');
        } else {
        	console.log(i);
        }
    }
}

fizzBuzz();
```



#### Chess Board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to `console.log` should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

When you have a program that generates this pattern, define a variable `size = 8` and change the program so that it works for any `size`, outputting a grid of the given width and height.

```javascript
function chessBoard(width, height){
  	var widthContent = '';
	for(var i = width/2; i > 0; i--){
    	widthContent += ' #';
    }
  	var board = '';
  	for(var j = 1; j < height; j++){
    	if(j%2){
        	board+= widthContent.substr(1, widthContent.length) + ' \n'; 
        } else {
        	board+= widthContent + '\n'; 
        }
    }
  console.log(board);
}

chessBoard(8, 8);
```



## 3. Functions

#### Minimum

The [previous chapter](https://eloquentjavascript.net/2nd_edition/02_program_structure.html#return_values) introduced the standard function `Math.min` that returns its smallest argument. We can do that ourselves now. Write a function `min` that takes two arguments and returns their minimum.

```javascript
function min(num1, num2){
	return (num1<num2) ? num1 : num2;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```



#### Recursion

We’ve seen that `%` (the remainder operator) can be used to test whether a number is even or odd by using `% 2` to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

-  Zero is even.
-  One is odd.
-  For any other number *N*, its evenness is the same as *N* - 2.

Define a recursive function `isEven` corresponding to this description. The function should accept a `number` parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

```javascript
function isEven(num) {
	if(num%2 == 0){
    	return true;
    } else if(num%2 == 1){
    	return false;
    } else {
      	if(num == -1){
        	return false;
        }
    	isEven(num+2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-10));
```



#### Bean Counting

You can get the Nth character, or letter, from a string by writing`"string".charAt(N)`, similar to how you get its length with `"s".length`. The returned value will be a string containing only one character (for example, `"b"`). The first character has position zero, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.

```javascript
function countBs(str){
  	var counter = 0;
	for(var i = 0; i < str.length; i++){
    	if(str[i] == 'B') {
        	counter++;
        }
    }
  return counter;
}
function countChar(str, letter){
  	var counter = 0;
	for(var i = 0; i < str.length; i++){
    	if(str[i] == letter) {
        	counter++;
        }
    }
  return counter;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```



## 4. Data Structures

#### The Sum of a Range

The [introduction](https://eloquentjavascript.net/2nd_edition/00_intro.html#intro) of this book alluded to the following as a nice way to compute the sum of a range of numbers:

```
console.log(sum(range(1, 10)));
```

Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your `range` function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

```javascript
function range(start, end) {
  var result = [];
  if(start < end){
 	 for(var i = start; i <= end; i++){
       result.push(i);
     }
 } else {
 	for(var i = start; i >= end; i--){
    	result.push(i);
    }
 }
  return result;
}

function sum(arr) {
	var total = 0;
  	for(var i = 0; i < arr.length; i++){
    	total+=arr[i];
    }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```



#### A List

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the *list* (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

The resulting objects form a chain, like this:

![A linked list](https://eloquentjavascript.net/2nd_edition/img/linked-list.svg)

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` (with `list` referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function `arrayToList` that builds up a data structure like the previous one when given `[1, 2, 3]` as argument, and write a `listToArray` function that produces an array from a list. Also write the helper functions `prepend`, which takes an element and a list and creates a new list that adds the element to the front of the input list, and `nth`, which takes a list and a number and returns the element at the given position in the list, or `undefined` when there is no such element.

If you haven’t already, also write a recursive version of `nth`.

