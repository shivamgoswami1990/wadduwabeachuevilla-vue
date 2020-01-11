<template>
    <div>
        <banner-section imgFilename="Facilities/Facilities.jpg" preTitle="Wadduwa Beach Villas" title="Facilities"
                        description="Luxury Villa Amenities"/>

        <v-container class="py-12">
            <h2 class="display-2">Seeking Privacy and Exclusivity ?</h2>
            <p class="pt-5">
                Wadduwa Beach Villas provide you with a custom experience, be it a day out or as a guest.
                Please view our videos for examples of events we have hosted.
                <router-link to="contactus"><b>Contact us</b></router-link>
                to create your own unique experience today.
            </p>
            <v-row no-gutters class="mt-10">
                <v-col cols="12" md="4" >
                    <vue-video-section
                            :elementId="'facilities-video'"
                            :ref="'facilities-video'"
                            :mp4Source="require('../assets/Facilities/1.mp4')"
                            :mobileBreakpoint="992"
                            :desktopHeight="900"
                            :mobileHeight="900"
                            :playsinline="true"
                            :loop="true"
                            :autoplay="true"
                            :autobuffer="true"
                            :muted="true"
                    />
                </v-col>

                <v-col cols="12" md="8">
                    <v-card flat tile height="100%" color="black" class="mx-5 pa-5" dark>
                        <v-card-title class="headline">Amenities</v-card-title>

                        <v-card-text>
                            <!-- Primary features -->
                            <v-chip color="primary" outlined label class="mr-2 mt-2 mb-1"
                                    v-for="(feature, index) in features" :key="index">
                                <v-icon left>mdi-server-plus</v-icon> {{feature}}
                            </v-chip>
                            <!-- Primary features -->

                            <!-- Amenities -->
                            <v-row no-gutters>
                                <v-col cols="12" md="6">
                                    <h3 class="mt-10 title white--text">Main features</h3>
                                    <ul>
                                        <li v-for="(feature, index) in mainFeatures" :key="index" class="pa-5 subtitle-1">
                                            {{feature}}
                                        </li>
                                    </ul>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <h3 class="mt-10 title white--text">Other features</h3>
                                    <ul>
                                        <li v-for="(feature, index) in otherFeatures" :key="index" class="pa-5 subtitle-1">
                                            {{feature}}
                                        </li>
                                    </ul>
                                </v-col>
                            </v-row>
                            <!-- Amenities -->

                            <!-- Contact -->
                            <v-layout justify-center align-start fill-height row wrap class="mt-10">
                                <v-responsive  height="100" class="seperator align-center">
                                    <p class="text-center">
                                        <router-link to="contactus" class="subtitle-1">Contact us</router-link>
                                    </p>
                                </v-responsive>

                                <v-responsive  height="100" class="seperator align-center">
                                    <p class="text-center">
                                        <a href="https://hotels.cloudbeds.com/reservation/3DqprA" target="_blank"
                                           class="subtitle-1">
                                            Book now
                                        </a>
                                    </p>
                                </v-responsive>

                                <v-responsive  height="100" class="seperator align-center">
                                    <p class="text-center">
                                        <router-link to="exclusive" class="subtitle-1">Exclusive bookings</router-link>
                                    </p>
                                </v-responsive>
                            </v-layout>
                            <!-- Contact -->

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
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
            margin-right: 5px;
            &:after {
                display: none;
            }
        }
    }
</style>

<script>
    // @ is an alias to /src
    import BannerSection from "@/components/BannerSection.vue";
    import VueVideoSection from 'vue-video-section';

    export default {
        metaInfo: {
            title: 'Wadduwa Beach Villa',
            titleTemplate: 'Facilities → %s',
            meta: [
                { name: 'name', content: 'Wadduwa Beach Villa facilities' },
                { name: 'description', content: 'Luxury Villa Amenities' }
            ]
        },
        components: {
            BannerSection,VueVideoSection
        },
        data() {
            return {
                bannerHeight: null,
                features: ['Free WiFi', 'Free Parking'],
                mainFeatures: [
                    'Pool and Baby Pool',
                    'Beach Access',
                    'Beach Volleyball',
                    'Badminton',
                    'Restaurant and BBQ',
                    'Food Action Stations',
                    'Music, DJ and Lighting'
                ],
                otherFeatures: [
                    'Facilities for Disabled Guests',
                    'BBQ Facilities',
                    'Sun Deck',
                    'Non-smoking Rooms',
                    'Satellite TV',
                    'Shared Kitchen'
                ]
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();

            //Scroll to top
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
</script>
