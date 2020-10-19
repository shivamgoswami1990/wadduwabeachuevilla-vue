<template>
    <div>
        <banner-section imgFilename="Villas/Villas.jpg" preTitle="Wadduwa Beach Villa" title="Our Villas"
                        description="Rooms and Villas"/>

        <v-container class="py-12">
            <v-card flat tile>
                <v-tabs v-model="tab" centered dark height="80" background-color="black" show-arrows>
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab v-for="(room, index) in rooms" :href="'#tab-' + index" :key="index">
                        <v-avatar size="80" tile class="hidden-sm-and-down mr-2">
                            <v-img :src="require('@/assets/Villas/rooms/' + room.parentDir + '/' + room.images[0])"></v-img>
                        </v-avatar>
                        {{room.name}}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="(room, index1) in rooms" :value="'tab-' + index1" :key="index1">
                        <v-card flat tile color="black" class="pt-10">

                            <!-- Image carousel, facilities & description -->
                            <v-row>
                                <v-col cols="12" md="7">
                                    <v-carousel hide-delimiter-background id="carousel-container"
                                                delimiter-icon="mdi-minus" height="500">
                                        <v-carousel-item v-for="(image, index2) in room.images" :key="index2"
                                                         :src="require('@/assets/Villas/rooms/' + room.parentDir + '/' + image)"
                                                         reverse-transition="fade-transition"
                                                         transition="fade-transition">
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-col>

                                <v-col cols="12" md="5">
                                    <h2 class="headline font-weight-bold">{{room.name}}</h2>

                                    <div class="my-2">
                                        <v-chip color="primary" outlined label class="mr-2 mt-2 mb-1"
                                                v-for="(facility, index3) in room.facilities" :key="index3">
                                            <v-icon left>mdi-server-plus</v-icon> {{facility}}
                                        </v-chip>
                                    </div>

                                    <v-row no-gutters>
                                        <v-col cols="12" md="4">
                                            <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Capacity</p>
                                            <p class="mt-0 pt-0">{{room.people}} people</p>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Starting from</p>
                                            <p class="mt-0 pt-0">USD {{room.price}}</p>
                                        </v-col>
                                    </v-row>

                                    <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Description</p>
                                    <p class="text-justify">{{room.description}}</p>

                                    <btn-with-icon :href="room.altLink" :icon-src="room.btnBookWithIconPath"/>
                                </v-col>
                            </v-row>
                            <!-- Image carousel, facilities & description -->

                        </v-card>
                    </v-tab-item>
                </v-tabs-items>

            </v-card>
        </v-container>
    </div>
</template>

<style lang="scss">
    #carousel-container {
        .v-image {
            .v-image__image.v-image__image--cover {
                background-size: contain !important;
            }
        }
    }
</style>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';
import BtnWithIcon from '@/components/BtnWithIcon.vue';
import ab from '@/assets/Footer/ab.png';
import ex from '@/assets/Footer/ex.png';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Honeymoon Villa → Family Villa → Double Room → %s',
    meta: [
      { name: 'name', content: 'Luxury villas in Wadduwa' },
      {
        name: 'description',
        content: 'Come and enjoy your stay at luxury villas with outdoor pool,'
                        + ' beach view and restaurant'
      }
    ]
  },
  components: {
    BannerSection, BtnWithIcon
  },
  data() {
    return {
      bannerHeight: null,
      tab: null,
      rooms: [],
      ab,
      ex
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
    this.rooms = this.availableRooms();

    if (this.$route.params !== undefined && this.$route.params !== null) {
      if (Object.keys(this.$route.params).length > 0) {
        // Set the tab id & scroll to  iy
        this.tab = 'tab-' + this.$route.params.index;
        this.$vuetify.goTo(
          document.getElementsByClassName('v-tabs-items')[0], {
            offset: -500
          }
        );
      }
    }
  }
};
</script>
