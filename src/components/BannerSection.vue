<template>
    <v-img :src="imgSrc" :height="bannerHeight" gradient="360deg, rgba(0,0,0,0.95) 5%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.23) 100%">
        <v-container :style="{ height: bannerHeight + 'px' }">
            <v-layout justify-center align-start fill-height column wrap>
                <div class="title text--secondary">{{$attrs.preTitle}}</div>
                <h1 class="white--text" :class="$vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4'">{{$attrs.title}}</h1>
                <div class="display-1 white--text">{{$attrs.description}}</div>
            </v-layout>
        </v-container>
    </v-img>
</template>

<style lang="scss">
    .overlay-gradient {
        .v-image__image .v-image__image--cover {
            background: radial-gradient(ellipse at left, transparent 0, transparent 30%, #000 138%, #000 0);
        }
    }
</style>

<script>
    // @ is an alias to /src

    export default {

        data() {
            return {
                bannerHeight: null,
                imgSrc: ''
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
            this.imgSrc = require('@/assets/' + this.$attrs.imgFilename);
        }
    }
</script>
