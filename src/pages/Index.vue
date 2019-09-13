<template>
  <Layout>

    <div class="intro">
      <h1 class="intro__heading">Johan Dahl</h1>
      <h2 class="intro__subheading">Developer, designer & hobby photographer</h2>
      <p class="intro__preamble">Hello. I'm a designer and front-end web developer residing in Malmö, Sweden. I enjoy designing and building web sites, photography, culture, art and the humanities.</p>
    </div>

    <div class="contact">
      <h3 class="contact__heading">Get in touch</h3>
      <ul class="contact__methods">
        <li>
          Email: johan.devotee@gmail.com
        </li>
        <li>
          Github
        </li>
        <li>
          Linkedin
        </li>
      </ul>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Johan Dahl'
  }
}
</script>

<style lang="scss">

.intro {
  margin-bottom: 2rem;
}

.intro__heading {
  font-size: 3rem;
  margin-bottom: 0;
}

.intro__subheading {
  font-size: 1rem;
  font-weight: 300;
}

.intro__preamble {
  margin-top: 3rem;
}

</style>