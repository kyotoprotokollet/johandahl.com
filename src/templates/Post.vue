<template>
	<Layout>
		<g-link to="/blog" class="go-back">Go Back</g-link>
        <PostMeta :date="$page.post.date" :timeToRead="$page.post.timeToRead"/>
		<div class="post-title">
			<h1>{{$page.post.title}}</h1>
		</div>
		<div class="post-content">
			<p v-html="$page.post.content" />
		</div>
	</Layout>
</template>

<script>
import PostMeta from '@/components/PostMeta'

export default {
    components: {
        PostMeta
	},
};
</script>

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

<style lang="scss">
.post-content {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 4rem;
	}
}

.go-back {
	font-size: .9rem;
}
</style>