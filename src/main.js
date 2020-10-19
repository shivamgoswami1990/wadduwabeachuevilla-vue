import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

// Init viewport height for in app use - video & hero image
Vue.prototype.visibleViewportHeight = () => vuetify.framework.breakpoint.height;

Vue.prototype.visibleViewportWidth = () => vuetify.framework.breakpoint.width;

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

Vue.prototype.availableRooms = () => [
  {
    name: 'Double Room',
    description: 'Our standard double room is an expanded hotel room is designed for two people. Room amenities include; a king size bed, cable TV, storage space, wardrobe, clothes rack, continuous WIFI access, and en suite bathroom. This room type is ideal for a brief stay of a few days. All room options offer stunning views of the property and surrounding environment.',
    price: '70',
    facilities: ['Pool view', 'Attached bathroom', 'Kitchen', 'Veranda'],
    people: 2,
    parentDir: 'DoubleRoom',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    link: 'https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information',
    altLink: 'https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information',
    btnBookWithIconPath: 'ex.png'
  },
  {
    name: 'Triple Room',
    description: 'Our standard triple room is an expanded hotel room designed for three people. Room amenities include; a king size bed, a large sofa bed, cable TV, storage space, wardrobe, clothes rack, continuous WIFI access, and en suite bathroom. This room type is ideal for a brief stay of a few days. All room options offer stunning views of the property and surrounding environment.',
    price: '90',
    facilities: ['Pool view', 'Attached bathroom', 'Kitchen', 'Veranda'],
    people: 2,
    parentDir: 'TripleRoom',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    link: 'https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information',
    altLink: 'https://www.expedia.com/Wadduwa-Hotels-Wadduwa-Beach-Villas-Pvt-Ltd.h42125118.Hotel-Information',
    btnBookWithIconPath: 'ex.png'
  },
  {
    name: 'Family Villa',
    description: 'The Family Villa has a pool view and is located 15 meters from the sea shore. It has two separate bedrooms each with separate attached bathrooms, one with a sky view bathroom and tub. This villa includes a sitting room, private dining room, as well as a veranda and seating. Sleeps five adults.',
    price: '135',
    facilities: ['Pool view', 'Attached bathroom', 'Dining room'],
    people: 4,
    parentDir: 'FamilyVilla',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    link: 'https://www.airbnb.com/rooms/3824500?source_impression_id=p3_1579088127_n%2Ftg0WXIR0%2F4Retl',
    altLink: 'https://www.airbnb.com/rooms/3824500?source_impression_id=p3_1579088127_n%2Ftg0WXIR0%2F4Retl',
    btnBookWithIconPath: 'ab.png'
  },
  {
    name: 'Two Bedroom Villa',
    description: 'The Two Bedroom Villa has both a beach and pool view. The two rooms have two separate attached bathrooms a private dining area, and enclosed veranda  of the property with 180 degree view. Sleeps five adults',
    price: '90',
    facilities: ['Pool view', 'Two attached bathroom', 'Kitchen'],
    people: 4,
    parentDir: 'TwoRoomVilla',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    link: 'https://www.airbnb.com/rooms/4963179?source_impression_id=p3_1579078994_7j71vmZJbAOIq%2BOH',
    altLink: 'https://www.airbnb.com/rooms/4963179?source_impression_id=p3_1579078994_7j71vmZJbAOIq%2BOH',
    btnBookWithIconPath: 'ab.png'
  },
  {
    name: 'Honeymoon Villa',
    description: 'The Honeymoon Villa has both a pool and beach view. The single bedroom cottage has an attached bathroom with a spa tub. There is a living area and a veranda which offers a 180 degree view of the greenery and lawn. It offers privacy as it is located in a secluded area of the property. Sleeps two adults.',
    price: '70',
    facilities: ['Pool view', 'Attached bathroom', 'Kitchen', 'Veranda'],
    people: 2,
    parentDir: 'HoneymoonVilla',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    link: 'https://www.airbnb.com/rooms/4512825?source_impression_id=p3_1579088185_%2FYvlnDpyHBmFUoBl',
    altLink: 'https://www.airbnb.com/rooms/4512825?source_impression_id=p3_1579088185_%2FYvlnDpyHBmFUoBl',
    btnBookWithIconPath: 'ab.png'
  }
];

