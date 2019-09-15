---
author: "Johan Dahl"
title: "Unit tests in Vue.js components"
description: "In Build Your First Vue.js Component we made a star rating component. We’ve covered many fundamental concepts to help you create more complex Vue.js components. Yet, there’s one crucial point you need to build bulletproof components you can use in production: unit testing."
slug: "up-town-girl"
date: 2019-08-18
---

## Unit Test Your First Vue.js Component

In Build Your First Vue.js Component we made a star rating component. We’ve covered many fundamental concepts to help you create more complex Vue.js components. Yet, there’s one crucial point you need to build bulletproof components you can use in production: unit testing.

```php
$korv = (int) 3;
new Korv() {
    this.korv = 3;
}
```

```console
foo@bar:~$ whoami
foo
```

### Why unit test a component?
Unit tests are a crucial part of continuous integration. They make your code a lot more reliable by focusing on small, isolated entities and making sure they always behave as expected. You can confidently iterate on your project without fear of breaking things.

Unit tests aren’t limited to scripts. Anything we can test in isolation is unit testable, as long as you respect a few good practices like single-responsibility, predictability and loose coupling.

As reusable entities of our app, Vue.js components are great candidates for unit testing. We’ll test the one we made as a single unit with various inputs and user interactions, and make sure it always behaves as we expect.

### Before we start
A few things have changed since the initial tutorial. Vue CLI 3 was released, and Vue Test Utils, the official Vue.js unit testing utility library, has matured to beta version. In the first tutorial, we used webpack-simple, a prototyping template that doesn’t include testing features. For all those reasons, the simplest thing to do is to wipe the slate clean and migrate the project from the tutorial to a more recent Vue.js install.

I re-created the project from the first tutorial so you can download it directly from GitHub. Then, navigate to the unzipped directory and install dependencies.