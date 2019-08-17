// Template for blog posts.
<template>
  <Layout>
    <g-link to="/blog" class="link">Go Back</g-link>
    <div class="post-title">
		<h1>{{$page.post.title}}</h1>
    </div>
    <div class="post-meta">
		<p class="post-date">{{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
		<p class="post-tags">{{ $page.post.tags}}</p>
    </div>
    <div class="post-content">
		<p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
	query Post ($path: String!) {
		post: post (path: $path) {
			id
			title
			content
			date (format: "D MMMM YYYY")
			timeToRead
			tags
		}
	}
</page-query>

<style>
</style>