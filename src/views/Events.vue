<template>
    <div>
        <banner-section imgFilename="Events/Events.jpg" preTitle="Wadduwa Beach Villa" title="Wedding Reception Venue"
                        description="Open air and beach weddings" position="right"/>

        <v-container class="py-12">
            <h2 class="display-2">Enjoy the Luxury of an Indoor & Outdoor Wedding</h2>
            <p class="pt-5 mb-0">
                You can book the entire 1.5 acre property exclusively for your special day.
            </p>
            <p class="mb-0">Brand new picturesque, contemporary reception hall (350 pax seating)</p>
            <p class="mb-0">Open air/beach weddings (up to 400 pax)</p>
            <p>
                <a href="tel:+0094713770692"><b>Get in touch with us at +0094713770692</b></a>
            </p>

            <img-tile-section elongatedImgPath="Events/TileSection1/1.jpg"
                              v-bind:siblingImgPathList="['Events/TileSection1/3.jpg', 'Events/TileSection1/2.jpg']"/>

            <v-row no-gutters v-for="(feature, index1) in features.slice(0, 2)" :key="'firstRowItem-' + index1">
                <v-col cols="12" md="6" class="pa-4"
                       :order="getImageOrder(index1)">

                  <v-carousel hide-delimiter-background id="carousel-container"
                              delimiter-icon="mdi-minus" height="500">
                    <v-carousel-item v-for="(imagePath, index2) in feature.imageList" :key="'firstCarouselItem-' + index2"
                                     :src="require('@/assets/Events/' + imagePath)"
                                     reverse-transition="fade-transition"
                                     transition="fade-transition">
                    </v-carousel-item>
                  </v-carousel>
                </v-col>

                <v-col cols="12" md="6" order="1" class="pa-4">
                    <v-layout wrap fill-height justify-center align-center>
                        <h3 class="headline white--text wedding-h3" style="max-width: 400px" v-html="feature.title"/>
                    </v-layout>
                </v-col>
            </v-row>

          <img-tile-section elongatedImgPath="Events/TileSection2/1.jpg"
                            v-bind:siblingImgPathList="['Events/TileSection2/2.jpeg', 'Events/TileSection2/2.jpg']"/>

          <v-row no-gutters v-for="(feature, index1) in features.slice(2)" :key="'secondRowItem-' + index1">
            <v-col cols="12" md="6" class="pa-4"
                   :order="getImageOrder(index1)">

              <v-carousel hide-delimiter-background id="carousel-container"
                          delimiter-icon="mdi-minus" height="500">
                <v-carousel-item v-for="(imagePath, index2) in feature.imageList" :key="'secondCarouselItem-' + index2"
                                 :src="require('@/assets/Events/' + imagePath)"
                                 reverse-transition="fade-transition"
                                 transition="fade-transition">
                </v-carousel-item>
              </v-carousel>
            </v-col>

            <v-col cols="12" md="6" order="1" class="pa-4">
              <v-layout wrap fill-height justify-center align-center>
                <h3 class="headline white--text wedding-h3" style="max-width: 400px" v-html="feature.title"/>
              </v-layout>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
  .wedding-h3 span {
    display: block;
    font-family: "Roboto", sans-serif !important;
  }
</style>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';
import ImgTileSection from '@/components/ImgTileSection.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Corporate functions → Private pool → Dedicated restaurant → %s',
    meta: [
      { name: 'name', content: 'Exclusive bookings near Colombo, Sri Lanka' },
      { name: 'description', content: 'Contact us for your next corporate functions, weddings and family outings' }
    ]
  },
  components: {
    BannerSection, ImgTileSection
  },
  data() {
    return {
      bannerHeight: null,
      features: [
        {
          imageList: ['Carousel1/3.jpg', 'Carousel1/2.jpeg', 'Carousel1/1.jpeg'],
          title: '<span>Is it to be an intimate indoor, or an open-air outdoor wedding by the beach?</span>'
              + '<span>We offer both at the same location - create a bespoke experience.</span>'
              + '<span>Take your mind off things and plan your perfect day the way it should be.</span><br/>'
              + '<span>We are ready to answer your questions, and we look forward to sharing this special occasion with you!</span>'
        },
        {
          imageList: ['Carousel2/1.jpg', 'Carousel2/2.jpg', 'Carousel2/3.jpeg'],
          title: 'One and a half acre landscaped garden with outdoor living and dining area - a seamless blend towards the beachfront and onto the beach',

        },
        {
          imageList: ['Carousel3/1.jpg', 'Carousel3/2.jpeg', 'Carousel3/3.jpeg'],
          title: '<span>As part of our Wedding package, we offer a complimentary double room on FB basis for newlywed couples.</span><br/>'
              + '<span>Furthermore, we have five villas on site. These villas can be reserved at an additional cost to cater for overnight, or extended stays for you and your loved ones.</span>',

        },
        {
          imageList: ['Carousel4/1.jpeg', 'Carousel4/2.jpeg', 'Carousel4/3.jpg'],
          title: 'Wedding pre-shoot free of charge',

        },
        {
          imageList: ['Carousel5/1.jpg', 'Carousel5/2.jpeg'],
          title: '<span>Why choose us?</span><br/>'
              + '<span>Good question!  Our service and property isn’t simply four walls and curtains - we seamlessly blend; the beach, one and a half acres of landscaped gardens, the pool, and a formal airconditioned wedding hall.</span>'
              + '<span>Also, BYO and no corkage fee !</span>',

        }
      ]
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
  },
  methods: {
    getImageOrder(index) {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 1;
      }
      if (index % 2 === 0) {
        return 2;
      }
      return 1;
    }
  }
};
</script>
