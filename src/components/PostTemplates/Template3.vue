<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" md="12">
        <p class="text-justify" v-html="$attrs.content.section1"/>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" md="12" class="align-self-center pl-5">
        <h2 class="post-title" v-html="$attrs.content.subheading1"/>
        <p class="text-justify" v-html="$attrs.content.section2Desc"/>
      </v-col>

      <v-col cols="12" md="12" class="align-self-center pl-5">
        <div class="subsection-1">
          <div class="left-col pr-4">
            <img :src="require('@/assets/Blog/' + $attrs.content.section2leftCol)" v-if="$attrs.content.section2leftCol"/>
          </div>

          <div class="right-col pl-4">
            <p v-html="$attrs.content.section2rightColText"/>
            <img :src="require('@/assets/Blog/' + $attrs.content.section2rightColImg)" v-if="$attrs.content.section2rightColImg"/>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" md="12" class="align-self-center pl-5">
        <h2 class="post-title" v-html="$attrs.content.subheading2"/>
        <p class="text-justify" v-html="$attrs.content.section3Desc"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5" lg="4" class="align-self-center pl-5">
        <div class="blog-img-container">
          <div class="top-border-div"/>
          <v-img :src="require('@/assets/Blog/' + $attrs.content.section3leftCol)" width="100%" height="220"/>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="7" class="align-self-center pl-5">
        <p v-html="$attrs.content.section3rightColText"/>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12" md="12" class="align-self-center pl-5">
        <h2 class="post-title" v-html="$attrs.content.subheading3"/>
        <p class="text-justify" v-html="$attrs.content.section4Desc"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5" lg="4" class="align-self-center pl-5">
        <div class="blog-img-container">
          <div class="top-border-div"/>
          <v-img :src="require('@/assets/Blog/' + $attrs.content.section4leftCol)" width="100%" height="200"/>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="7" class="align-self-center pl-5">
        <p v-html="$attrs.content.section4rightColText"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <v-img :src="require('@/assets/Blog/' + $attrs.content.section5img)" width="100%" height="400"/>
      </v-col>
    </v-row>

    <v-row class="pa-5 pr-10 text-justify"><p v-html="$attrs.content.section6"/></v-row>

  </v-container>
</template>

<style lang="scss" scoped>
.subsection-1 {
  display: flex;

  .left-col {

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-self: center;
    }

    img {
      max-height: 380px;

      @media only screen and (max-width: 600px) {
        max-width: 100px;
      }
    }
  }

  .right-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
    img {
      width: 50%;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
}
</style>
