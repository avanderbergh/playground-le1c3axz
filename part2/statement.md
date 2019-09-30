# The for Loop

Whenever we need to perform a task or an action repeatedly, we use loops. The first type of loop we'll be looking at is the for loop.

For example if we need to add up all the number from 1 to 5 and log the result to the console, we can do it like this;

```javascript runnable
let sum = 1 + 2 + 3 + 4 + 5;
console.log(sum);
```

How about if need to add all the numbers from 1 to 100? We could do it by writing each number `let sum = 1 + 2 + 3 + 4 ...` etc. but this would take a long time.

This is where we can use a loop, a for loop to be exact:
```javascript runnable
let sum = 0; // we need to initialize sum.

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("the sum is: " + sum);
```

Read more about the for loop [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)


_Hint: You can write the expression `sum = sum + i` as `sum += i`_

_Notice the `++` operator? `++` means, add 1 to the value. so, `i++` is the same as `i = i + 1`_

Now, use a for loop to set sum equal to the sum of all multiples of 5 between 0 and 50.

@[Your turn]({"stubs": ["code.js"], "command": "node check.js", "project": "part2"})

