<template>
    <div>
        <banner-section imgFilename="restaurant.jpg" preTitle="Wadduwa Beach Villa" title="Restaurant"
                        description="The finest dining experience paired with panoramic ocean views"/>

        <v-container class="py-12">
            <v-layout justify-center align-start fill-height row wrap>
                <v-card tile flat color="black" width="190" height="140" class="seperator">
                    <v-card-title>LOCATION</v-card-title>
                    <v-card-text>Ground floor, Wadduwa Beach Villas</v-card-text>
                </v-card>

                <v-card tile flat color="black" width="200" height="140" class="seperator">
                    <v-card-title>OPENING TIMES</v-card-title>
                    <v-card-text>
                        Lunch: Sat - Thu, 12:00 - 14:30 | Dinner: Mon - Sat, 17:00 - 20:30
                    </v-card-text>
                </v-card>

                <v-card tile flat color="black" width="190" height="140" class="hidden-xs-only">
                    <v-card-title>CONTACT</v-card-title>
                    <v-card-text>wadduwabeachvilla@gmail.com</v-card-text>
                </v-card>
            </v-layout>

            <v-layout justify-center align-start fill-height row wrap>

                <!-- Desktop only carousel -->
                <v-sheet width="80%" min-width="400" color="black" class="hidden-xs-only">
                    <h2 class="display-2 mt-10 pt-5 text-center">Menus</h2>
                    <v-slide-group v-model="slideGroup" center-active show-arrows>
                        <v-slide-item v-for="(menu, index) in menus" :key="index" class="ma-4" v-slot:default="{ active, toggle }">

                            <!-- Hover comp -->
                            <v-hover v-slot:default="{ hover }">
                                <v-img :src="require('@/assets/menus/' + menu.image)" width="695" height="900" contain @click="toggle">

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
                    <h2 class="display-2 mt-10 pt-5 text-center">Menus</h2>
                    <v-card-text>
                        <v-carousel hide-delimiters height="600">
                            <v-carousel-item v-for="(menu, index) in menus" :key="index"
                                             :src="require('@/assets/menus/' + menu.image)"
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
                                <v-toolbar-title>Restaurant menu</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon light @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>

                            <v-card-text style="height: calc(100% - 48px)">
                                <v-layout align-center justify-center wrap fill-height>

                                    <v-img :src="require('@/assets/menus/' + selectedImagePath)"
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
    import BannerSection from "@/components/BannerSection.vue";

    export default {
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
                        image: 'breakfast.jpg',
                        title: 'Breakfast'
                    },
                    {
                        image: 'snack.jpg',
                        title: 'Half day snack'
                    },
                    {
                        image: 'bbq.jpg',
                        title: 'BBQ'
                    },
                    {
                        image: 'menu-1.jpg',
                        title: 'Menu 1'
                    },
                    {
                        image: 'menu-2.jpg',
                        title: 'Menu 2'
                    },
                    {
                        image: 'menu-3.jpg',
                        title: 'Menu 3'
                    }
                ]
            }
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
    }
</script>