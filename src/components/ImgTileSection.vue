<template>
  <section class="img-tile-section pa-6">
    <v-row>
      <v-col class="d-flex child-flex flex-column justify-space-between sibling-img-col"
             :class="$vuetify.breakpoint.xsOnly ? ' px-6 py-0' : 'px-4 py-12'"
             cols="12" md="6" sm="6">
        <img :src="siblingImg1"/>
        <img :src="siblingImg2"/>
      </v-col>

      <v-col class="d-flex child-flex elongated-img-col" cols="12" md="6" sm="6">
        <v-img :src="elongatedImg"/>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss">
  $decoration-length-perc: 40%;

  .img-tile-section {
    overflow: hidden;
    .sibling-img-col {
      position: relative;

      img {
        height: 48%;
        max-height: 48%;

        @media only screen and (max-width: 600px) {
          position: relative;
          width: 100%;
          min-height: 200px;

          &:nth-of-type(1) {
            left: -50px;
            z-index: 10;
          }

          &:nth-of-type(2) {
            right: -50px;
            z-index: 20;
            top: -10%;
          }
        }
      }

      @media only screen and (max-width: 600px) {
        &:after {
          content: "";
          position: absolute;
          height: 5px;
          width: 70%;
          background-color: #FADE03;
          bottom: 20px;
          transform: translateX(-50%);
          left: 50%;
        }
      }

      @media only screen and (min-width: 600px) {
        &:after {
          content: "";
          position: absolute;
          height: 5px;
          width: $decoration-length-perc;
          background-color: #FADE03;
          top: 50%;
          transform: translateY(-50%);
          right: 10%;
        }
      }
    }

    .elongated-img-col {
      position: relative;

      @media only screen and (min-width: 600px) {
        &:after {
          content: "";
          position: absolute;
          width: 5px;
          height: $decoration-length-perc;
          background-color: #FADE03;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>

<script>
// @ is an alias to /src

export default {

  data() {
    return {
      elongatedImg: null, // Asset path to the img with max height
      siblingImg1: null, // Asset path for the first sibling image
      siblingImg2: null, // Asset path for the second sibling image
    };
  },
  mounted() {
    this.elongatedImg = require('@/assets/' + this.$attrs.elongatedImgPath);
    this.siblingImg1 = require('@/assets/' + this.$attrs.siblingImgPathList[0]);
    this.siblingImg2 = require('@/assets/' + this.$attrs.siblingImgPathList[1]);
  }
};
</script>
