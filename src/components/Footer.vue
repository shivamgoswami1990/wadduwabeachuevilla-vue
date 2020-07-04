<template>
    <div>
        <v-footer color="black">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" md="3" sm="12" class="text-center">
                        <v-avatar width="200px" tile>
                            <v-img :src="logo" contain></v-img>
                        </v-avatar>
                        <ul id="sitemap-links">
                            <li v-for="(item, index) in $attrs.items" :key="index"
                                @click="$router.push({ name: item.linkTo})" class="caption">
                                {{item.title}}
                            </li>
                        </ul>
                    </v-col>

                    <v-col cols="12" md="6" sm="12">
                        <h3 class="pb-6 body-1 font-weight-bold text-center">Contact Us</h3>

                        <div id="contactus-list">
                            <div class="contactus-item">
                                <v-icon color="primary">mdi-map-marker</v-icon>
                                <p class="caption">
                                    Wadduwa Beach Villa 36/17, Sanath Perera Mawatha,
                                    South Thalpitiya, Wadduwa, Sri Lanka
                                </p>
                            </div>

                            <div class="contactus-item">
                                <v-icon color="primary">mdi-phone</v-icon>
                                <p class="caption">
                                    +94 712 532 311 / +94 713 770 692 / +94 382 295 758 / +94 710 150 415
                                </p>
                            </div>

                            <div class="contactus-item">
                                <v-icon color="primary">mdi-email</v-icon>
                                <p class="caption">
                                    wadduwabeachvilla@gmail.com,  wbv.manager@wadduwabeachvilla.com
                                </p>
                            </div>
                        </div>
                    </v-col>

                    <v-col cols="12" md="3" sm="12" class="text-center">
                        <h3 class="pb-6  body-1 font-weight-bold">Social</h3>

                        <v-layout justify-center>
                            <a target="_blank" href="https://www.facebook.com/wadduwabeachvillasPvtLtd/">
                                <v-img :src="fb" max-width="30" max-height="30" contain class="ml-2"></v-img>
                            </a>
                            <a target="_blank" href="https://www.tripadvisor.com/RentalPropertyManager-a_manager.236794">
                                <v-img :src="ta" max-width="30" max-height="30" contain class="ml-2"></v-img>
                            </a>
                            <a target="_blank" href="https://www.airbnb.com/users/show/19675962">
                                <v-img :src="ab" max-width="30" max-height="30" contain class="ml-2"></v-img>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/wadduwa.beach.villas/">
                                <v-img :src="ig" max-width="30" max-height="30" contain class="ml-2"></v-img>
                            </a>
                            <a target="_blank" href="https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information">
                                <v-img :src="ex" max-width="30" max-height="30" contain class="ml-2"></v-img>
                            </a>
                        </v-layout>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>

        <v-bottom-navigation background-color="black" dark height="50">
            <p class="text-center caption">
                © Copyright 2020 Wadduwa Beach Villa. All rights reserved
                <br>
                Made with ❣ by <a href="https://shivamgoswami.live" target="_blank">Shivam Goswami</a>
            </p>
        </v-bottom-navigation>
    </div>
</template>

<style lang="scss">
    #sitemap-links {
        list-style-type: none;
        margin: 0 auto;
        padding: 20px;
        overflow: hidden;

        li {
            padding: 10px 15px;
            float: left;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
                color: #FADE03;
            }
        }
    }

    #contactus-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .contactus-item {
            width: 350px;
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
</style>

<script>
    import logo from "@/assets/logo.png";
    import fb from "@/assets/Footer/fb.png";
    import ta from "@/assets/Footer/ta.png";
    import ig from "@/assets/Footer/ig.png";
    import ab from "@/assets/Footer/ab.png";
    import ex from "@/assets/Footer/ex.png";

    export default {
        data() {
            return {
                logo: logo,
                fb: fb,
                ta: ta,
                ig: ig,
                ab: ab,
                ex: ex
            }
        }
    }
</script>
