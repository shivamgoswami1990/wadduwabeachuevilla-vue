<template>
    <div id="app">
        <v-app>
            <nav-drawer :items="navItems" :drawer.sync="drawer"/>

            <v-app-bar app color="transparent" tile height="70px" elevation="0" hide-on-scroll fixed>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                    <slot>
                        <v-icon size="32" color="primary">mdi-text</v-icon>
                    </slot>
                </v-app-bar-nav-icon>
                <a @click="$router.push({ name: 'home'})" class="ml-5">
                    <v-avatar width="200px" tile>
                        <v-img :src="logo" contain></v-img>
                    </v-avatar>
                </a>
                <v-spacer></v-spacer>

                <div class="hidden-md-and-down">
                    <v-btn text tile height="70" class="font-weight-bold nav-btn" v-for="(item, index) in navItems" :key="index"
                           v-if="item.isMainNavItem" :to="{ 'name' : item.linkTo}">
                        {{item.title}}
                    </v-btn>
                </div>

                <v-spacer></v-spacer>

                <book-now-menu type="button"/>
            </v-app-bar>

            <v-content class="pt-0">
                <router-view/>
            </v-content>

            <footer-with-bottom-nav :items="navItems"/>
        </v-app>
    </div>
</template>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        a.nav-btn.v-btn--active {
            color: #FADE03;
            text-decoration: underline;
        }

        .pl-large {
            padding-left: 200px;
        }
    }
</style>

<script>
    import NavDrawer from '@/components/NavDrawer.vue';
    import FooterWithBottomNav from '@/components/Footer.vue';
    import BookNowMenu from '@/components/BookNowMenu.vue';
    import logo from "@/assets/logo.png";

    export default {
        components: {
            NavDrawer, FooterWithBottomNav, BookNowMenu
        },
        data() {
            return {
                drawer: false,
                videoHeight: null,
                logo: logo,
                navItems: [
                    { title: "The Villas", isMainNavItem: true, linkTo: 'villas'},
                    { title: "Restaurant", isMainNavItem: true, linkTo: 'restaurant'},
                    { title: "Facilities", isMainNavItem: true, linkTo: 'facilities'},
                    { title: "Exclusive", isMainNavItem: true, linkTo: 'exclusive'},
                    { title: "Contact Us", isMainNavItem: false, linkTo: 'contactus'},
                ]
            }
        }
    }
</script>
