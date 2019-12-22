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
                bannerHeight: null
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        }
    }
</script>