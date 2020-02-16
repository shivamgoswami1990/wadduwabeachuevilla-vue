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
      btnBookWithIconPath: "ex.png"
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
      btnBookWithIconPath: 'ex.png'
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
      btnBookWithIconPath: 'ab.png'
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
      btnBookWithIconPath: 'ab.png'
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
      btnBookWithIconPath: 'ab.png'
    }
  ];
};

Vue.prototype.blogPosts = () => {
  return [
    {
      title: "3 Reasons Why You Should Stay at Wadduwa Beach Villas",
      section1: "Hello everyone. This post aims to provide you with 3 concise reasons, as to why you should visit and stay with us at Wadduwa Beach Villas. The villa was founded in 2014 - six years ago and has been welcoming guests from all over the world.  We are proud to be a quiet getaway near Colombo with outstanding Sri Lankan hospitality",
      subheading1: "Private Pool",
      section2: "The hot and humid weather of Sri Lanka means you will be spending a lot of time in the water! We have a large outdoor pool which you can indulge yourself in. Cool off during the day or enjoy the warm water as the colder weather of the night sets in.  Traveling with kids? No worries we have a baby pool too! The pool is attended by staff and you can order your favorite beverages and food. We also have sun lounges for those who want to relax, sunbathe and read. For those who prefer swimming in the ocean, the beach a few steps away from the pool !",
      image1: "Post1/1.jpg",
      subheading2: "Freebies & Facilities",
      section3: "Our beach resort is well equipped and has a great variety of facilities. We offer free onsite parking and free wifi to all of our guests. Further, all our rooms are air-conditioned. For those who like sports, we have Beach Volleyball, Badminton and can organise other activities such as tours around the country in a private van. We also have the ability to host functions and events to meet your demand for custom experiences. We can organize;  music and DJ, events lighting and much more to make your event more successful!",
      subheading3: "Restaurant",
      section4: "The venue comes with a restaurant that provides both a la carte service and a buffet. Our highly skilled chefs are capable of providing local curry based dishes and international delights. We also understand that not everyone is the same and individuals have various dietary requirements and allergies. Our kitchen staff is able to provide for everyone. These include yummy vegan, vegetarian, gluten-free and dairy-free meals. If you let them know, they will surely look after you.",
      image2: "Post1/2.jpg",
      section5: "So there you have it. If you are planning a trip to Sri Lanka be sure to add Wadduwa Beach Villas to your list. We can assure you, that it will be a trip of a lifetime. We look forward to welcoming you to our villas."
    },
    {
      title: "10 Reasons Why You Dine at Wadduwa",
      section1: "Hello everyone. This post aims to provide you with 3 concise reasons, as to why you should visit and stay with us at Wadduwa Beach Villas. The villa was founded in 2014 - six years ago and has been welcoming guests from all over the world.  We are proud to be a quiet getaway near Colombo with outstanding Sri Lankan hospitality",
      subheading1: "Private Pool",
      section2: "The hot and humid weather of Sri Lanka means you will be spending a lot of time in the water! We have a large outdoor pool which you can indulge yourself in. Cool off during the day or enjoy the warm water as the colder weather of the night sets in.  Traveling with kids? No worries we have a baby pool too! The pool is attended by staff and you can order your favorite beverages and food. We also have sun lounges for those who want to relax, sunbathe and read. For those who prefer swimming in the ocean, the beach a few steps away from the pool !",
      image1: "Post1/2.jpg",
      subheading2: "Freebies & Facilities",
      section3: "Our beach resort is well equipped and has a great variety of facilities. We offer free onsite parking and free wifi to all of our guests. Further, all our rooms are air-conditioned. For those who like sports, we have Beach Volleyball, Badminton and can organise other activities such as tours around the country in a private van. We also have the ability to host functions and events to meet your demand for custom experiences. We can organize;  music and DJ, events lighting and much more to make your event more successful!",
      subheading3: "Restaurant",
      section4: "The venue comes with a restaurant that provides both a la carte service and a buffet. Our highly skilled chefs are capable of providing local curry based dishes and international delights. We also understand that not everyone is the same and individuals have various dietary requirements and allergies. Our kitchen staff is able to provide for everyone. These include yummy vegan, vegetarian, gluten-free and dairy-free meals. If you let them know, they will surely look after you.",
      image2: "Post1/1.jpg",
      section5: "So there you have it. If you are planning a trip to Sri Lanka be sure to add Wadduwa Beach Villas to your list. We can assure you, that it will be a trip of a lifetime. We look forward to welcoming you to our villas."
    }
  ];
};


new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
