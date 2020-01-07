import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

// Init viewport height for in app use - video & hero image
Vue.prototype.visibleViewportHeight = () => {
  return vuetify.framework.breakpoint.height;
};

Vue.prototype.visibleViewportWidth = () => {
  return vuetify.framework.breakpoint.width;
};

// Form validation rules
Vue.prototype.validateFormRules = (value, opType, limit, msg) => {
  if (value !== undefined && value !== null) {
    // Check the operation type e.g. gt, gte, lt, lte or e
    if (opType === 'gt') {
      return value.length > limit || msg;
    } if (opType === 'gte') {
      return value.length >= limit || msg;
    } if (opType === 'lt') {
      return value.length < limit || msg;
    } if (opType === 'lte') {
      return value.length <= limit || msg;
    } if (opType === 'e') {
      return value.length === limit || msg;
    }
  } else {
    return msg;
  }
};

Vue.prototype.availableRooms = () => {
  return [
    {
      name: "Double Room",
      description: "",
      price: "70",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      images: ['room-3.jpg', 'room-2.jpg', 'room-1.jpg'],
      link: "https://hotels.cloudbeds.com/reservation/3DqprA",
      altLink: "https://hotels.cloudbeds.com/reservation/3DqprA"
    },
    {
      name: "Triple Room",
      description: "",
      price: "90",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      images: ['room-3.jpg', 'room-2.jpg', 'room-1.jpg'],
      link: "https://hotels.cloudbeds.com/reservation/3DqprA",
      altLink: "https://hotels.cloudbeds.com/reservation/3DqprA"
    },
    {
      name: "Family Villa",
      description: "The Family Villa has a pool view and is located 15 meters from the sea shore. It has two separate bedrooms each with separate attached bathrooms, one with a sky view bathroom and tub. This villa includes a sitting room, private dining room, as well as a veranda and seating. Sleeps five adults.",
      price: "135",
      facilities: ["Pool view", "Attached bathroom", "Dining room"],
      people: 4,
      images: ['room-1.jpg', 'room-2.jpg', 'room-3.jpg'],
      link: "https://hotels.cloudbeds.com/reservation/3DqprA",
      altLink: "https://hotels.cloudbeds.com/reservation/3DqprA"
    },
    {
      name: "Two Bedroom Villa",
      description: "The Two Bedroom Villa has both a beach and pool view. The two rooms have two separate attached bathrooms a private dining area, and enclosed veranda  of the property with 180 degree view. Sleeps five adults",
      price: "90",
      facilities: ["Pool view", "Two attached bathroom", "Kitchen"],
      people: 4,
      images: ['room-2.jpg', 'room-1.jpg', 'room-3.jpg'],
      link: "https://www.airbnb.com/rooms/4963179?source_impression_id=p3_1578334775_ae4H3z%2FC6DWd9EV6",
      altLink: "tel:+0094713770692"
    },
    {
      name: "Honeymoon Villa",
      description: "The Honeymoon Villa has both a pool and beach view. The single bedroom cottage has an attached bathroom with a spa tub. There is a living area and a veranda which offers a 180 degree view of the greenery and lawn. It offers privacy as it is located in a secluded area of the property. Sleeps two adults.",
      price: "70",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      images: ['room-3.jpg', 'room-2.jpg', 'room-1.jpg'],
      link: "https://www.airbnb.com/rooms/4512825?source_impression_id=p3_1578334672_9d%2FqFgFRqPEwmSBS",
      altLink: "tel:+0094713770692"
    }
  ];
};

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
