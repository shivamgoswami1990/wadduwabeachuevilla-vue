<template>
    <div id="app">
        <v-app :style="{background: 'black'}">
            <v-app-bar app clipped-left color="black" tile height="70px" flat elevation-1 absolute>
                <v-spacer></v-spacer>
                <v-avatar width="200px" tile>
                    <v-img :src="logo" contain></v-img>
                </v-avatar>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>

                <v-btn text height="100%" class="font-weight-bold">The Villas</v-btn>
                <v-btn text height="100%" class="font-weight-bold">Facilities</v-btn>
                <v-btn text height="100%" class="font-weight-bold">Tours</v-btn>
                <v-btn text height="100%" class="font-weight-bold">Restaurant</v-btn>
                <v-btn text height="100%" class="font-weight-bold">Gallery</v-btn>
                <v-btn text height="100%" class="font-weight-bold">Contact Us</v-btn>

                <v-spacer></v-spacer>

                <v-btn color="primary" height="80%" width="170px" class="black--text" tile>Book Now</v-btn>
                <v-spacer></v-spacer>
            </v-app-bar>

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
    }
</style>

<script>
    import logo from "@/assets/logo.png";
    export default {
        data() {
            return {
                drawer: null,
                logo: logo,
                videoHeight: null
            }
        }
    }
</script>
