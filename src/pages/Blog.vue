<template>
    <div>
        <Header></Header>
        <GridDefault>
            <div class="post-previews">
                <PostPreview
                    v-for="edge in $page.allBlogPost.edges"
                    :key="edge.node.id"
                    :post="edge.node"
                />
            </div>
        </GridDefault>
    </div>
</template>

<style lang="scss">
.post-previews {
    grid-area: content;
}
</style>

<script>
import PostPreview from '@/components/PostPreview'
export default {
    components: {
        PostPreview,
    },
    metaInfo: {
        title: 'Blog',
    },
}
</script>

<page-query>
query {
    allBlogPost {
        totalCount
        edges {
            node {
                id
                author
                title
                timeToRead
                description
                date (format: "D MMMM YYYY")
                path
            }
        }
    }
}
</page-query>
