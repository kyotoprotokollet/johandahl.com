<template>
    <div class="post-meta">
        <p class="post-meta__date"><span class="post-meta__icon">📅</span>{{date}}</p>
        <p class="post-meta__readtime"><span class="post-meta__icon">⏳</span>{{timeToRead}} min read</p>
    </div>
</template>

<script>
export default {
    name: 'PostMeta',
    props: ["date", "timeToRead"]
}
</script>

<style lang="scss">
.post-meta {
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

.post-meta__icon {
    margin-right: .5rem;
    font-size: .85rem;
}

.post-meta__date {
    margin-bottom: 5px;
}

.post-meta__readtime {
    margin-bottom: 0;
}

.post-meta__readmore {
    font-size: 1rem;
}
</style>