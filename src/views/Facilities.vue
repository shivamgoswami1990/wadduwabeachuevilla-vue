<template>
    <div>
        <banner-section imgFilename="Facilities/Facilities.jpg" preTitle="Wadduwa Beach Villa" title="Facilities"
                        description="Luxury Villa Amenities"/>

        <v-container class="py-12">
            <h2 class="display-2">Seeking Privacy and Exclusivity ?</h2>
            <p class="pt-5 mb-0">
                We are able to use our facilities to provide you with a custom experience,
                be it as a day out package or as an in-house guest.
            </p>
            <p class="mb-0">Please view our videos for examples of events we have hosted.</p>
            <p>
                <router-link :to="{ name: 'contactus' }"><b>Contact us</b></router-link>
                to create your own unique experience today.
            </p>

            <v-row no-gutters class="mt-10">
                <v-col cols="12" md="7" class="pt-12">
                    <vue-video-section
                            :elementId="'facilities-video'"
                            :ref="'facilities-video'"
                            :mp4Source="require('../assets/Facilities/3.mp4')"
                            :mobileBreakpoint="992"
                            :desktopHeight="720"
                            :mobileHeight="720"
                            :playsinline="true"
                            :loop="true"
                            :autoplay="true"
                            :autobuffer="true"
                            :muted="true"
                    />
                </v-col>

                <v-col cols="12" md="5">
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
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row no-gutters class="mt-10">
                <v-col cols="12" md="4" class="hidden-sm-and-down">
                    <vue-video-section
                            :elementId="'facilities1-video'"
                            :ref="'facilities1-video'"
                            :mp4Source="require('../assets/Facilities/1.mp4')"
                            :mobileBreakpoint="992"
                            :desktopHeight="720"
                            :mobileHeight="720"
                            :playsinline="true"
                            :loop="true"
                            :autoplay="true"
                            :autobuffer="true"
                            :muted="true"
                    />
                </v-col>

                <v-col cols="12" md="4">
                    <!-- Contact -->
                    <v-layout justify-center align-center fill-height column wrap>
                        <v-responsive class="align-center">
                            <p class="text-center">
                                <router-link :to="{ name: 'contactus' }" class="subtitle-1">Contact us</router-link>
                            </p>
                        </v-responsive>

                        <v-responsive class="align-center">
                            <p class="text-center">
                                <book-now-menu type="anchor"/>
                            </p>
                        </v-responsive>

                        <v-responsive class="align-center">
                            <p class="text-center">
                                <router-link :to="{ name: 'exclusive' }" class="subtitle-1">Exclusive bookings</router-link>
                            </p>
                        </v-responsive>
                    </v-layout>
                    <!-- Contact -->
                </v-col>

                <v-col cols="12" md="4" class="hidden-sm-and-down">
                    <vue-video-section
                            :elementId="'facilities2-video'"
                            :ref="'facilities2-video'"
                            :mp4Source="require('../assets/Facilities/2.mp4')"
                            :mobileBreakpoint="992"
                            :desktopHeight="800"
                            :mobileHeight="800"
                            :playsinline="true"
                            :loop="true"
                            :autoplay="true"
                            :autobuffer="true"
                            :muted="true"
                    />
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
    import BookNowMenu from '@/components/BookNowMenu.vue';
    import ab from "@/assets/Footer/ab.png";
    import ex from "@/assets/Footer/ex.png";

    export default {
        metaInfo: {
            title: 'Wadduwa Beach Villa',
            titleTemplate: 'Music and DJ → Outdoor functions → Free parking → Free WiFi → Pool → %s',
            meta: [
                { name: 'name', content: 'Facilities at Wadduwa Beach Villa' },
                { name: 'description', content: 'Come and enjoy a great day out by the pool. We have facilities such as' +
                        ' free parking, music, events lighting, beach view, self contained villas to make your stay comfortable' }
            ]
        },
        components: {
            BannerSection, VueVideoSection, BookNowMenu
        },
        data() {
            return {
                bannerHeight: null,
                features: ['Free WiFi', 'Free Parking'],
                mainFeatures: [
                    'Outdoor Pool (Pool and Baby Pool)',
                    'Beach Access',
                    'Beach Volleyball',
                    'Badminton',
                    'Restaurant and BBQ',
                    'Food Action Stations',
                    'Music and DJ',
                    'Air Conditioned and Non-Smoking Rooms',
                    'Designated Smoking Area'
                ],
                otherFeatures: [
                    'Hot water',
                    'Wifi Access',
                    'Events Lighting',
                    'Free Parking',
                    'Self Contained Villas and Rooms',
                    'Beach Towels for In-House Guests',
                    'Organised Tours and Transportation',
                    'Free Wifi',
                    'Beach View'
                ],
                ab: ab,
                ex: ex
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        },
        methods: {
            openBookNowLink(companyName) {
                if (companyName === 'airbnb') {
                    window.open('https://www.airbnb.com/users/show/19675962', '_blank');
                } else if (companyName === 'expedia') {
                    window.open('https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information', '_blank');
                }
            }
        }
    }
</script>
