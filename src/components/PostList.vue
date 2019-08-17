<template>
  <div class="post-list">
    <h1 class="title">{{post.title}}</h1>
    <p class="date">{{post.date}}</p>
    <p class="description">{{post.description}}</p>
    <p>{{post.timeToRead}} min read</p>
    <g-link :to="post.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
</style>