Loops are also a great way to work with String values.

Let's say we wanted to count the number of times the letter _a_ appears in a string. We need to look at each character in the string and check if it is an _a_.

We can do this using the code below:
```javascript runnable
let someString = "bhsabbsbabbsjsjabjkojpojpiajihiohsiohigiuygisghiohoah"

let numberOfAs = 0; // we start by setting a variable to hold the a's we count.

for (let i = 0; i < someString.length; i++) {
    if (someString.charAt(i) == "a") numberOfAs++;
}

console.log("The letter a appears " + numberOfAs + " times.");
```