Vue.prototype.blogPosts = () => [
  {
    title: '3 Reasons Why You Should Stay at Wadduwa Beach Villa',
    blogFeatDesc: 'This post aims to provide you with 3 concise reasons, as to why you should visit and stay with us at Wadduwa Beach Villa. The villa was founded in 2014 - six years ago and has been welcoming guests from all over the world.  We are proud to be a quiet getaway near Colombo with outstanding Sri Lankan hospitality',
    section1: 'Hello everyone. This post aims to provide you with 3 concise reasons, as to why you should visit and stay with us at Wadduwa Beach Villa. The villa was founded in 2014 - six years ago and has been welcoming guests from all over the world.  We are proud to be a quiet getaway near Colombo with outstanding Sri Lankan hospitality',
    subheading1: 'Private Pool',
    section2: 'The hot and humid weather of Sri Lanka means you will be spending a lot of time in the water! We have a large outdoor pool which you can indulge yourself in. Cool off during the day or enjoy the warm water as the colder weather of the night sets in.  Traveling with kids? No worries we have a baby pool too! The pool is attended by staff and you can order your favorite beverages and food. We also have sun lounges for those who want to relax, sunbathe and read. For those who prefer swimming in the ocean, the beach a few steps away from the pool !',
    image1: 'Post1/1.jpg',
    subheading2: 'Freebies & Facilities',
    section3: 'Our beach resort is well equipped and has a great variety of facilities. We offer free onsite parking and free wifi to all of our guests. Further, all our rooms are air-conditioned. For those who like sports, we have Beach Volleyball, Badminton and can organise other activities such as tours around the country in a private van. We also have the ability to host functions and events to meet your demand for custom experiences. We can organize;  music and DJ, events lighting and much more to make your event more successful!',
    subheading3: 'Restaurant',
    section4: 'The venue comes with a restaurant that provides both a la carte service and a buffet. Our highly skilled chefs are capable of providing local curry based dishes and international delights. We also understand that not everyone is the same and individuals have various dietary requirements and allergies. Our kitchen staff is able to provide for everyone. These include yummy vegan, vegetarian, gluten-free and dairy-free meals. If you let them know, they will surely look after you.',
    image2: 'Post1/2.jpg',
    section5: 'So there you have it. If you are planning a trip to Sri Lanka be sure to add Wadduwa Beach Villa to your list. We can assure you, that it will be a trip of a lifetime. We look forward to welcoming you to our villas.'
  },
  {
    title: '7 Reasons why you should dine at Wadduwa Beach Villa',
    blogFeatDesc: 'At Wadduwa Beach Villa we have a lovely Al-Fresco restaurant that serves a wide variety of delicious meals. Our menu ranges from tantalising, spicy Sri Lankan cuisine, to select sweet and savoury European and Chinese dishes. You will truly be spoilt for choice.',
    section1: "<h2 class='post-title'>Hello Again !</h2>"
          + 'Feeling Hungry ? At Wadduwa Beach Villa we have a lovely Al-Fresco restaurant that serves a wide variety of delicious meals. Our menu ranges from tantalising, spicy Sri Lankan cuisine, to select sweet and savoury European and Chinese dishes. You will truly be spoilt for choice.',
    subheading1: 'Al Fresco seating',
    section2: 'Set within 1.6 acres of landscaped palm gardens, our Al-Fresco restaurant provides both indoor and outdoor seating. You can choose a high quality, indoor dining experience that is sheltered from the elements, or opt to sit outside and enjoy the natural surroundings of our beach resort. This truly tranquil atmosphere is elevated by the sounds of the native birds and the waves of the Indian Ocean, which laps at the beach our restaurant overlooks. Vibrant, spacious, and nestled in greenery, it is the perfect environment to hangout and relax with your family and loved ones.',
    image1: 'Post2/1.png',
    subheading2: 'A passion for food',
    section3: 'We select only the freshest, quality ingredients to create an elevated dining experience for our guests. We aim to support local businesses by sourcing our seafood fresh from the local Wadduwa fish market; the morning catch is hauled in daily from the ocean, guaranteeing us the freshest fish on this side of the coast. Furthermore, if you are seated facing the beach, you can witness firsthand the process of the fishermen. Watch as they drag in their large fishing nets and sort out fresh fish and crabs while the birds call out from above. If you’re interested in truly experiencing life in a quiet fishing village, you can even take part in the associated activities from mid-November to April. Keep an eye out!',
    subheading3: 'Flexibility towards your dietary requirements',
    section4: 'At our restaurant, we understand that no two patrons are alike and are pleased to offer a wide variety of options to meet your dietary requirements. Please ask our friendly and accommodating staff if we can adjust our dishes to your dietary needs; we cater to vegans, dairy free, and vegetarians alike. If you have any other requirements or want to notify us of allergies, please get in touch with us and we will do our utmost to accommodate you.',
    image2: 'Post2/2.png',
    section5: "<h2 class='post-title'> Recycling Material / Composting</h2>"
          + 'At Wadduwa Beach Villa, we are passionate about doing our part to save the environment. We recycle and compost all our organic waste along with the by-products from our food service. The resultant compost is then reused in our landscaped garden to keep the plants happy and lush. This allows us to give back to the same nature that provides us with such a beautiful and tranquil environment to enjoy. Other applicable non-organic wastes, such as glass and metal, are collected and handed over to local recycling businesses in order to reuse them.<br><br>'
          + "<h2 class='post-title'>Customer centric service</h2>"
          + 'At the heart of good business, is good customer service. We at Wadduwa Beach Villa understand this and appreciate your patronage. We aim to reflect that in the services we provide by creating memorable, unique experiences that are tailored to each patron.<br><br>'
          + "<h2 class='post-title'>Hygiene</h2>"
          + 'At our resort, we believe that an excellent dining experience is meant not only to taste amazing, but also to make our patrons feel good, both at the premises and after the meal is done. Therefore, different food items are cut and prepared using designated boards and knives, as per industry standard. It is important to us that we respect your specific dietary needs, as such, this process also allows us to avoid cross contamination when catering to you. You will never have to doubt if your vegan meal is truly vegan, as cleanliness and hygiene are a priority to us, in order to serve you better!<br><br>'
          + "<h2 class='post-title'>Value</h2>"
          + 'We understand that the quality of a service needs to be matched with an appropriate price, however, we also understand that a certain level of quality cannot be provided at a lower price. As such, at our villas, we provide a dining experience as opposed to a simple meal: for a reasonable price, we provide you with high quality food that not only looks and tastes great, but is supported by a perfect ambience and service. If this sounds like your cup of tea, excuse the pun, be sure not to miss out!'
  },
  {
    title: '4 reasons to celebrate your next day out package at Wadduwa Beach Villa',
    blogFeatDesc: 'Are you looking for a sunny beach, a warm pool, and a lush, landscaped garden to relax and soak up the sun in? Are you looking to entertain a crowd, be it family or friends, and make unforgettable memories? Or perhaps you want to take the kids out so they can enjoy themselves while the adults have some quiet time? Well, we can provide all of that in the same location! At Wadduwa Beach Villa, we have not only the sun, sand and ocean, we also have a pool with an attached baby pool and a restaurant so that you can enjoy your day out and keep the kids safely entertained.',
    section1: "Ayubowan !<br><br><h2 class='post-title'>The Ambience !</h2>"
          + 'Are you looking for a sunny beach, a warm pool, and a lush, landscaped garden to relax and soak up the sun in? Are you looking to entertain a crowd, be it family or friends, and make unforgettable memories? Or perhaps you want to take the kids out so they can enjoy themselves while the adults have some quiet time? Well, we can provide all of that in the same location! At Wadduwa Beach Villa, we have not only the sun, sand and ocean, we also have a pool with an attached baby pool and a restaurant so that you can enjoy your day out and keep the kids safely entertained.',
    subheading1: 'Customer centric service',
    section2: 'At Wadduwa Beach Villa, we put our customers’ needs first in order to create unique and meaningful experiences. As a result, we look to cater our services to your individual needs. We pride ourselves on the fact that every day out package, birthday party, and family event can be adjusted to your liking. Similarly, our corporate events, private lunch bookings and buffets can be arranged to suit your needs. Just call to find out how we can best serve you!',
    image1: 'Post3/1.jpg',
    subheading2: 'Private Bookings',
    section3: 'Are you looking for a venue to host corporate and/or private events?'
          + 'You can book our entire 1.6 acre  property exclusively for yourself and company, with rates starting from LKR 150,000 per night on a Bed and Breakfast basis.\n'
          + 'For these exclusive bookings, you will be able to celebrate the important events in your life with a private swimming pool, exclusive access to 1.5 acres of landscaped garden, and access to the associated outdoor living and dining areas. With it comes a customizable configuration of 3 rooms and 3 villas for a total of 22 persons, a dedicated restaurant and wait staff, as well as private beach access.',
    subheading3: 'Convenience factor: A 40 min drive from Colombo to Freedom!',
    section4: 'Your time is valuable. Hence, our villas are only a breezy 40 minute drive away from Colombo so that you can have fun sooner! To reach our beach get away, you have two options; you can drive down the picturesque coast or, if you’re an international traveller, you can take two scenic train rides to reach Wadduwa Beach Villa. If you do take the train, you will get to experience the sights and sounds of village life as you make the short walk from the train station to our beach resort.',
    image2: 'Post3/2.png',
    section5: ''
  },
  {
    title: 'Handling of guest safety in light of COVID-19',
    blogFeatDesc: 'At Wadduwa Beach Villa(Pvt)Ltd,we are continuously monitoring the development of COVID-19 around the worid. Our number one priority is the well-being,health and safety of our guest and team members.In order to secure just that,we have set-up procedures,plans and routines in place,so that all  of our guests can be safe when staying at our hotel.',
    image1: 'Post4/1.jpg',
    isNoticePost1: true
  },
  {
    title: 'Visit Sri Lanka ? Do not miss out, Serendib awaits !',
    blogFeatDesc: 'There are very few places in the world that offer as much variety and choice for travellers as Sri Lanka does. Our small island nation, just 65,000 square kilometres, is packed full to the brim with nature, history, art, culture, exotic foods and resorts. With many hidden gems, Sri Lanka continues to surprise even well-seasoned travellers.',
    section1: '<h2>Where ?</h2>'
          + 'There are very few places in the world that offer as much variety and choice for travellers as Sri Lanka does.'
          + ' Our small island nation, just 65,000 square kilometres, is packed full to the brim with nature, history, art,'
          + ' culture, exotic foods and resorts. With many hidden gems, Sri Lanka continues to surprise even well-seasoned travellers.'
          + '<br/><br/>'
          + 'Unlike most places, we are not a single activity destination; we cater to all. Do you want to kick back and'
          + ' relax in the sun, lounge on the beach, and enjoy good food and drinks 365 days a year? Perhaps you like '
          + 'adrenaline pumping through your veins as you go snorkelling, diving and surfing? A maybe you want to enjoy'
          + ' nature and all its beauty, watching the whales and exploring tropical rainforests on safari?\n'
          + 'As a year-round holiday destination, our capital Colombo, is easily accessible from anywhere in the world;'
          + ' we are simply a flight away. So, don’t hesitate, come join us in our island paradise!',
    subheading1: 'Tell me more ?',
    section2: 'Sri Lanka’s seven-star hotels, eco-lodges and B&Bs all offer impeccable service whilst retaining the comfort of home. Our island is cloaked in culture and boasts a rich history that will enthral any visitor, with several places of religious interest, world heritage sites, and remnants of forts from the yesteryears.'
          + 'For those interested in a spiritual cleansing of the mind and body, we have mastered the art of Ayurveda over generations, combined with yoga, nutritious food and spa treatments; it’s bound to reinvigorate your spirit.',
    image1: 'Post5/1.jpg',
    subheading2: '',
    section3: 'And if you want to simply take a day off by the pool with a good book and your favourite drink, why not enjoy a blood-red sunset and the sight of the night sky and millions of stars too? Sri Lanka caters to all of this, not only in Colombo, but at several sites all over the country.',
    subheading3: 'Will I have enough time ?',
    section4: '<br/>About the same size as Ireland, Sri Lanka offers all of these experiences, plus the comfort of travelling'
          + ' by land, air, or sea. Take a train to the hill-country and be transported to the colonial era with the English'
          + ' climate and architecture. Or fly down south to see what the coastal life is like. Better yet,'
          + ' why not sail up north to experience the once-hidden gems? All this can be done at your leisure, with more than enough time to see every sight.'
          + '<br/>It is time that you visit Sri Lanka to discover the sights, be one with nature, enjoy the culture, and experience the true charm and many hidden gems the island has to offer.',
    image2: '',
    section5: ''
  },
  {
    title: 'Woman Entrepreneurs in Sri Lanka #IWD2020',
    blogFeatDesc: 'We are proud to see our founder Mrs. Fernando featured as a Sri Lankan woman entrepreneur on Satyn magazine for International Women’s Days 2020 – Sri Lankas most popular women’s magazine.',
    section1: "<h2>International Women's Day 2020:</h2>"
          + "We are proud to see our founder Mrs. Fernando featured as a Sri Lankan woman entrepreneur on Satyn magazine for International Women’s Days 2020 – Sri Lanka's "
          + 'most popular women’s magazine.'
          + '<br/><br/> Congratulations to all the other featured Women Entrepreneurs, and those that are working on their Entrepreneurial dreams in Sri Lanka, and around the world.',
    subheading1: '',
    section2: '',
    image1: 'Post6/1.png',
    subheading2: 'Women in Sri Lanka:',
    section3: 'In a developing country such as Sri Lanka, it is important to recognize the role of women in society;'
          + ' they act as caretakers and educators, run businesses and act as voices in civil. Women not only belong to the'
          + ' family unit, but also to the workforce. With approximately 45% of the global workforce being made up of women,'
          + ' they are a driving factor in a country’s economy. <br/><br/>'
          + 'The impacts of women entrepreneurs provide a great value-added service to society based on how women interact'
          + ' with society simultaneously and across multiple levels. As such, women entrepreneurs need to be supported in '
          + 'reaching their full potential. It is important to understand that empowering an individual also empowers the'
          + ' whole community, by providing opportunities to work quality jobs, which in turn allow women to make'
          + ' meaningful choices that raise their community. <br/><br/>'
          + 'Notwithstanding women entrepreneurship in Colombo, there needs to be a greater participation of women from '
          + 'regional and lesser developed parts of Sri Lanka. Empowering women and providing them with opportunities and'
          + ' a voice allows for greater gender, social, and economic mobility for said women and their community.'
          + ' Small, rural businesses can expand to form economic networks that sustain future generations.'
          + ' The same economic networks develop villages into town, and towns into cities, thus contributing towards'
          + ' the overall holistic development of Sri Lanka as a nation.',
    subheading3: '',
    section4: '',
    image2: '',
    section5: '<h3>Find out more:</h3>'
          + '<br/>Please follow the link below to see and read about fellow Women entrepreneurs who have a wide range of skills, talents, and '
          + 'amazing stories of entrepreneurship in a diverse range of industries.<br/><br/>'
          + "<a href='https://www.satynmag.com/2020/03/06/women-entrepreneurs-we-are-proud-of-iwd-2020/' target='_blank'>"
          + 'https://www.satynmag.com/2020/03/06/women-entrepreneurs-we-are-proud-of-iwd-2020/</a><br/><br/>'
          + "<a href='https://www.facebook.com/hashtag/business?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#business</a>"
          + "<a href='https://www.facebook.com/hashtag/internationalwomensday?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#internationalwomensday</a>"
          + "<a href='https://www.facebook.com/hashtag/businesswomen?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#businesswomen</a>"
          + "<a href='https://www.facebook.com/hashtag/entrepreneurship?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#entrepreneurship</a>"
          + "<a href='https://www.facebook.com/hashtag/satynmagbusinesswomen?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmagbusinesswomen</a>"
          + "<a href='https://www.facebook.com/hashtag/womeninbusiness?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#womeninbusiness</a>"
          + "<a href='https://www.facebook.com/hashtag/womenownedbusiness?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#womenownedbusiness</a>"
          + "<a href='https://www.facebook.com/hashtag/satynmag?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmag</a>"
          + "<a href='https://www.facebook.com/hashtag/satynmagreaders?epa=HASHTAG' class='d-inline-flex mr-2' target='_blank'>#satynmagreaders</a>"
          + "<a href='' class='d-inline-flex mr-2' target='_blank'>#wadduwabeachvilla</a>"
  },
];

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
