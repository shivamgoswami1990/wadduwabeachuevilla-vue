<template>
    <div>
        <banner-section imgFilename="contactus.jpg" preTitle="Wadduwa Beach Villa" title="Contact Us"
                        description="Get in touch"></banner-section>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BannerSection from "@/components/BannerSection.vue";

    export default {
        components: {
            BannerSection
        },
        data() {
            return {
                bannerHeight: null
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
        }
    }
</script>