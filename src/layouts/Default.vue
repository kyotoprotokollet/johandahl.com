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
body {
	font-family: georgia, serif;
	margin:0;
	padding:0;
	line-height: 1.6;
	font-size: 18px;
	color: #111;
}

.header {
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;
	border-bottom: 1px solid #ebebeb;
}

p,
h1,h2,h3,h4,h5,h6 {
	margin-bottom: .5em;
}

.wrapper {
	max-width: 760px;
	margin: 0 auto;
	padding-left: 20px;
	padding-right: 20px;
}

.header {
	margin: 3rem 0;
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
