<template>
  <!-- <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>
    <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg"/>
    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="https://bento-starter.netlify.com/"
      >Documentation →</a
    >
  </div>-->
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="section1">
        <div class="fp-bg">
        </div>
      </div>
      <div class="section"></div>
    </full-page>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
#section1 .fp-bg {
  background: url("../assets/img/bannerTes.jpg");
  background-size: cover;
  background-position: center;
  width: auto;
  height: 100%;
  padding: 30px;
}
</style>
