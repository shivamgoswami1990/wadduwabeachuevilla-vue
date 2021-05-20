<template>
    <v-layout wrap justify-center align-center>
        <v-col cols="12" v-for="(room, index) in $attrs.data" :key="index" md="4">
            <v-responsive aspect-ratio="16/9">
                <v-card tile color="white" class="black--text ma-4" :height="$attrs.height">
                    <v-img height="300" :src="require('@/assets/Villas/rooms/' + room.parentDir + '/' + room.images[0])"
                           class="white--text align-end" gradient="to bottom, transparent, rgba(0,0,0,0.5)">
                        <v-card-title class="font-weight-bold">{{room.name}}</v-card-title>
                    </v-img>

                    <v-chip v-if="false" label color="primary" class="black--text font-weight-bold"
                            style="position: absolute; top: 0; right: 0">
                        Starting from USD {{room.price}}
                    </v-chip>

                    <btn-with-icon :href="room.altLink" :icon-src="room.btnBookWithIconPath"/>

                    <v-card-text class="black--text text-justify">
                        {{room.description}}
                    </v-card-text>

                    <router-link class="explore-container" :to="{ name: 'villas', params: { index: index}}"
                                 :aria-label="'Explore ' + room.name">
                        <div class="explore">
                            <v-icon color="black" size="25">mdi-arrow-right</v-icon>
                        </div>
                    </router-link>
                </v-card>
            </v-responsive>
        </v-col>
    </v-layout>
</template>

<style lang="scss">
    .explore-container {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #FADE03;
        width: 300px;
        height: 100px;
        clip-path: polygon(100% 55%, 0% 100%, 100% 100%);

        & .explore {
            position: absolute;
            bottom: 5px;
            right: 10px;
        }
    }
</style>

<script>
// @ is an alias to /src
import BtnWithIcon from '@/components/BtnWithIcon.vue';

export default {
  components: {
    BtnWithIcon
  }
};
</script>
