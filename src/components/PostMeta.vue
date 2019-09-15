<template>
    <div class="post-meta">
        <p v-if="date" class="post-meta__date"><span class="post-meta__icon">📅</span>{{date}}</p>
        <p v-if="timeToRead" class="post-meta__readtime"><span class="post-meta__icon">⏳</span>{{timeToRead}} min read</p>
        <p v-if="author" class="post-meta__readtime">By {{author}}</p>
    </div>
</template>

<script>
export default {
    name: 'PostMeta',
    props: ["date", "timeToRead", "author"]
}
</script>

<style lang="scss">
.post-meta {
    display: flex;
    position: relative;
    border-bottom: 5px solid #f1f1f1;
    font-family: var(--font-code);
    font-size: 1rem;
    color: var(--color-font--light);
    margin-bottom: 2rem;
    
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