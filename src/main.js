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
      description: "Our standard double room is an expanded hotel room is designed for two people. Room amenities include; a king size bed, cable TV, storage space, wardrobe, clothes rack, continuous WIFI access, and en suite bathroom. This room type is ideal for a brief stay of a few days. All room options offer stunning views of the property and surrounding environment.",
      price: "70",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      parentDir: 'DoubleRoom',
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      link: "https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information",
      altLink: "https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information",
      btnIconType: 'expedia'
    },
    {
      name: "Triple Room",
      description: "Our standard triple room is an expanded hotel room designed for three people. Room amenities include; a king size bed, a large sofa bed, cable TV, storage space, wardrobe, clothes rack, continuous WIFI access, and en suite bathroom. This room type is ideal for a brief stay of a few days. All room options offer stunning views of the property and surrounding environment.",
      price: "90",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      parentDir: 'TripleRoom',
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
      link: "https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information",
      altLink: "https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information",
      btnIconType: 'expedia'
    },
    {
      name: "Family Villa",
      description: "The Family Villa has a pool view and is located 15 meters from the sea shore. It has two separate bedrooms each with separate attached bathrooms, one with a sky view bathroom and tub. This villa includes a sitting room, private dining room, as well as a veranda and seating. Sleeps five adults.",
      price: "135",
      facilities: ["Pool view", "Attached bathroom", "Dining room"],
      people: 4,
      parentDir: 'FamilyVilla',
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      link: "https://www.airbnb.com/rooms/3824500?source_impression_id=p3_1579088127_n%2Ftg0WXIR0%2F4Retl",
      altLink: "https://www.airbnb.com/rooms/3824500?source_impression_id=p3_1579088127_n%2Ftg0WXIR0%2F4Retl",
      btnIconType: 'airbnb'
    },
    {
      name: "Two Bedroom Villa",
      description: "The Two Bedroom Villa has both a beach and pool view. The two rooms have two separate attached bathrooms a private dining area, and enclosed veranda  of the property with 180 degree view. Sleeps five adults",
      price: "90",
      facilities: ["Pool view", "Two attached bathroom", "Kitchen"],
      people: 4,
      parentDir: 'TwoRoomVilla',
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      link: "https://www.airbnb.com/rooms/4963179?source_impression_id=p3_1579078994_7j71vmZJbAOIq%2BOH",
      altLink: "https://www.airbnb.com/rooms/4963179?source_impression_id=p3_1579078994_7j71vmZJbAOIq%2BOH",
      btnIconType: 'airbnb'
    },
    {
      name: "Honeymoon Villa",
      description: "The Honeymoon Villa has both a pool and beach view. The single bedroom cottage has an attached bathroom with a spa tub. There is a living area and a veranda which offers a 180 degree view of the greenery and lawn. It offers privacy as it is located in a secluded area of the property. Sleeps two adults.",
      price: "70",
      facilities: ["Pool view", "Attached bathroom", "Kitchen", "Veranda"],
      people: 2,
      parentDir: 'HoneymoonVilla',
      images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      link: "https://www.airbnb.com/rooms/4512825?source_impression_id=p3_1579088185_%2FYvlnDpyHBmFUoBl",
      altLink: "https://www.airbnb.com/rooms/4512825?source_impression_id=p3_1579088185_%2FYvlnDpyHBmFUoBl",
      btnIconType: 'airbnb'
    }
  ];
};

new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
