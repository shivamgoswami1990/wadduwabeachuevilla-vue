<template>
    <v-btn v-if="$attrs['icon-src']" tile block color="primary" class="elevation-0 black--text font-weight-bold"
           height="45px" :href="$attrs.href" target="_blank" rel="noopener">
        Book now
        <v-avatar size="30" class="ml-2">
            <v-img :src="require('@/assets/Footer/' + $attrs['icon-src'])">
            </v-img>
        </v-avatar>
    </v-btn>
</template>
