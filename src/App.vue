<template>
    <div id="app">
        <v-app>
            <v-navigation-drawer v-model="drawer" temporary app color="black" :width=" $vuetify.breakpoint.mdAndDown ? '100%': '30%'">
                <v-icon size="35" style="position: absolute; right: 10px; top: 10px" @click.stop="drawer = !drawer">
                    mdi-close
                </v-icon>
                <v-layout justify-center align-center fill-height column>
                    <v-list>
                        <v-list-item class="text-center headline hidden-md-and-up" v-for="(item, index) in navItems" :key="index" v-if="item.isMainNavItem">
                            {{item.title}}
                        </v-list-item>

                        <v-list-item class="text-center headline" v-for="(item, index) in navItems" :key="index" v-if="!item.isMainNavItem">
                            {{item.title}}
                        </v-list-item>
                    </v-list>
                </v-layout>


            </v-navigation-drawer>

            <v-app-bar app color="transparent" tile height="70px" elevation="0" hide-on-scroll fixed>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <a @click="$router.push({ name: 'home'})">
                    <v-avatar width="200px" tile>
                        <v-img :src="logo" contain></v-img>
                    </v-avatar>
                </a>
                <v-spacer></v-spacer>

                <div class="hidden-md-and-down">
                    <v-btn text height="72px" class="font-weight-bold" v-for="(item, index) in navItems" :key="index" v-if="item.isMainNavItem" @click="$router.push({ name: item.linkTo})">
                        {{item.title}}
                    </v-btn>
                </div>

                <v-spacer></v-spacer>

                <v-btn color="primary" height="80%" width="170px" class="black--text" tile>Book Now</v-btn>
            </v-app-bar>

            <v-content class="pt-0">
                <router-view/>
            </v-content>

            <v-footer color="black">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12" md="4" sm="12" class="text-center">
                            <v-avatar width="200px" tile>
                                <v-img :src="logo" contain></v-img>
                            </v-avatar>
                            <ul id="sitemap-links">
                                <li v-for="(item, index) in navItems" :key="index">
                                    {{item.title}}
                                </li>
                            </ul>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" class="text-center">
                            <h3 class="pb-6">Contact Us</h3>

                            <div id="contactus-list">
                                <div class="contactus-item">
                                    <v-icon color="primary">mdi-map-marker</v-icon>
                                    <p>Wadduwa Beach Villa 36/17, Sanath Perera Mawatha, South Thalpitiya, Wadduwa, Sri Lanka</p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">mdi-phone</v-icon>
                                    <p>+94 712 532 311 / +94 713 770 692 / +94 382 295 758 / +94 710 150 415</p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">mdi-email</v-icon>
                                    <p>wadduwabeachvilla@gmail.com</p>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="4" sm="12" class="text-center">
                            <h3 class="pb-6">Social</h3>

                            <v-layout justify-center>
                                <a target="_blank" href="https://www.facebook.com/wadduwabeachvilla/">
                                    <v-img :src="fb" max-width="40" max-height="40" contain class="ml-2"></v-img>
                                </a>
                                <a target="_blank" href="https://www.tripadvisor.com/VacationRentalReview-g499081-d4756867-Wadduwa_Beach_Villa-Wadduwa_Western_Province.html">
                                    <v-img :src="ta" max-width="40" max-height="40" contain class="ml-2"></v-img>
                                </a>
                            </v-layout>
                        </v-col>
                    </v-row>
                </v-container>
            </v-footer>

            <v-bottom-navigation background-color="black" dark height="50">
                <p class="text-center">© Copyright 2020 Wadduwa Beach Villa. All rights reserved</p>
            </v-bottom-navigation>
        </v-app>
    </div>
</template>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        .pl-large {
            padding-left: 200px;
        }

        #sitemap-links {
            list-style-type: none;
            margin: 0 auto;
            padding: 20px;
            overflow: hidden;

            li {
                padding: 10px 15px;
                float: left;
            }
        }

        #contactus-list {
            .contactus-item {
                padding-bottom: 20px;
                display: flex;
                i {
                    align-self: center;
                }

                p {
                    padding: 0;
                    margin: 0 0 0 20px;
                    text-align: left;
                    text-justify: auto;
                }
            }
        }
    }
</style>

<script>
    import logo from "@/assets/logo.png";
    import fb from "@/assets/fb.png";
    import ta from "@/assets/ta.png";
    export default {
        data() {
            return {
                drawer: false,
                logo: logo,
                fb: fb,
                ta: ta,
                videoHeight: null,
                navItems: [
                    { title: "The Villas", isMainNavItem: true},
                    { title: "Facilities", isMainNavItem: true},
                    { title: "The Villas", isMainNavItem: true},
                    { title: "Contact Us", isMainNavItem: true, linkTo: 'contactus'},
                    { title: "Gallery", isMainNavItem: false},
                    { title: "Exclusive Bookings", isMainNavItem: false},
                ]
            }
        }
    }
</script>
