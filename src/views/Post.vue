<template>
    <div>
        <banner-section imgFilename="Blog/Post.jpg" preTitle="Wadduwa Beach Villa" title="Recent story"
                        :description="post.title"/>

        <Template1 :content="post" v-if="post.templateNo === 1"/>

        <!-- Notice post -->
        <Template2 :content="post" v-if="post.templateNo === 2"/>
        <!-- Notice post -->

        <Template3 :content="post" v-if="post.templateNo === 3"/>
    </div>
</template>

<style lang="scss">
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
import BannerSection from '@/components/BannerSection.vue';
import Template1 from '@/components/PostTemplates/Template1.vue';
import Template2 from '@/components/PostTemplates/Template2.vue';
import Template3 from '@/components/PostTemplates/Template3.vue';

export default {
  components: {
    BannerSection, Template1, Template2, Template3
  },
  data() {
    return {
      bannerHeight: null,
      post: {}
    };
  },
  metaInfo() {
    if (this.post !== undefined && this.post !== null) {
      if (typeof this.post === 'object') {
        return {
          title: 'Wadduwa Beach Villa',
          titleTemplate: this.post.title + ' → %s',
          meta: [
            { name: 'name', content: this.post.title },
            { name: 'description', content: this.post.section1 }
          ]
        };
      }
    }
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
  },
  created() {
    const currentPostName = this.$route.params.name;
    if (currentPostName !== undefined && currentPostName !== null) {
      // Find the selected post object
      this.blogPosts().forEach((post) => {
        if (post.title.replace(/\s+/g, '-').toLowerCase() === currentPostName) {
          this.post = post;
        }
      });
    }
  }
};
</script>
