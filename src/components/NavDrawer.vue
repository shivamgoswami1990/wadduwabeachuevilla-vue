<template>
    <v-navigation-drawer v-model="drawer" temporary app color="black" @transitionend="closeDrawer"
                         :width=" $vuetify.breakpoint.mdAndDown ? '100%': '30%'">
        <v-icon size="35" style="position: absolute; right: 10px; top: 10px" @click="closeDrawer">
            mdi-close
        </v-icon>
        <v-layout justify-center align-center fill-height column>
            <v-list>
                <v-list-item class="text-center headline hidden-md-and-up" v-for="(item, index) in $attrs.items"
                             :key="index" v-if="item.isMainNavItem" @click="$router.push({ name: item.linkTo})">
                    {{item.title}}
                </v-list-item>

                <v-list-item class="text-center headline" v-for="(item, index) in $attrs.items" :key="index"
                             v-if="!item.isMainNavItem" @click="$router.push({ name: item.linkTo})">
                    {{item.title}}
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    closeDrawer() {
      this.$emit('showDrawer', false);
    }
  }
};
</script>
