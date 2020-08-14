<template>
    <div class="front-page-wrapper">
        <div class="front-page-splash content-padding">
            <div class="intro">
                <h1 class="intro__heading">Johan Dahl</h1>
                <h2 class="intro__subheading">Developer, designer & hobby photographer</h2>
                <p
                    class="intro__preamble"
                >Hello. I'm a designer and front-end web developer residing in Malmö, Sweden. I enjoy designing and building web sites, snapping pictures, drinking beer and pretending like I know philosophy.</p>
                <div class="contact">
                    <h3 class="mt-8 mb-4">Get in touch</h3>
                    <ul class="contact__methods">
                        <li>
                            <strong>Email:</strong> johan.devotee@gmail.com
                        </li>
                        <li>
                            <a
                                href="https://github.com/kyotoprotokollet"
                                rel="noreferrer noopener"
                            >Github</a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/johan-dahl-57848591/"
                                rel="noreferrer noopener"
                            >Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="profile-image">
                <g-image
                    src="~/assets/images/johandahl.jpg"
                    width="500"
                    alt="A picture of me, Johan Dahl"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'About Johan Dahl',
    },
}
</script>

<style lang="scss">
.front-page-wrapper {
    height: 100vh;
    padding-top: 30px;

    @include breakpoint(medium) {
        padding-top: 0;
        display: flex;
        flex-direction: column;
    }
}

.front-page-splash {
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 45px;
    margin: auto;

    @include breakpoint(medium) {
        grid-template-columns: 2fr 1fr;
    }
}

.intro {
    margin-bottom: 2rem;
    grid-row-start: 2;

    @include breakpoint(medium) {
        grid-row-start: 1;
    }
}

.intro__heading {
    font-size: 3rem;
    margin-bottom: 0.25em;
}

.intro__subheading {
    font-size: 1rem;
    font-weight: 300;
}

.intro__preamble {
    margin-top: 3rem;
}

.profile-image {
    img {
        max-width: 33%;
        border-radius: 50%;

        @include breakpoint(medium) {
            max-width: 100%;
        }
    }
}

.contact__methods {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;

    li {
        margin-bottom: 0.5em;
    }
}
</style>
