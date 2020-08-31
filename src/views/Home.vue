<template>
  <div>
    <!-- Video section -->
    <vue-video-section
            :elementId="'content-video'"
            :ref="'content-video'"
            :mp4Source="require('../assets/Home/background.mp4')"
            :posterSource="require('../assets/Home/background.jpg')"
            :mobileBreakpoint="992"
            :desktopHeight="videoHeight"
            :mobileHeight="videoHeight"
            :playsinline="true"
            :loop="true"
            :autoplay="true"
            :autobuffer="true"
            :muted="true"
    >
      <div slot="overlay-content" class="overlay-content">
        <v-container :style="{ height: videoHeight + 'px' }">
          <v-layout justify-center align-start fill-height column wrap id="video-section">
            <div class="title text--secondary">Sri Lanka</div>
            <h1 class="white--text" :class="$vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4'">
              Wadduwa Beach Villa
            </h1>
            <div class="display-1 white--text text--secondary">A local icon of private luxury</div>
            <router-link class="title" :style="{ color: $vuetify.theme.currentTheme.primary }"
                         :to="{ name: 'facilities' }">
              Find out more about our packages
            </router-link>

          </v-layout>
        </v-container>
      </div>
    </vue-video-section>
    <!-- Video section -->

    <!-- Rooms section -->
    <v-container class="pt-12">
      <h2 class="display-2">The Villas</h2>
      <p class="text-justify pa-2">
        We provide a range of accommodation options that cater to different customer specifications.
        The main difference in each is the size of the rooms, living areas, and added amenities.
        All rooms and villas are situated on one and a half acres of landscaped, grassed land with
        coconut trees and other native flora and fauna.
      </p>

      <room-cards :data="rooms" :height="580"/>
    </v-container>
    <!-- Rooms section -->
  </div>
</template>

<style lang="scss">
  #video-section {
    div.title, h1 {
      padding-bottom: 20px;
    }
  }

  .vue-video-section__overlay-content-wrapper__content-wrapper {
    background: radial-gradient(ellipse at left,transparent 0,transparent 30%,#000 138%,#000 0);
  }

  .vue-video-section__overlay-content-wrapper__background, .vue-video-section__overlay-content-wrapper__content-wrapper {
    z-index: 3;
  }

  #content-video {
    z-index: 2;
  }
</style>

<script>
// @ is an alias to /src
import VueVideoSection from 'vue-video-section';
import RoomCards from '@/components/RoomCards.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Beach villas → Outdoor Events → Day out packages → Villas near Colombo → %s',
    meta: [
      { name: 'name', content: 'Visit luxury beach villas near Colombo' },
      { name: 'description', content: 'Come stay at an affordable luxury villa in Sri Lanka.' +
                'Enjoy great local cuisine outdoors by the beach' }
    ]
  },
  components: {
    VueVideoSection, RoomCards
  },
  data() {
    return {
      videoHeight: null,
      rooms: []
    }
  },
  mounted() {
    this.videoHeight = this.visibleViewportHeight();
    this.rooms = this.availableRooms();
  }
}
</script>
