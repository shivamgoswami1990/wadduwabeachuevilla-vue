<template>
    <div>
        <banner-section imgFilename="Blog/Post.jpg" preTitle="Wadduwa Beach Villas" title="Recent story"
                        :description="post.title"/>

        <v-container class="py-12" v-if="!post.isNoticePost">
            <v-row>
                <v-col cols="12" md="5" lg="4" class="align-self-center">
                    <div class="blog-img-container">
                        <div class="top-border-div"/>
                        <v-img :src="require('@/assets/Blog/' + post.image1)" width="100%" height="350"/>
                    </div>
                </v-col>

                <v-col cols="12" md="6" lg="7" class="align-self-center pl-5">
                    <p class="text-justify" v-html="post.section1"/>
                    <h2 class="post-title" v-html="post.subheading1"/>
                    <p class="text-justify" v-html="post.section2"></p>
                </v-col>
            </v-row>

            <v-row class="mt-12">
                <v-col cols="12" :order="$vuetify.breakpoint.smAndDown? 1 : 0" md="6" lg="7" class="align-self-center pl-5">
                    <h2 class="post-title" v-html="post.subheading2"></h2>
                    <p class="text-justify" v-html="post.section3"></p>

                    <h2 class="post-title" v-html="post.subheading3"></h2>
                    <p class="text-justify" v-html="post.section4"></p>
                </v-col>

                <v-col cols="12" md="5" lg="4" class="align-self-center">
                    <div class="blog-img-container">
                        <div class="top-border-div"/>
                        <v-img :src="require('@/assets/Blog/' + post.image2)" v-if="post.image2" width="100%" height="350"/>
                    </div>
                </v-col>
            </v-row>

            <v-row class="pa-5 pr-10 text-justify"><p v-html="post.section5"/></v-row>

        </v-container>

        <!-- Notice post -->
        <v-container class="py-12" v-if="post.isNoticePost1">
            <v-img :src="require('@/assets/Blog/' + post.image1)" width="300" class="mx-auto"/>

            <p class="mt-10">15th March 2020</p>

            <h3 style="text-decoration: underline">
                Wadduwa Beach Villas(Pvt)Ltd's Handling of Guest Safety in light of Covid-19
            </h3>

            <p class="text-justify mt-10">
                Dear Valued Guests,
                <br><br>
                At Wadduwa Beach Villas(Pvt)Ltd,we are continuously monitoring the development of COVID-19 around the worid.
                Our number one priority is the well-being,health and safety of our guest and team members. In order to secure
                just that,we have set-up procedures,plans and routines in place,so that all  of our guests can be safe when staying at our hotel.
                <br>

                At Wadduwa Beach Villas(Pvt)Ltd,we follow the guidelines of local health authorities,and act according
                to the routines and procedures to prevent the spread of COVID-19 at our hotel. Our team members are
                trained to handle situations that may occur at our hotel and we have confidence in their abilities.
                <br>

                Hygiene and cleanliness have always been prioritized.We are also emphasizing the importance of
                good hand hygiene based on recommendations from local health authorities. We have strict hand hygiene
                policies for our team members before eating, preparing food,and after using the bathroom.
                <br><br>
            </p>

            <h4 style="text-decoration: underline">What we do at our hotel for securing the safety of our guest:</h4>
            <ul>
                <li>We follow the guidelines and recommendations of local authorities</li>
                <li>At the reception we have been provided with information about COVID-19 and management instructions</li>
                <li>Increased focus on hand hygiene on our hotel</li>
                <li>Increased cleaning and hygiene protocols</li>
                <li>Regular disinfection of exposed surfaces such as door handles,card terminals and remote controls with anti-bacterial liquids</li>
                <li>Offer disinfectant dispensers in public areas to our guests and at reception area</li>
                <li>Observance of the procedures for dealing with colleagues who are ill</li>
            </ul>

            <h4 style="text-decoration: underline" class="mt-10">
                Security precautions that anyone can take to protect themselves and others from COVID-19:
            </h4>
            <ul>
                <li>Frequent hand washing with soap and warm water</li>
                <li>Practice social distancing</li>
                <li>Have hand disinfection ready (if you need can collect from reception)</li>
                <li>Avoid unnecessary hand contact</li>
                <li>Avoid touching eyes,mouth and nose</li>
                <li>Cover the mouth with the elbow when coughing and sneezing</li>
                <li>Keep at least one meter away from coughing or sneezing persons</li>
            </ul>

            <p class="mt-10">
                Our hotel is open (as per government/local health directives) and operate as normal, and with
                safety as our main priority and we are taking every precaution in order for
                our guests to be safe when staying or visiting our hotel.
            </p>

            <h4 style="text-decoration: underline" class="mt-10">
                Ban on Public Gathering (15"March 2020 to 27" March 2020):
            </h4>

            <p>
                The Police Media Division stated that hosting (All private & Government Sectors) any events,including
                gatherings that involve large crowds of people will be prohibited for two weeks with effect
                from 15"March 2020 to 27" March 2020.
                <br><br>
                We will keep you updated as soon as we receive an update from local health authorities.
            </p>

        </v-container>
        <!-- Notice post -->
    </div>
</template>

<style lang="scss" scoped>
    .blog-img-container {
        position: relative;
        .top-border-div {
            width: 100%;
            position: absolute;
            top: -10px;
            border-top: 5px solid #FADE03;
        }
    }
</style>

<script>
    // @ is an alias to /src
    import BannerSection from "@/components/BannerSection.vue";

    export default {
        components: {
            BannerSection
        },
        data() {
            return {
                bannerHeight: null,
                post: {}
            }
        },
        metaInfo() {
            if (this.post !== undefined && this.post !== null) {
                if (typeof this.post === 'object') {
                    return {
                        title: 'Wadduwa Beach Villas',
                        titleTemplate: this.post.title + ' → %s',
                        meta: [
                            { name: 'name', content: this.post.title },
                            { name: 'description', content: this.post.section1 }
                        ]
                    }
                }
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        },
        created() {
            let currentPostName = this.$route.params.name;
            if (currentPostName !== undefined && currentPostName !== null) {
                // Find the selected post object
                this.blogPosts().forEach((post) => {
                    if (post.title.replace(/\s+/g, '-').toLowerCase() === currentPostName) {
                        this.post = post;
                    }
                });
            }
        }
    }
</script>
