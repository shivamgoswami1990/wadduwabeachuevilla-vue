<template>
    <div>
        <banner-section imgFilename="Villas/Villas.jpg" preTitle="Wadduwa Beach Villas" :title="currentRoom.name"
                        description="Rooms and Villas"/>

        <v-container class="py-12">
          <!-- Image carousel, facilities & description -->
          <h2 class="display-2 font-weight-bold pb-10">{{currentRoom.name}}</h2>

          <v-row>
            <v-col cols="12" md="7">
              <div class="room-img-grid">
                <img
                    v-for="(image, index2) in currentRoom.images" :key="index2"
                    :src="require('@/assets/Villas/rooms/' + currentRoom.parentDir + '/' + image)"
                    :alt="currentRoom.name + ' ' + index2"
                />
              </div>
            </v-col>

            <v-col cols="12" md="5">
              <div class="my-2">
                <v-chip color="primary" outlined label class="mr-2 mt-2 mb-1"
                        v-for="(facility, index3) in currentRoom.facilities" :key="index3">
                  <v-icon left>mdi-server-plus</v-icon> {{facility}}
                </v-chip>
              </div>

              <v-row no-gutters>
                <v-col cols="12" md="4">
                  <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Capacity</p>
                  <p class="mt-0 pt-0">{{currentRoom.people}} people</p>
                </v-col>

                <v-col cols="12" md="4" v-if="false">
                  <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Starting from</p>
                  <p class="mt-0 pt-0">USD {{currentRoom.price}}</p>
                </v-col>
              </v-row>

              <p class="mt-5 mb-0 pb-0 font-weight-bold subtitle-1">Description</p>
              <p class="text-justify">{{currentRoom.description}}</p>

              <btn-with-icon :href="currentRoom.altLink" :icon-src="currentRoom.btnBookWithIconPath"/>
            </v-col>
          </v-row>
          <!-- Image carousel, facilities & description -->
        </v-container>
    </div>
</template>

<style lang="scss">
  .room-img-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
      }
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
      currentRoom: {}
    };
  },
  mounted() {
    this.bannerHeight = this.visibleViewportHeight();

    // Find the selected room by looping through available rooms & matching the name
    // eslint-disable-next-line no-restricted-syntax
    for (const room of this.availableRooms()) {
      if (this.$route.params.name === room.name.replace(/\s+/g, '-').toLowerCase()) {
        this.currentRoom = room;
      }
    }
  },
  methods: {
  }
};
</script>
