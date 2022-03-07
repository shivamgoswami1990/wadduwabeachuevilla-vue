<template>
    <div>
        <banner-section imgFilename="Villas/Villas.jpg" preTitle="Wadduwa Beach Villas" title="Our Villas"
                        description="Rooms and Villas"/>

        <v-container class="py-12">
          <v-row no-gutters class="my-5">
            <v-col md="4" lg="4" cols="12" class="mb-10"
                   :class="$vuetify.breakpoint.smAndUp ? 'pr-10' : ''"
                   v-for="(room, index) in rooms" :key="index">
              <v-hover v-slot:default="{ hover }">
                <v-card class="pa-0 room-card" :class="hover ? 'scale-card' : ''" :raised="hover" height="100%" @click="goToRoomsPage(room)">
                  <v-img :src="require('@/assets/Villas/rooms/' + room.parentDir + '/' + room.images[0])"
                         class="align-end justify-end" height="200">
                  </v-img>

                  <v-card-title class="font-weight-bold black--text">
                    {{room.name}}
                  </v-card-title>
                  <v-card-text class="text-justify card-content black--text">
                    {{room.description}}
                  </v-card-text>
                  <v-card-actions class="pa-0 action-btn-container">
                    <btn-with-icon :href="room.altLink" :icon-src="room.btnBookWithIconPath"/>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
  .room-card {
    background-color: #FADE03 !important;

    &.scale-card {
      transform: scale(1.03);
      cursor: pointer;
    }

    .card-content {
      height: 135px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .action-btn-container {
      padding-top: 2px !important;
      background-color: black;
    }
  }
</style>

<script>
// @ is an alias to /src
import BannerSection from '@/components/BannerSection.vue';
import BtnWithIcon from '@/components/BtnWithIcon.vue';

export default {
  metaInfo: {
    title: 'Wadduwa Beach Villa',
    titleTemplate: 'Honeymoon Villa → Family Villa → Double Room → %s',
    meta: [
      { name: 'name', content: 'Luxury villas in Wadduwa' },
      {
        name: 'description',
        content: 'Come and enjoy your stay at luxury villas with outdoor pool,'
                        + ' beach view and restaurant'
      }
    ]
  },
  components: {
    BannerSection, BtnWithIcon
  },
  data() {
    return {
      bannerHeight: null,
      rooms: []
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();
    this.rooms = this.availableRooms();
  },
  methods: {
    goToRoomsPage(room) {
      this.$router.push(
        {
          name: 'accommodation',
          params: {
            name: room.name.replace(/\s+/g, '-').toLowerCase()
          }
        }
      );
    }
  }
};
</script>
