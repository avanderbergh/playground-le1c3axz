So, in the previous section we learned how to use a loop to replace all the "a"s with a \*.

What if we wanted to do this multiple times or we wanted to replace a diffrent letter? This is the perfect use for a [function](https://developer.mozilla.org/en-US/docs/Glossary/Function).

In short _"A function is a code snippet that can be called by other code or by itself"_.

We can declare a function using the `function` keyword:

```javascript
function foo() {
  // do something.
}
```

The code above only declares the function. It will not run unless we **call** it. To call it, we simply type it's name with a () behind it.

Look at the code below:

```javascript runnable
// Here we declare a function named "bark"
function bark() {
  console.log("woof!");
}

// Here we call the function 3 times.
bark();
bark();
bark();
```

# Parameters

Sometimes we want to pass some information to a function. The information we pass to a function is called a parameter.

In the code above, we defined a function called bark, and we called it 3 times in a row to make it run 3 times. However, what if we wanted to bark more times? We can pass the number of times we want to bark into the function.

```javascript
// We declare a function with a parameter for the amount of times we want to bark.
function bark(times) {
  for (i = 0; i < times; i++) console.log("woof");
}

// Then we call the function and pass the number of times we want to bark as a parameter
bark(5);
```
