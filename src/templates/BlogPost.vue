<template>
  <div>
    <Header></Header>
    <GridDefault>
      <div class="post">
        <g-link to="/blog" class="go-back">Go Back</g-link>
        <PostMeta
          :date="$page.post.date"
          :timeToRead="$page.post.timeToRead"
          :author="$page.post.author"
        />
        <h1 class="post-title">{{ $page.post.title }}</h1>
        <div class="post-content" v-html="$page.post.content"></div>
      </div>
    </GridDefault>
  </div>
</template>

<script>
import PostMeta from "@/components/PostMeta";

export default {
  components: {
    PostMeta
  }
};
</script>

<page-query>
  query Post ($path: String!) {
    post: blogPost (path: $path) {
      id
      author
      title
      content
      date (format: "D MMMM YYYY")
      timeToRead
    }
  }
</page-query>

<style lang="scss">
.post {
  grid-area: content;

  > * + * {
    margin-top: 2rem;
  }
}

.post-content {
  * + {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 4rem;
    }
  }
}

.go-back {
  font-size: 0.9rem;
}
</style>