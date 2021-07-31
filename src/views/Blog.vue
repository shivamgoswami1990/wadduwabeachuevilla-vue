<template>
    <div>
        <banner-section imgFilename="Blog/Blog.jpeg" preTitle="Wadduwa Beach Villas" title="Our blog"
                        description="Bringing stories to life"/>

        <v-container class="py-12">
            <h2 class="display-2 pb-5">Recent stories</h2>

            <v-row class="pl-1 pt-5 justify-space-between" v-for="(post, index) in posts" :key="index">
                <v-col cols="12" md="5" lg="4" class="align-self-center">
                    <div class="blog-img-container">
                        <div class="top-border-div"/>
                        <div class="bottom-border-div"/>
                        <v-img :src="require('@/assets/Blog/' + post.image1)" width="100%" height="350"/>
                    </div>
                </v-col>

                <v-col cols="12" md="6" lg="7" class="align-self-center">
                    <h2 class="pb-5 post-title"
                        @click="$router.push(
                            { name: 'post',
                              params: {
                                name: post.title.replace(/\s+/g, '-').toLowerCase()
                                }
                            })"
                        :style="{ color: $vuetify.theme.currentTheme.primary }">
                        {{post.title}}
                    </h2>
                    <p class="text-justify mt-2">
                        {{post.blogFeatDesc}} ...
                        <a @click="$router.push(
                            { name: 'post',
                              params: {
                                name: post.title.replace(/\s+/g, '-').toLowerCase()
                                }
                            })">
                            Read more
                        </a>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
    .post-title {
        text-decoration: underline;
        cursor: pointer;
    }

    .blog-img-container {
        position: relative;
        .top-border-div {
            width: 100px;
            height: 100px;
            position: absolute;
            top: -10px;
            left: -10px;
            border-left: 5px solid #FADE03;
            border-top: 5px solid #FADE03;
        }

        .bottom-border-div {
            width: 100px;
            height: 100px;
            position: absolute;
            bottom: -10px;
            right: -10px;
            border-right: 5px solid #FADE03;
            border-bottom: 5px solid #FADE03;
        }
    }
</style>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Blog → %s',
    meta: [
      { name: 'name', content: 'Blog' },
      { name: 'description', content: 'Exciting things happening at Wadduwa Beach Villa' }
    ]
  },
  components: {
    BannerSection
  },
  data() {
    return {
      bannerHeight: null,
      posts: null
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
    this.posts = this.blogPosts().reverse();
  }
};
</script>
