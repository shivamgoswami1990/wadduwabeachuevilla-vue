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

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "image": [
          "https://www.wadduwabeachvilla.com/img/background.37f84a77.jpg",
          "https://www.wadduwabeachvilla.com/img/Restaurant.e29c832d.jpg"
        ],
        "@id": "https://www.wadduwabeachvilla.com",
        "name": "Wadduwa Beach Villas",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "36/17 Sanath",
          "addressLocality": "A J Perera Mawatha",
          "addressRegion": "Wadduwa",
          "postalCode": "12560",
          "addressCountry": "SL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.670724,
          "longitude": 79.9211593
        },
        "url": "https://www.wadduwabeachvilla.com",
        "priceRange": "$$",
        "telephone": "+94712532311",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "12:00",
            "closes": "14:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "17:00",
            "closes": "20:30"
          }
        ],
        "department": [
          {
            "@type": "Restaurant",
            "servesCuisine": "Sri Lankan",
            "priceRange": "$$",
            "image": [
              "https://www.wadduwabeachvilla.com/img/Restaurant.e29c832d.jpg"
            ],
            "name": "Wadduwa Beach Villas Restaurant",
            "telephone": "+94713770692",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "36/17 Sanath",
              "addressLocality": "A J Perera Mawatha",
              "addressRegion": "Wadduwa",
              "postalCode": "12560",
              "addressCountry": "SL"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "12:00",
                "closes": "14:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "17:00",
                "closes": "20:30"
              }
            ]
          }
        ],
        "menu": "https://wadduwabeachvilla.com/img/daymenu1.6fc6ace3.jpg",
        "acceptsReservations": "True"
      }
    </script>
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
