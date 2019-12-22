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
            <v-card tile flat color="black" width="70%" min-width="400">
                <h2 class="display-2 mt-10 pt-5 text-center">Menus</h2>
                <v-card-text>
                    <v-carousel hide-delimiters height="600">
                        <v-carousel-item v-for="(menu, index) in menus" :key="index"
                                         :src="require('@/assets/' + menu.image)"
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
                menus: [
                    {
                        image: 'room-1.jpg',
                        title: 'A la Carte'
                    },
                    {
                        image: 'room-2.jpg',
                        title: 'Dinner'
                    },
                    {
                        image: 'room-3.jpg',
                        title: 'Snacks & Drinks'
                    },
                ]
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        }
    }
</script>