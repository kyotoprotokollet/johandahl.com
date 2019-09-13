<template>
    <div class="post-preview">
        <div class="post-preview__meta">
            <p class="post-preview__date"><span class="post-preview__icon">📅</span>{{post.date}}</p>
            <p class="post-preview__readtime"><span class="post-preview__icon">⏳</span>{{post.timeToRead}} min read</p>
        </div>
        <g-link :to="post.path"><h1 class="post-preview__title">{{post.title}}</h1></g-link>
        <p class="post-preview__description">{{post.description}}</p>
        <g-link :to="post.path" class="post-preview__readmore">Read More...</g-link>
    </div>
</template>

<script>
export default {
    props: ["post"]
};
</script>

<style lang="scss">

.post-preview {
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--color-border);
}

.post-preview__icon {
    margin-right: .5rem;
    font-size: .85rem;
}

.post-preview__meta {
    display: flex;
    position: relative;
    margin-bottom: .5rem;
    font-family: var(--font-code);
    font-size: 1rem;
    color: var(--color-font--light);

    * + * {
        margin-left: 1rem;

        &:before {
            content: '|';
            display: inline;
            margin-right: 1rem;
        }
    }
}

.post-preview__date {
    margin-bottom: 5px;
}

.post-preview__readtime {
    margin-bottom: 0;
}

.post-preview__readmore {
    font-size: 1rem;
}

</style>