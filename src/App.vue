<template>
    <div id="app">
        <v-app>
            <nav-drawer :items="navItems" v-if="showDrawer" @showDrawer="transitionend" />

            <v-app-bar app color="transparent" tile height="70px" elevation="0" hide-on-scroll fixed>
                <v-app-bar-nav-icon @click="showDrawer = true" aria-label="Menu button">
                    <slot>
                        <v-icon size="32" color="primary" aria-label="Menu icon">mdi-text</v-icon>
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
                           v-if="item.isMainNavItem" :to="{ 'name' : item.linkTo}" rel="canonical">
                        {{item.title}}
                    </v-btn>
                </div>

                <v-spacer></v-spacer>

                <book-now-menu type="button"/>
            </v-app-bar>

            <v-main>
                <v-alert color="primary" tile class="ma-0 text-center" light>
                  Active Management in the COVID-19 Era.
                    <a class="black--text" style="text-decoration: underline; cursor:pointer; font-weight: bold"
                       @click="$router.push(
                            { name: 'post',
                              params: {
                                name: 'Handling of guest safety in light of COVID-19'.replace(/\s+/g, '-').toLowerCase()
                                }
                            })">
                        Please see our response
                    </a>
                </v-alert>
                <router-view/>
            </v-main>

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
import logo from '@/assets/logo.png';

export default {
  components: {
    NavDrawer, FooterWithBottomNav, BookNowMenu
  },
  data() {
    return {
      showDrawer: false,
      videoHeight: null,
      logo,
      navItems: [
        { title: 'Accommodation', isMainNavItem: true, linkTo: 'rooms' },
        { title: 'Restaurant', isMainNavItem: true, linkTo: 'restaurant' },
        { title: 'Facilities', isMainNavItem: true, linkTo: 'facilities' },
        { title: 'Exclusive', isMainNavItem: true, linkTo: 'exclusive' },
        { title: 'Offers', isMainNavItem: true, linkTo: 'offers' },
        { title: 'Weddings', isMainNavItem: true, linkTo: 'events' },
        { title: 'Blog', isMainNavItem: false, linkTo: 'blog' },
        { title: 'FAQ', isMainNavItem: false, linkTo: 'guidelines' }
      ]
    };
  },
  methods: {
    transitionend() {
      this.showDrawer = false;
    }
  }
};
</script>
