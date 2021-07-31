<template>
    <div>
        <banner-section imgFilename="Guidelines/Guidelines.jpg" preTitle="Wadduwa Beach Villas" title="FAQs and Guidelines"
                        description="Help us make your experience more comfortable"/>

        <v-container class="py-12">
            <v-layout justify-center align-start fill-height row wrap>
                <v-card tile flat color="black" width="250" height="140" class="seperator">
                    <v-card-title>LOCATION</v-card-title>
                    <v-card-text>Ground floor, Wadduwa Beach Villa</v-card-text>
                </v-card>

                <v-card tile flat color="black" width="250" height="140" class="seperator">
                    <v-card-title>OPENING TIMES</v-card-title>
                    <v-card-text>
                        <p class="pa-0 ma-0">Mon - Sun, 08:00 - 23:00</p>
                    </v-card-text>
                </v-card>

                <v-card tile flat color="black" width="300" height="140" class="hidden-xs-only">
                    <v-card-title>CONTACT</v-card-title>
                    <v-card-text>
                        <p class="pa-0 ma-0">wadduwabeachvilla@gmail.com</p>
                        <p class="pa-0 ma-0">wbv.manager@wadduwabeachvilla.com</p>
                    </v-card-text>
                </v-card>
            </v-layout>

            <v-layout justify-center align-start fill-height row wrap>

                <!-- Desktop only carousel -->
                <v-sheet width="80%" min-width="400" color="black" class="hidden-xs-only">
                    <h2 class="display-2 mt-10 pt-5 text-center">FAQs and Guidelines</h2>
                    <v-slide-group v-model="slideGroup" center-active show-arrows>
                        <v-slide-item v-for="(menu, index) in menus" :key="index" class="ma-4" v-slot:default="{ active, toggle }">

                            <!-- Hover comp -->
                            <v-hover v-slot:default="{ hover }">
                                <v-img :src="require('../assets/Guidelines/docs/' + menu.image)" width="695"
                                       height="900" contain eager @click="toggle">

                                    <!-- Overlay comp -->
                                    <v-overlay :value="hover" absolute z-index="3">
                                        <v-layout justify-center align-center fill-height row wrap>

                                            <v-btn tile depressed color="primary" height="40"
                                                   class="black--text" @click="showDialog(menu.image)">
                                                <v-icon>mdi-fullscreen</v-icon> Open
                                            </v-btn>
                                        </v-layout>
                                    </v-overlay>
                                    <!-- Overlay comp -->

                                    <v-layout fill-height row wrap justify-end>
                                        <v-btn tile depressed width="100%" color="gray" height="40"
                                               class="font-weight-bold subtitle-1 ma-0 align-self-end justify-center"
                                               :class="active ? 'primary black--text' : ''">
                                            {{menu.title}}
                                        </v-btn>
                                    </v-layout>
                                </v-img>
                            </v-hover>
                            <!-- Hover comp -->

                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
                <!-- Desktop only carousel -->

                <!-- Mobile only carousel -->
                <v-card tile flat color="black" width="70%" min-width="400" class="hidden-sm-and-up">
                    <h2 class="display-2 mt-10 pt-5 text-center">FAQs and Guidelines</h2>
                    <v-card-text>
                        <v-carousel hide-delimiters height="600">
                            <v-carousel-item v-for="(menu, index) in menus" :key="index"
                                             :src="require('../assets/Guidelines/docs/' + menu.image)"
                                             reverse-transition="fade-transition"
                                             transition="fade-transition">

                                <v-layout justify-center align-end fill-height row wrap>
                                    <v-btn tile block color="gray" height="50" class="font-weight-bold subtitle-1">
                                        {{menu.title}}
                                    </v-btn>
                                </v-layout>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card-text>
                </v-card>
                <!-- Mobile only carousel -->

                <!-- Fullscreen dialog comp -->
                <v-dialog v-model="dialog" :width="viewportWidth" v-if="selectedImagePath !== null">
                        <v-card tile flat color="black" :width="viewportWidth" :height="bannerHeight - 100">
                            <v-toolbar light color="primary" dense>
                                <v-toolbar-title>Guidelines menu</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon light @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>

                            <v-card-text style="height: calc(100% - 48px)">
                                <v-layout align-center justify-center wrap fill-height>

                                    <v-img :src="require('../assets/Guidelines/docs/' + selectedImagePath)"
                                           :max-height="bannerHeight - 150" contain>
                                    </v-img>

                                </v-layout>
                            </v-card-text>
                        </v-card>
                </v-dialog>
                <!-- Fullscreen dialog comp -->

            </v-layout>
        </v-container>
    </div>
</template>

<style lang="scss">
    .seperator {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            border-right: 1px solid #FADE03;
        }

        @media screen and (max-width: 600px) {
            &:after {
                display: none;
            }
        }
    }
</style>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Guidelines → Outdoor BBQ → Buffet → Beach resort dining → Dayout → %s',
    meta: [
      { name: 'name', content: 'Wadduwa Beach Villa Guidelines' },
      {
        name: 'description',
        content: 'Visit our villa for a great outdoor dining experience by'
                        + ' the beach. Help us make your experience more comfortable.'
      }
    ]
  },
  components: {
    BannerSection
  },
  data() {
    return {
      bannerHeight: null,
      viewportWidth: null,
      slideGroup: null,
      dialog: false,
      selectedImagePath: null,
      menus: [
        {
          image: '1.jpg',
          title: 'Page 1'
        },
        {
          image: '2.jpg',
          title: 'Page 2'
        },
        {
          image: '3.jpg',
          title: 'Page 3'
        },
        {
          image: '4.jpg',
          title: 'Page 4'
        },
        {
          image: '5.jpg',
          title: 'Page 5'
        },
        {
          image: '6.jpg',
          title: 'Page 6'
        }
      ]
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
    this.viewportWidth = this.visibleViewportWidth();
  },
  methods: {
    showDialog(imagePath) {
      this.dialog = true;
      this.selectedImagePath = imagePath;
    }
  }
};
</script>
