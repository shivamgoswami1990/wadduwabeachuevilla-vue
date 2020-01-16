<template>
    <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on }">

            <!-- Conditional activators based on prop -->
            <v-btn color="primary" v-on="on" v-if="$attrs.type === 'button'"
                   height="80%" width="40%" max-width="170px" class="black--text hidden-sm-and-down" tile>
                Book Now
            </v-btn>

            <v-btn v-on="on" icon tile :ripple="false" v-if="$attrs.type === 'button'">
                <v-icon class="hidden-sm-and-up" color="primary" size="35">mdi-phone</v-icon>
            </v-btn>

            <a class="subtitle-1" v-on="on" style="text-decoration: underline" v-if="$attrs.type === 'anchor'">
                Book now
            </a>
            <!-- Conditional activators based on prop -->
        </template>

        <v-list color="black" light tile :rounded="false">
            <v-list-item @click="openBookNowLink('airbnb')">
                <v-list-item-title class="text--primary font-weight-bold">
                    Book now with
                    <v-avatar size="30" class="ml-2">
                        <v-img :src="ab">
                        </v-img>
                    </v-avatar>
                </v-list-item-title>
            </v-list-item>

            <v-list-item @click="openBookNowLink('expedia')">
                <v-list-item-title class="text--primary font-weight-bold">
                    Book now with
                    <v-avatar size="30" class="ml-2">
                        <v-img :src="ex">
                        </v-img>
                    </v-avatar>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import ab from "@/assets/Footer/ab.png";
    import ex from "@/assets/Footer/ex.png";

    export default {
        data() {
            return {
                ab: ab,
                ex: ex
            }
        },
        methods: {
            openBookNowLink(companyName) {
                if (companyName === 'airbnb') {
                    window.open('https://www.airbnb.com/users/show/19675962', '_blank');
                } else if (companyName === 'expedia') {
                    window.open('https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information', '_blank');
                }
            }
        }
    }
</script>
