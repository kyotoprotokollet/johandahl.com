---
author: "Johan Dahl"
title: "Getting Started with Nuxt.js"
description: "Nuxt.js is a universal framework created for the sole purpose of building world-class Vue.js applications that can scale. What makes Nuxt special, how do you install it, and how can you use it in your next project?"
slug: "getting-started"
date: 2019-08-16
---

## What you need to know first

It is called a universal framework because it was built to be flexible enough that you can use it for any project ranging from Static Sites to Single Page Applications.

Its main focus is on the UI Rendering aspect of development while trying to abstract away the client/server distribution.

### What Makes Nuxt.js Special?
- Vue Powered: Nuxt.js is built on Vue.js, hence allows you to write Vue apps at its core, which means all the added advantages of Vue exist here. As a matter of fact, Nuxt.js was built to enable you to write your best version of Vue.js code.
Automatic Route Handling: Nuxt.js uses Vue-router to handle routes but automatically generates the configuration/routes needed based off the Vue file structures in the pages folder. This means you don't have to ever bother about setting up Vue-router configuration because Nuxt will do that for you.

- Server-Side Rendering: Nuxt.js uses the Vue Server Renderer plugin to handle server-side rendering but, as usual, encapsulates all that hard work and handles this automatically while also providing properties that can be used to easily modify meta tags for individual, all or even dynamic pages.

- Static Sites: Nuxt.js has a nuxt generate command, that generates the HTML static version of your application for each page in your routes and stores them in a file, which you can host on any static hosting platform.
Webpack Powered: Nuxt.js under the hood uses webpack with vue-loader and babel-loader to bundle, minify, transpile ES6/ES7 and code-split your code. Nuxt.js has got you covered all around.

- HTTP/2: Nuxt.js provides us with a property that can activate HTTP/2 push headers in our application. HTTP/2 Push is a feature that lets a server push resources to the client without a corresponding request (i.e. no immediate request for that resource).
Hot Module Replacement in Development: Thanks to webpack and the vue-loader, Nuxt.js updates the view for changes made to the code while the application is running, without requiring a full page reload.
