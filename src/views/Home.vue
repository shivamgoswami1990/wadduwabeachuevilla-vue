<template>
  <div>
    <banner-section imgFilename="Home/background.jpg" preTitle="Sri Lanka" title="Wadduwa Beach Villas"
                    description="A local icon of private luxury"/>

    <!-- Rooms section -->
    <v-container class="pt-12">
<!--      <h2 class="display-2">The Villas</h2>-->
<!--      <p class="text-justify pa-2">-->
<!--        We provide a range of accommodation options that cater to different customer specifications.-->
<!--        The main difference in each is the size of the rooms, living areas, and added amenities.-->
<!--        All rooms and villas are situated on one and a half acres of landscaped, grassed land with-->
<!--        coconut trees and other native flora and fauna.-->
<!--      </p>-->

<!--      <room-cards :data="rooms" :height="580"/>-->
      <h2 class="display-2 pb-5">Customer Experiences</h2>
      <v-row>
        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/OTYkhfjebN0" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>
        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/UsIkY8Fxh_8" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>

        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/GKmHnM7akmU" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>
        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/UyyYWYJ0ssY" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>
        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/QxtqGKYJ2y8" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>
        <v-col cols="12" md="6">
          <iframe width="100%" :height="mobileVideoHeight" src="https://www.youtube.com/embed/brgFkkMHAjs" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Wadduwa Beach Villa | Travel stories" class="mt-5" rel="preconnect" allowfullscreen/>
        </v-col>
      </v-row>
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
import BannerSection from '@/components/BannerSection.vue';
import RoomCards from '@/components/RoomCards.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Beach villas → Outdoor Events → Day out packages → Villas near Colombo → %s',
    meta: [
      { name: 'name', content: 'Visit luxury beach villas near Colombo' },
      {
        name: 'description',
        content: 'Escape to one and a half acres of Sri Lankan hospitality with; landscaped palm gardens, restaurant,'
            + ' beachfront access, pool/baby pool, indoor & outdoor wedding venue at Wadduwa Beach Villas'
      }
    ]
  },
  components: {
    BannerSection
  },
  data() {
    return {
      videoHeight: null,
      rooms: []
    };
  },
  computed: {
    mobileVideoHeight() {
      return this.$vuetify.breakpoint.xsOnly ? 200 : 315;
    }
  },
  mounted() {
    this.videoHeight = this.visibleViewportHeight();
    this.rooms = this.availableRooms();
  }
};
</script>
