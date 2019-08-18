<template>
	<div>
		<header class="header">
			<nav class="nav wrapper">
				<g-link class="nav__link" to="/">Johan Dahl</g-link>
				<g-link class="nav__link" to="/contact">Contact</g-link>
				<g-link class="nav__link" to="/blog">Blog</g-link>
			</nav>
		</header>
		<div class="wrapper">
			<slot/>
		</div>
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<style>
.header {
	padding-bottom: 1.5rem;
	margin: 3rem 0;
	border-bottom: 1px solid #ebebeb;
}

.nav {
	display: flex;
	justify-content: center;
	font-size: 1.5rem;
}

.nav__link + .nav__link {
	margin-left: 30px;
}
</style>
