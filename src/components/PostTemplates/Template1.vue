<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" md="5" lg="4" class="align-self-center">
        <div class="blog-img-container">
          <div class="top-border-div"/>
          <v-img :src="require('@/assets/Blog/' + $attrs.content.image1)" width="100%"
                 :height="$attrs.content.containsElongatedImages ? 550 : 350"/>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="7" class="align-self-center pl-5">
        <p class="text-justify" v-html="$attrs.content.section1"/>
        <h2 class="post-title" v-html="$attrs.content.subheading1"/>
        <p class="text-justify" v-html="$attrs.content.section2"></p>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" :order="$vuetify.breakpoint.smAndDown? 1 : 0" md="6" lg="7" class="align-self-center pl-5">
        <h2 class="post-title" v-html="$attrs.content.subheading2"></h2>
        <p class="text-justify" v-html="$attrs.content.section3"></p>

        <h2 class="post-title" v-html="$attrs.content.subheading3"></h2>
        <p class="text-justify" v-html="$attrs.content.section4"></p>
      </v-col>

      <v-col cols="12" md="5" lg="4" class="align-self-center">
        <div class="blog-img-container">
          <div class="top-border-div"/>
          <v-img :src="require('@/assets/Blog/' + $attrs.content.image2)" v-if="$attrs.content.image2" width="100%"
                 :height="$attrs.content.containsElongatedImages ? 550 : 350"/>
        </div>
      </v-col>
    </v-row>

    <v-row class="pa-5 pr-10 text-justify"><p v-html="$attrs.content.section5"/></v-row>

  </v-container>
</template>
