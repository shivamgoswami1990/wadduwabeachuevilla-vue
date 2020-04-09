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
      blogFeatDesc: "This post aims to provide you with 3 concise reasons, as to why you should visit and stay with us at Wadduwa Beach Villas. The villa was founded in 2014 - six years ago and has been welcoming guests from all over the world.  We are proud to be a quiet getaway near Colombo with outstanding Sri Lankan hospitality",
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
      title: "7 Reasons why you should dine at Wadduwa Beach Villas",
      blogFeatDesc: "At Wadduwa Beach Villas we have a lovely Al- Fresco restaurant that serves a variety of tasty foods from Sri Lankan cuisine, select European dishes, and select Chinese dishes",
      section1: "<h2 class='post-title'>Hello Again !</h2>" +
          "Feeling Hungry ? At Wadduwa Beach Villas we have a lovely Al- Fresco restaurant that serves a variety of tasty foods from Sri Lankan cuisine, select European dishes, and select Chinese dishes",
      subheading1: "Al Fresco seating",
      section2: "We provide both indoor and outdoor seating in our Al Fresco restaurant set within 1.6 acres of landscaped palm gardens lapped by the Indian Ocean. A truly tranquil environment for your overseas holiday or, to hangout and chill with your family and loved ones.",
      image1: "Post2/1.png",
      subheading2: "A passion for food",
      section3: "We select only the freshest quality ingredients for your dining experience. We also aim to support local business - quality fresh seafood is from the local Wadduwa fish market which is hauled in daily from the ocean. Furthermore, if you are seated towards the beach you can witness fish being hauled in for the day  using large fishing nets; you can even take part in the associated activities from mid November to April as we are located in a quiet fishing village. Keep an eye out!",
      subheading3: "Flexibility towards your dietary requirements",
      section4: "Please ask our friendly, and accommodating staff if we can accommodate your dietary needs. We can cater for vegans, dairy free, and vegetarians.  If you have any other requirements please get in touch with us!",
      image2: "Post2/2.png",
      section5: "<h2 class='post-title'> Recycling Material / Composting</h2>" +
          "At Wadduwa Beach Villas, we are passionate about doing our bit for the environment. We recycle/compost organic waste and by-products from food service. The resultant compost is then reused to keep our landscape plants happy and lush to provide a natural and tranquil setting for your enjoyment. Other applicable non-organic waste is collected and provided to local businesses that recycle and reuse them.<br><br>" +
          "<h2 class='post-title'>Customer centric service</h2>" +
          "At the heart of a business is customer service. We appreciate our patrons very much, and aim to reflect that in the service we provide to create a memorable experience.<br><br>" +
          "<h2 class='post-title'>Hygiene</h2>" +
          "We understand that a dining experience is meant to taste and feel good, while at the premises and later. Therefore, different foods are cut/prepared using designated boards and knives. This process also allows us to avoid cross contamination. Cleanliness is a priority for us to serve you better!<br><br>" +
          "<h2 class='post-title'>Value</h2>" +
          "We understand that quality needs to be matched with price. We aim to provide you with quality food that is reasonably priced. However, we also understand that at a certain level of quality cannot be provided at a lower price. Therefore, we provide a dining experience as opposed to simply meals. If that sounds like you, don’t miss out!"
    },
    {
      title: "4 reasons to celebrate your next day out package at Wadduwa Beach Villas",
      blogFeatDesc: "Are you looking for the beach, a pool and a lush landscaped pal garden to chill out ? We can provide all the above in the same location! Wadduwa Beach Villas also has a baby pool where our baby can enjoy them while you keep a watchful eye from the main pool.",
      section1: "Ayubowan !<br><br><h2 class='post-title'>The Ambience !</h2>" +
          "Are you looking for the beach, a pool and a lush landscaped pal garden to chill out ? We can provide all the above in the same location! Wadduwa Beach Villas also has a baby pool where our baby can enjoy them while you keep a watchful eye from the main pool.",
      subheading1: "Customer centric service",
      section2: "We put the customer first towards creating a unique experience. As a result we look to cater to your unique needs be it; day out packages, birthdays, events, and private lunch bookings/ buffets.",
      image1: "Post3/1.jpg",
      subheading2: "Private Bookings",
      section3: "Are you looking for a venue to host corporate and/or private events? You can book the entire 1.5 acre property exclusively for yourself and company with rates starting from LKR 150,000 per night on a Bed and Breakfast basis. For these exclusive bookings, you will be able to celebrate with; a private swimming pool, exclusive access to 1.5 acres of landscaped garden with the associated outdoor living and dining areas, a customizable configuration of 3 rooms and 3 villas for a total of  22 persons, dedicated restaurant and wait staff, and private beach access.",
      subheading3: "Convenience factor: A 40 min drive from Colombo to Freedom!",
      section4: "Your time is valuable. Hence, we are only a breezy 40 minute drive away from Colombo to get away. You can have fun sooner ! If you are an International traveller you can easily take two scenic train rides and explore the local scenery before getting to Wadduwa Beach Villas.",
      image2: "Post3/2.png",
      section5: ""
    },
    {
      title: "Handling of guest safety in light of COVID-19",
      blogFeatDesc: "At Wadduwa Beach Villas(Pvt)Ltd,we are continuously monitoring the development of COVID-19 around the worid. Our number one priority is the well-being,health and safety of our guest and team members.In order to secure just that,we have set-up procedures,plans and routines in place,so that all  of our guests can be safe when staying at our hotel.",
      image1: "Post4/1.jpg",
      isNoticePost1: true
    },
    {
      title: "Visit Sri Lanka ? Do not miss out, Serendipity awaits !",
      blogFeatDesc: "There are very few places on earth that pack this much variety and choice as Sri Lanka, the year-round holiday destination. Colombo its capital, is easily accessible from anywhere in the world. Sri Lanka continues to surprise even the well-travelled because it is not a single experience destination.",
      section1: "Beaches, sun, surf great food and drink 365 days a year? Yes!<br><br>" +
          "Safaris, whale watching, snorkelling and diving? Tick!",
      subheading1: "",
      section2: "Home stays to seven-star hotels or sustainable vacations in homely comfort - absolutely.Prefer culture, history, religious places of interest and cool climes surrounded by world heritage sites, forts of yesterday year the choices are varied.",
      image1: "Post5/1.jpg",
      subheading2: "",
      section3: "However, just lazing with a good book, lounging by the pool sipping your favourite drink with a blood red sunset before dinner has its own charm.<br><br>" +
          "For the whole of being experience, Ayurveda, yoga, special meals and spa activities cleanse the body and mind reinvigorating your being like nothing else. This can be fulfilled on site and in other locations around Colombo, and Sri Lanka.",
      subheading3: "",
      section4: "Sri Lanka offers all of this and more in 65 000 square kilometres of island the size of Ireland where you can travel in comfort by land, air, or sea.<br><br>" +
          "It is time you visited Sri Lanka to see, feel, enjoy and experience the true Lanka and its many mysteries and charm.",
      image2: "",
      section5: ""
    },
    {
      title: "Woman Entrepreneurs around Sri Lanka #IWD2020",
      blogFeatDesc: "We are proud to see our founder Mrs. Fernando featured as a Sri Lankan woman entrepreneur on Satyn magazine for International Women’s Days 2020 – Sri Lankas most popular women’s magazine.",
      section1: "Congratulations to all the other featured Women Entrepreneurs, and those that are working on their Entrepreneurial dreams in Sri Lanka, and around the world.",
      subheading1: "",
      section2: "In a developing country such as Sri Lanka, it is important to recognize and allow women entrepreneurs to reach their potential. The impacts of women entrepreneurs provide a great value-added service to society based on how women interact with society simultaneously, across multiple levels; as an employer, a mother, a voice in civil society to name a few.",
      image1: "Post6/1.png",
      subheading2: "",
      section3: "Notwithstanding women entrepreneurship in Colombo, there needs to be a greater participation of women from regional and lesser developed parts of Sri Lanka. These opportunities would allow for greater gender, social, and economic mobility for said women and their community. Furthermore, it would contribute towards the overall holistic development of Sri Lanka as a nation.",
      subheading3: "",
      section4: "Please follow the link below to see and read about fellow Women entrepreneurs who have a wide range of skills, " +
          "talents, and amazing stories of entrepreneurship in a diverse range of industries.<br><br>" +
          "<a href='https://www.satynmag.com/2020/03/06/women-entrepreneurs-we-are-proud-of-iwd-2020/' target='_blank'>" +
          "https://www.satynmag.com/2020/03/06/women-entrepreneurs-we-are-proud-of-iwd-2020/</a>",
      image2: "",
      section5: "" +
          "<a href='https://www.facebook.com/hashtag/business?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#business</a>" +
          "<a href='https://www.facebook.com/hashtag/internationalwomensday?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#internationalwomensday</a>" +
          "<a href='https://www.facebook.com/hashtag/businesswomen?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#businesswomen</a>" +
          "<a href='https://www.facebook.com/hashtag/entrepreneurship?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#entrepreneurship</a>" +
          "<a href='https://www.facebook.com/hashtag/satynmagbusinesswomen?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmagbusinesswomen</a>" +
          "<a href='https://www.facebook.com/hashtag/womeninbusiness?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#womeninbusiness</a>" +
          "<a href='https://www.facebook.com/hashtag/womenownedbusiness?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#womenownedbusiness</a>" +
          "<a href='https://www.facebook.com/hashtag/satynmag?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmag</a>" +
          "<a href='https://www.facebook.com/hashtag/satynmagreaders?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmagreaders</a>" +
          "<a href='' class='d-inline-flex mr-2' target='_blank'>#wadduwabeachvilla</a>"
    },
  ];
};


new Vue({
  vuetify,
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app');
