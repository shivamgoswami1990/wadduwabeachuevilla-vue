<template>
    <div>
        <banner-section imgFilename="Offers/Offers.jpg" preTitle="Wadduwa Beach Villas"
                        title="Offers"
                        description="Our current promotions and offers"/>

        <v-container class="py-12">
          <h2 class="display-2">Our current promotions and offers</h2>
          <p class="pt-5 pb-10 mb-0">
            An affordable venue with exciting offers for you and those closest to you
          </p>

          <v-img class="mb-10" :src="require('@/assets/Offers/1.png')" contain/>
          <v-img class="mb-10" :src="require('@/assets/Offers/2.png')" contain/>
          <v-img :src="require('@/assets/Offers/3.png')" contain/>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Offers → Current promotions → %s',
    meta: [
      { name: 'name', content: 'Wadduwa Beach Villa Offers' },
      {
        name: 'description',
        content: 'Our current promotions and offers'
      }
    ]
  },
  components: {
    BannerSection
  },
  data() {
    return {
      bannerHeight: null
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
  },
  methods: {}
};
</script>
