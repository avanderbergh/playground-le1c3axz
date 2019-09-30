# Working with text

The String datatype has many useful methods we can use to get information from it.

Let's say we have a string, and we would like to get the 5th letter.

We can use `charAt()` or `[]` notation.

Look at the code below:

```javascript runnable
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

console.log("The fith letter is: " + ALPHABET.charAt(4));

console.log("The tenth letter is: " + ALPHABET[9]);
```

Why did we use 4 to get the 5th letter and 9 to get the 10th letter?

Because the String index starts at 0. So `ALPHABET.charAt(0)` is the first letter, `ALPHABET.charAt(1)` is the second letter and so on.

The code above lets us find which letter is at a certain position in the String. What if we knew the letter, but wanted to find which position it's in, or what it's _index_ is?

To do that we can use the `indexOf()` method. 

_Note, `indexOf()` returns the **first** occurance of the given string or character._

Look at the code below:
```javascript runnable
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

let position = ALPHABET.indexOf("e") + 1;

console.log("The character \"e\"'s position is " + position);
```

In the code below, create a variable called `myChar` and set it to the character at position 59 of the string `myString`. 

@[Your Turn]({"stubs": ["code.js"], "command" : "node check.js", "project:": "part1.1"})