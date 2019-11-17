<template>
    <div id="app">
        <v-app :style="{background: 'black'}">
            <v-app-bar app color="black" tile height="70px" flat elevation-1 absolute>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-avatar width="200px" tile>
                    <v-img :src="logo" contain></v-img>
                </v-avatar>
                <v-spacer></v-spacer>

                <div class="hidden-md-and-down">
                    <v-btn text height="100%" class="font-weight-bold" v-for="(item, index) in navItems" :key="index">
                        {{item.title}}
                    </v-btn>
                </div>

                <v-spacer></v-spacer>

                <v-btn color="primary" height="80%" width="170px" class="black--text" tile>Book Now</v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" temporary absolute app clipped color="black" :width=" $vuetify.breakpoint.mdAndDown ? '100%': '30%'">
                <v-icon size="35" style="position: absolute; right: 10px; top: 10px" @click.stop="drawer = !drawer">
                    mdi-close
                </v-icon>
                <v-layout justify-center align-center fill-height column>
                    <v-list>
                        <v-list-item class="text-center headline hidden-md-and-up" v-for="(item, index) in navItems" :key="index">
                            {{item.title}}
                        </v-list-item>
                        <v-list-item class="text-center headline">Gallery</v-list-item>
                        <v-list-item class="text-center headline">Exclusive Bookings</v-list-item>
                    </v-list>
                </v-layout>


            </v-navigation-drawer>

            <v-content>
                <router-view/>
            </v-content>
        </v-app>
    </div>
</template>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        nav {
            z-index: 9999;
        }

        .pl-large {
            padding-left: 200px;
        }
    }
</style>

<script>
    import logo from "@/assets/logo.png";
    export default {
        data() {
            return {
                drawer: false,
                logo: logo,
                videoHeight: null,
                navItems: [
                    { title: "The Villas"},
                    { title: "Facilities"},
                    { title: "The Villas"},
                    { title: "Contact Us"},
                ]
            }
        }
    }
</script>
