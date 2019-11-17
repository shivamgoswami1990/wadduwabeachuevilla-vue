<template>
  <div>
    <!-- Video section -->
    <vue-video-section
            :elementId="'content-video'"
            :ref="'content-video'"
            :mp4Source="require('../assets/background.mp4')"
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
      <v-row no-gutters>
        <v-col cols="12" v-for="(room, index) in rooms" :key="index" md="4">
          <v-card tile color="white" class="black--text ma-4" height="470px">
            <v-img height="250" :src="room.titleImg" class="white--text align-end" gradient="to bottom, transparent, rgba(0,0,0,0.8)">
              <v-card-title class="font-weight-bold">{{room.title}}</v-card-title>
            </v-img>

            <v-chip label color="primary" class="black--text font-weight-bold" style="position: absolute; top: 0; right: 0">
              USD 140
            </v-chip>

            <v-btn tile block color="primary" class="elevation-0 black--text font-weight-bold" height="45px">Book now</v-btn>
            <v-card-text class="black--text text-justify">
              {{room.description}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
</style>

<script>
// @ is an alias to /src
import VueVideoSection from 'vue-video-section';
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

export default {
  components: {
    VueVideoSection
  },
  data() {
    return {
      videoHeight: null,
      room1: room1,
      room2: room2,
      room3: room3,
      rooms: [
        {title: "Superior Two Bedroom Cottage", titleImg: room1, description: "The Superior Two Bedroom Cottage has a pool view and is located 30 meters from the sea shore. It has two separate bedrooms with attached bathroos, one with a sky view bathroom. This cottage includes a sitting and dining room with full kitchen, as well as an outside veranda and seating. Sleeps four adults."},
        {title: "Deluxe Two Bedroom Bungalow", titleImg: room2, description: "The Deluxe Two Bedroom Cottage has both a beach and pool view. The two rooms have two separate attached bathrooms and a kitchen. It has an enclosed veranda with 180 degree view. Sleeps four adults."},
        {title: "Just Two- Secluded Cottage", titleImg: room3, description: "The Just Two- Secluded Cottage has both a pool and beach view. The single bedroom cottage has an attached bathroom with kitchen and veranda which offers a 180 degree view of the greenery and lawn. It is secluded and offers privacy as it is located in a secluded area of the property. Sleeps two adults."},
      ]
    }
  },
  mounted() {
    this.videoHeight = this.$vuetify.breakpoint.height - 75;
    console.log(this.$vuetify.breakpoint);
  }
}
</script>
