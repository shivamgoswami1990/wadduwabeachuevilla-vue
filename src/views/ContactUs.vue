<template>
    <div>
        <banner-section imgFilename="ContactUs/Contactus.jpg" preTitle="Wadduwa Beach Villas" title="Contact Us"
                        description="Get in touch"/>

        <v-container class="py-12">
            <h2 class="display-2">Contact Wadduwa Beach Villas</h2>
            <v-row class="pl-1 pt-5 justify-space-between">
                <v-col cols="12" md="5" class="align-self-center">
                    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
                        <v-text-field v-model="name" label="Name" clearable
                                      :rules="[rules.required]" class="my-2">
                        </v-text-field>

                        <v-text-field v-model="email" label="Email" clearable
                                      :rules="[rules.required, rules.email]" class="my-2">
                        </v-text-field>

                        <v-textarea v-model="message" label="Message" clearable auto-grow
                                      :rules="[rules.required]" class="my-2">
                        </v-textarea>

                        <v-alert type="primary" class="black--text" border="top"
                                 outlined light icon="mdi-check-circle" v-if="showSuccessMessage">
                            Your query has been submitted. We will be in touch
                        </v-alert>
                        <v-btn color="primary" type="submit" tile :disabled="!valid" depressed width="40%" height="45"
                               @click.native="save" class="black--text mt-5">Submit</v-btn>
                    </v-form>
                </v-col>

                <v-col cols="12" md="5">
                    <v-img :src="locationImg" height="430">
                        <v-layout align-end justify-center fill-height wrap>
                            <v-btn color="#263238" block tile depressed height="45" @click="openMaps">
                                Get directions
                            </v-btn>
                        </v-layout>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BannerSection from "@/components/BannerSection.vue";
    import locationImg from "@/assets/ContactUs/location.jpg";

    export default {
        metaInfo: {
            title: 'Wadduwa Beach Villa',
            titleTemplate: 'Contact us → %s',
            meta: [
                { name: 'name', content: 'Wadduwa Beach Villa contact us' },
                { name: 'description', content: 'Get in touch' }
            ]
        },
        components: {
            BannerSection
        },
        data() {
            return {
                bannerHeight: null,
                locationImg: locationImg,
                valid: false,
                rules: {
                    required: value => !!value || 'Required.',
                    max: v => this.validateFormRules(v, 'lte', 20, 'Max 20 characters'),
                    min: v => this.validateFormRules(v, 'gte', 8, 'Min 8 characters'),
                    email: (v) => {
                        if (v !== undefined && v !== null) {
                            if (v.length > 0) {
                                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                return pattern.test(v) || 'Invalid e-mail.';
                            }
                            return true;
                        }
                        return true;
                    }
                },
                name: '',
                email: '',
                message: '',
                showSuccessMessage: false
            }
        },
        mounted() {
            this.bannerHeight = this.visibleViewportHeight();
            console.log(process.env.VUE_APP_REST_URL);
        },
        methods: {
            save() {
                if (this.$refs.form.validate()) {
                    // Submit form on valid
                    const data = { contact: {
                        "name": this.name,
                        "email": this.email,
                        "message": this.message,
                        }};
                    let vm = this;
                    fetch(process.env.VUE_APP_REST_URL + '/contacts', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            // On success, clear form & display success message
                            if ('response_code' in data) {
                                if (data.response_code === '202') {
                                    vm.name = '';
                                    vm.email = '';
                                    vm.message = '';

                                    // Show the message on a timeout
                                    vm.showSuccessMessage = true;
                                    setTimeout(function () {
                                        vm.showSuccessMessage = false;
                                    }, 4000);
                                }
                            }
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
            },
            openMaps() {
                window.open('https://www.google.com/maps/place/Wadduwa+Beach+Villas/@6.670724,79.9211593,17z', '_blank');
            }
        }
    }
</script>
