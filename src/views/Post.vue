<template>
    <div>
        <banner-section imgFilename="Blog/Post.jpg" preTitle="Wadduwa Beach Villas" title="Recent story"
                        :description="post.title"/>

        <v-container class="py-12">
            <v-row>
                <v-col cols="12" md="5" lg="4" class="align-self-center">
                    <div class="blog-img-container">
                        <div class="top-border-div"/>
                        <v-img :src="require('@/assets/Blog/' + post.image1)" width="100%" height="350"/>
                    </div>
                </v-col>

                <v-col cols="12" md="6" lg="7" class="align-self-center pl-5">
                    <p class="text-justify">{{post.section1}}</p>
                    <h2 class="post-title">{{post.subheading1}}</h2>
                    <p class="text-justify">{{post.section2}}</p>
                </v-col>
            </v-row>

            <v-row class="mt-12">
                <v-col cols="12" :order="$vuetify.breakpoint.smAndDown? 1 : 0" md="6" lg="7" class="align-self-center pl-5">
                    <h2 class="post-title">{{post.subheading2}}</h2>
                    <p class="text-justify">{{post.section3}}</p>

                    <h2 class="post-title">{{post.subheading3}}</h2>
                    <p class="text-justify">{{post.section4}}</p>
                </v-col>

                <v-col cols="12" md="5" lg="4" class="align-self-center">
                    <div class="blog-img-container">
                        <div class="top-border-div"/>
                        <v-img :src="require('@/assets/Blog/' + post.image2)" width="100%" height="350"/>
                    </div>
                </v-col>
            </v-row>

            <v-row class="pa-5 pr-10 text-justify">
                <p>{{post.section5}}</p>
            </v-row>

        </v-container>
    </div>
</template>

<style lang="scss" scoped>
    .blog-img-container {
        position: relative;
        .top-border-div {
            width: 100%;
            position: absolute;
            top: -10px;
            border-top: 5px solid #FADE03;
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
                bannerHeight: null,
                post: {}
            }
        },
        metaInfo() {
            if (this.post !== undefined && this.post !== null) {
                if (typeof this.post === 'object') {
                    return {
                        title: 'Wadduwa Beach Villas',
                        titleTemplate: this.post.title + ' → %s',
                        meta: [
                            { name: 'name', content: this.post.title },
                            { name: 'description', content: this.post.section1 }
                        ]
                    }
                }
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        },
        created() {
            let currentPostName = this.$route.params.name;
            if (currentPostName !== undefined && currentPostName !== null) {
                // Find the selected post object
                this.blogPosts().forEach((post) => {
                    if (post.title.replace(/\s+/g, '-').toLowerCase() === currentPostName) {
                        this.post = post;
                    }
                });
            }
        }
    }
</script>
