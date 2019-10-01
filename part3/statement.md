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
// We can now replace the old string with the new string.
someString = newString;
console.log("Our String is now: " + someString);
```

Now it's your turn.
In the program below, replace all the "a"s with the letter "z", and create a variable named numberOfZs and set that equal to the number of "z"s that apprear in the new String.
@[Replace a with z]("stubs": ["code.js"], "command": "node check.js", "project": "part3")
