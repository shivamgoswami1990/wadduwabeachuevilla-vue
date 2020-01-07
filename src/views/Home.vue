<template>
  <div>
    <!-- Video section -->
    <vue-video-section
            :elementId="'content-video'"
            :ref="'content-video'"
            :mp4Source="require('../assets/Home/background.mp4')"
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
            <h1 class="white--text" :class="$vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4'">Wadduwa Beach Villas</h1>
            <div class="display-1 white--text text--secondary">A local icon of private luxury</div>
            <a class="title" :style="{ color: $vuetify.theme.currentTheme.primary }">
              Find out more about our packages
              <v-icon color="primary" size="30">mdi-chevron-right</v-icon>
            </a>

          </v-layout>
        </v-container>
      </div>
    </vue-video-section>
    <!-- Video section -->

    <!-- Rooms section -->
    <v-container class="pt-12">
      <h2 class="display-2">The Villas</h2>
      <p class="text-justify pa-2">
        We provide a range of accommodation options from Superior cottages to Deluxe double occupancy rooms.
        The main difference in each is the size of the rooms and living areas and the size of the beds.
        The bungalows are situated on an one and a half acre (6070 square meter) landscaped, grassed land with
        coconut and other native trees.
      </p>
      <v-layout wrap justify-center align-center>
        <v-col cols="12" v-for="(room, index) in rooms" :key="index" md="4">
          <v-responsive aspect-ratio="16/9">
          <v-card tile color="white" class="black--text ma-4" height="480">
            <v-img height="250" :src="require('@/assets/' + room.images[0])" class="white--text align-end" gradient="to bottom, transparent, rgba(0,0,0,0.8)">
              <v-card-title class="font-weight-bold">{{room.name}}</v-card-title>
            </v-img>

            <v-chip label color="primary" class="black--text font-weight-bold" style="position: absolute; top: 0; right: 0">
              Starting from USD {{room.price}}
            </v-chip>

            <v-btn tile block color="primary" class="elevation-0 black--text font-weight-bold"
                   height="45px" :href="room.altLink" target="_blank">
              Book now
            </v-btn>
            <v-card-text class="black--text text-justify">
              {{room.description}}
            </v-card-text>
          </v-card>
          </v-responsive>
        </v-col>
      </v-layout>
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

export default {
  components: {
    VueVideoSection
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
