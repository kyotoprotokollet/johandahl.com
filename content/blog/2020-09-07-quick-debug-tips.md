---
author: "Johan Dahl"
title: "Quick debug tip: Use property shorthands in your console.log commands"
description: "When using console.log for outputting multiple values, you can wrap them in an object and take advantage of ES6+ property shorthands to simplify your code."
slug: "es6-property-shorthands-in-console-log-commands"
date: 2020-09-07
published: false
---

**Here is a quick tip to easely include your variable names when outputting values with console.log.**

I've found myself doing something like this multiple times:
```javascript
let costOfShipping = 60;
let currency = "SEK"
let numberOfItems = 2
let adress = "Skepparegatan 4, 284 84 Malmö"

console.log(costOfShipping, currency, numberOfItems, adress);
```
Output:
```javascript
60 "SEK" 2 "Skepparegatan 4, 284 84 Malmö"
```

Wouldn't it be nice if we could easely include the variable names so we quickly can understand what variable holds what value? (Without prepending them manually, like I used to do). Luckely, it's very simple.

If we wrap our variables in curly braces, we can take advantage of ES6 property shorthands and create a new object with copies of these variables as it's properties. 

Logging it this way we get a much nicer output:

```javascript
let costOfShipping = 60;
let currency = "SEK"
let numberOfItems = 2
let adress = "Skepparegatan 4, 284 84 Malmö"

console.log({costOfShipping, currency, numberOfItems, adress});
```
Output:
```javascript
{
    costOfShipping: 60, 
    currency: "SEK", 
    numberOfItems: 2, 
    adress: "Skepparegatan 4, 284 84 Malmö"
}
```
Much nicer don't you think?
