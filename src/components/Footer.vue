<template>
  <div>
    <v-footer color="black">
      <v-container>
        <v-row no-gutters justify="space-between">
          <v-col cols="12" md="3" sm="12" class="text-center">
            <v-avatar width="200px" tile>
              <v-img :src="logo" contain></v-img>
            </v-avatar>
            <ul id="sitemap-links">
              <li v-for="(item, index) in $attrs.items" :key="index"
                  @click="$router.push({ name: item.linkTo})" class="caption">
                {{ item.title }}
              </li>
            </ul>
          </v-col>

          <v-col cols="12" md="3" sm="12" class="text-center">
            <h3 class="pb-6  body-1 font-weight-bold">Social</h3>

            <v-layout justify-center>
              <a target="_blank" href="https://www.facebook.com/wadduwabeachvilla"
                 aria-label="Facebook" rel="noopener">
                <v-img :src="fb" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCoSGHbVx2x6geukCd8y-uUA"
                 aria-label="Youtube" rel="noopener">
                <v-img :src="yt" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
              <a target="_blank" href="https://www.airbnb.com/users/show/19675962" rel="noopener"
                 aria-label="AirBnB">
                <v-img :src="ab" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
              <a target="_blank" href="https://www.instagram.com/wadduwa.beach.villas/" rel="noopener"
                 aria-label="Instagram">
                <v-img :src="ig" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
              <a target="_blank" href="whatsapp://send?text=https://wadduwabeachvilla.com/" rel="noopener"
                 aria-label="Whatsapp">
                <v-img :src="whatsapp" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
              <a target="_blank" aria-label="Expedia" rel="noopener"
                 href="https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information">
                <v-img :src="ex" max-width="30" max-height="30" contain class="ml-2"/>
              </a>
            </v-layout>

            <v-img :src="locationImg" height="100px" class="my-4" style="cursor: pointer" @click="openMaps"/>
          </v-col>

          <v-col cols="12" md="3" sm="12">
            <h3 class="pb-6 body-1 font-weight-bold text-center">Contact Us</h3>

            <div id="contactus-list">
              <div class="contactus-item">
                <v-icon color="primary">mdi-map-marker</v-icon>
                <p class="caption">
                  36/17 Sanath Perera Mawatha, Wadduwa 12560, Sri Lanka
                </p>
              </div>

              <div class="contactus-item">
                <v-icon color="primary">mdi-phone</v-icon>
                <p class="caption">
                  +94 712 532 311 / +94 713 770 692 / +94 382 295 758 / +94 710 150 415
                </p>
              </div>

              <div class="contactus-item">
                <v-icon color="primary">mdi-email</v-icon>
                <p class="caption">
                  wadduwabeachvilla@gmail.com reception@wadduwabeachvilla.com
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <v-bottom-navigation background-color="black" dark height="50">
      <p class="text-center caption">
        © Copyright 2020 Wadduwa Beach Villas. All rights reserved
      </p>
    </v-bottom-navigation>
  </div>
</template>

<style lang="scss">
#sitemap-links {
  list-style-type: none;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;

  li {
    padding: 10px 15px;
    float: left;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #FADE03;
    }
  }
}

#contactus-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contactus-item {
    width: 350px;
    padding-bottom: 20px;
    display: flex;

    i {
      align-self: center;
    }

    p {
      padding: 0;
      margin: 0 0 0 20px;
      text-align: left;
      text-justify: auto;
    }
  }
}
</style>

<script>
import logo from '@/assets/logo.png';
import fb from '@/assets/Footer/fb.png';
import yt from '@/assets/Footer/yt.png';
import ig from '@/assets/Footer/ig.png';
import ab from '@/assets/Footer/ab.png';
import ex from '@/assets/Footer/ex.png';
import whatsapp from '@/assets/Footer/whatsapp.png';
import locationImg from '@/assets/Footer/location.jpg';

export default {
  data() {
    return {
      logo,
      fb,
      yt,
      ig,
      ab,
      ex,
      whatsapp,
      locationImg
    };
  },
  methods: {
    openMaps() {
      window.open('https://www.google.com/maps/place/Wadduwa+Beach+Villa/@6.6709174,79.9233563,15z/data=!4m8!3m7!1s0x0:0x2299e397b9ccc15d!5m2!4m1!1i2!8m2!3d6.6709174!4d79.9233563', '_blank');
    }
  }
};
</script>
