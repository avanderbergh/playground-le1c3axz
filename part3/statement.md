Loops are also a great way to work with String values.

Let's say we wanted to count the number of times the letter _"a"_ appears in a string. We need to look at each character in the string and check if it is an _"a"_.

We can do this using the code below:

```javascript runnable
let someString = "bhsabbsbabbsjsjabjkojpojpiajihiohsiohigiuygisghiohoah";

let numberOfAs = 0; // we start by setting a variable to hold the a's we count.

for (let i = 0; i < someString.length; i++) {
  // Increase the numberOfAs variable by one of the current character is "a"
  if (someString.charAt(i) == "a") numberOfAs++;
}

console.log("The letter a appears " + numberOfAs + " times.");
```

Let's say we wanted to modify the string and replace all the a's with \*'s. How we can do this?

We'll first need to declare a new empty string to hold the new string. `newString = ""`.
We can then iterate over each character in our string and:

- If the character is an a, then we add \* to our new string
- else we add the current character to our new String.

```javascript runnable
let someString = "bhsabbsbabbsjsjabjkojpojpiajihiohsiohigiuygisghiohoah";
let newString = "";

for (let i = 0; i < someString.length; i++) {
  let currentChar = someString.charAt(i);
  if (currentChar == "a") newString += "*";
  else newString += currentChar;
}

console.log("Our new String is: " + newString);
```
