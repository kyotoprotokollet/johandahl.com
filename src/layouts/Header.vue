<template>
    <header class="header">
        <nav class="nav container content-padding">
            <g-link class="nav__link" to="/">About</g-link>
            <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
    </header>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<style lang="scss">
.header {
    padding: 1.5rem;
    margin-bottom: 3rem;
}

.nav {
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;

    a {
        padding: 5px 15px;
    }
}

.nav__link + .nav__link {
    margin-left: 30px;
}
</style>
