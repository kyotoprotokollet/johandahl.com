<template>
  <div class="post-preview">
    <PostMeta :date="post.date" :timeToRead="post.timeToRead" :author="post.author" />
    <g-link :to="post.path">
      <h1 class="post-preview__title">{{ post.title }}</h1>
    </g-link>
    <div class="post-content" v-html="post.content"></div>
  </div>
</template>

<script>
import PostMeta from "@/components/PostMeta";

export default {
  components: {
    PostMeta
  },
  props: ["post"]
};
</script>

<style lang="scss">
.post-preview {
  grid-area: content;
  margin-bottom: 3rem;
}

.post-preview__readmore {
  font-size: 1rem;
}
</style>
