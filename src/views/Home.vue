<template>
  <div>
    <!-- Video section -->
    <vue-video-section
            :elementId="'content-video'"
            :ref="'content-video'"
            :mp4Source="require('../assets/background.mp4')"
            :mobileBreakpoint="992"
            :desktopHeight="videoHeight"
            :mobileHeight="450"
            :playsinline="true"
            :loop="true"
            :autoplay="true"
            :autobuffer="true"
            :muted="true"
    >
      <div slot="overlay-content" class="overlay-content">
        <v-container fluid :style="{ height: videoHeight + 'px' }">
          <v-layout justify-center align-start fill-height column wrap id="video-section">
            <div class="title text--secondary">Sri Lanka</div>
            <div class="display-4 white--text">Wadduwa Beach Villas</div>
            <div class="display-1 white--text text--secondary">A local icon of private luxury</div>
          </v-layout>
        </v-container>
      </div>
    </vue-video-section>
    <!-- Video section -->

    <h2 class="white--text">For our guests</h2>
  </div>
</template>

<style lang="scss">
  #video-section {
    padding-left: 200px;

    div.title, div.display-4 {
      padding-bottom: 20px;
    }
  }

  .vue-video-section__overlay-content-wrapper__content-wrapper {
    background: radial-gradient(ellipse at left,transparent 0,transparent 30%,#000 138%,#000 0);
  }
</style>

<script>
// @ is an alias to /src
import VueVideoSection from 'vue-video-section';

export default {
  components: {
    VueVideoSection
  },
  data() {
    return {
      videoHeight: null
    }
  },
  mounted() {
    this.videoHeight = this.$vuetify.breakpoint.height - 75;
  }
}
</script>
