<template>
    <div>
        <banner-section imgFilename="villas.jpg" preTitle="Wadduwa Beach Villa" title="Our Villas"
                        description="Cottages, Deluxe rooms & Bungalows"/>

        <v-container class="py-12">
            <v-card flat tile>
                <v-tabs v-model="tab" centered dark height="80" background-color="black" show-arrows>
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab v-for="(room, index) in rooms" :href="'#tab-' + index" :key="index">
                        <v-avatar size="80" tile class="hidden-sm-and-down">
                            <v-img :src="require('@/assets/' + room.images[0])"></v-img>
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
                                    <v-carousel hide-delimiter-background delimiter-icon="mdi-minus" height="450">
                                        <v-carousel-item v-for="(image, index2) in room.images" :key="index2"
                                                         :src="require('@/assets/' + image)"
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

                                    <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Capacity</p>
                                    <p class="mt-0 pt-0">{{room.people}} people</p>

                                    <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Description</p>
                                    <p class="text-justify">{{room.description}}</p>

                                    <v-btn color="primary" depressed block height="45" tile
                                           class="black--text mt-5">Book now</v-btn>
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
                tab: null,
                rooms: [
                    {
                        name: "Superior Two Bedroom Cottage",
                        description: "The Superior Two Bedroom Cottage has a pool view and is located 30 meters from the sea shore. It has two separate bedrooms with attached bathroos, one with a sky view bathroom. This cottage includes a sitting and dining room with full kitchen, as well as an outside veranda and seating. Sleeps four adults.",
                        price: "",
                        facilities: ["Pool view", "Attached bathroom", "Dining room"],
                        people: 4,
                        images: ['room-1.jpg', 'room-2.jpg', 'room-3.jpg']
                    },
                    {
                        name: "Deluxe Two Bedroom Bungalow\n",
                        description: "The Deluxe Two Bedroom Cottage has both a beach and pool view. The two rooms have two separate attached bathrooms and a kitchen. It has an enclosed veranda with 180 degree view. Sleeps four adults.",
                        price: "",
                        facilities: ["Pool view", "Two attached bathroom", "Kitchen"],
                        people: 4,
                        images: ['room-2.jpg', 'room-1.jpg', 'room-3.jpg']
                    },
                    {
                        name: "Just Two- Secluded Cottage",
                        description: "The Just Two- Secluded Cottage has both a pool and beach view. The single bedroom cottage has an attached bathroom with kitchen and veranda which offers a 180 degree view of the greenery and lawn. It is secluded and offers privacy as it is located in a secluded area of the property. Sleeps two adults.",
                        price: "",
                        facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
                        people: 2,
                        images: ['room-3.jpg', 'room-2.jpg', 'room-1.jpg']
                    }
                ]
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        }
    }
</script>