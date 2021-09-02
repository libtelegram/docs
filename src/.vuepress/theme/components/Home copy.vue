<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <div class="inner">
        <div class="left">
          <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" />
        </div>

        <div class="right">
          <h1
            v-if="data.heroText !== null"
            id="main-title"
          >{{ data.heroText || $title || 'Vue.js' }}</h1>

          <h2 class="tagline" v-if="data.tagline" v-html="data.tagline"></h2>

          <div v-if="data.actionButtons.length" class="actions">
            <HomeActionLink
              v-for="item in data.actionButtons"
              :item="item"
              :extra-class="item.extraClass"
              :key="item.link"
            />
          </div>
        </div>
      </div>
    </header>

    <section v-if="data.features && data.features.length" class="section-features">
      <div class="inner">
        <div v-for="(feature, index) in data.features" :key="index" class="feature">
          <h2>{{ feature.title }}</h2>
          <p v-html="feature.details"></p>
        </div>
      </div>
    </section>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
import HomeActionLink from '@theme/components/ui/HomeActionLink.vue'

export default {
  name: 'Home',
  components: {
    NavLink,
    HomeActionLink,
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="scss">
@import '@theme/styles/_settings.scss';

.hero {
  padding: 100px 40px 30px;

  html.with-beta-banner & {
    padding-top: calc(100px + 3rem);
  }

  .inner {
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .left {
    width: 39%;
    text-align: right;
    img {
      width: 215px;
      height: 215px;
      margin-right: 60px;
    }
  }
  .actions {
    display: flex;
    margin-top: 2.3rem;
  }
  .right {
    width: 61%;
    h1 {
      display: none;
    }
    .tagline {
      font-size: 3.2rem;
      padding: 0;
      margin: 0;
      border-bottom: 0;
      font-weight: 300;
    }
  }
  @media (max-width: $MQNarrow) {
    .inner {
      flex-direction: column;
      text-align: center;
    }
    .left {
      img {
        margin-right: 0;
      }
    }
    .left,
    .right {
      width: 100%;
      text-align: center;
    }
    .right {
      h1 {
        display: block;
      }
      .tagline {
        font-size: 2rem;
      }
    }
    .actions {
      flex-direction: column;
      place-items: center;
      a {
        height: 28px;
        margin-bottom: 10px;
      }
    }
  }
}

.section-features {
  padding: 25px 40px 45px;
  .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: $MQNarrow) {
      flex-direction: column;
    }
  }
  .feature {
    h2 {
      font-size: 1.5em;
      border-bottom: 0;
      color: $accentColor;
      font-weight: 400;
    }
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;
    @media (max-width: $MQNarrow) {
      max-width: 100%;
      width: 100%;
      &::before {
        content: '—';
        color: $accentColor;
      }
    }
  }
}

.footer {
  width: 100%;
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid $border;
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        height: auto;
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1{
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;  
      }
    }
  }
}
</style>