<template>
    <div>
        <banner-section imgFilename="Events/Events.jpg" preTitle="Wadduwa Beach Villa" title="Wedding Reception Venue"
                        description="Open air and beach weddings"/>

        <v-container class="py-12">
            <h2 class="display-2">Enjoy the Luxury of an Indoor & Outdoor Wedding</h2>
            <p class="pt-5 mb-0">
                You can book the entire 1.5 acre property exclusively for your special day.
            </p>
            <p class="mb-0">Brand new picturesque, contemporary reception hall (200 pax seating)</p>
            <p class="mb-0">Open air/beach weddings (up to 400 pax)</p>
            <p>
                <a href="tel:+0094713770692"><b>Get in touch with us at +0094713770692</b></a>
            </p>

            <v-row no-gutters v-for="(feature, index) in features" :key="index">
                <v-col cols="12" md="6" class="pa-4"
                       :order="getImageOrder(index)">
                    <v-img :src="require('@/assets/Events/' + feature.image)"
                           gradient="360deg, rgba(0,0,0,0.15) 5%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.13) 100%"/>
                </v-col>

                <v-col cols="12" md="6" order="1" class="pa-4">
                    <v-layout wrap fill-height justify-center align-center>
                        <h3 class="headline white--text text-uppercase" style="max-width: 400px">{{feature.title}}</h3>
                    </v-layout>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';

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
    BannerSection
  },
  data() {
    return {
      bannerHeight: null,
      features: [
        {
          image: '1.jpg',
          title: 'Create a bespoke experience'
        },
        {
          image: '2.jpg',
          title: '1.5 Acre Landscaped Garden with outdoor living and dining areas',

        },
        {
          image: '3.jpg',
          title: 'Complimentary double room on FB basis for newlywed couples',

        },
        {
          image: '4.jpg',
          title: 'Wedding pre-shoot free of charge',

        },
        {
          image: '5.jpg',
          title: 'Corkage free for BYO',

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
