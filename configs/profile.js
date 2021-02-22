export default {
  client_name: 'The Archway App',
  client_description:
    "We know it's tough to be a college student right now. How will I join clubs? How will I get others to join my clubs? What if I don't meet any new friends?\n" +
    '\n' +
    "As college students, we've tailored our software specifically to tackle these major challenges... and we believe we've solved them.\n" +
    '\n' +
    'Archway is a social network EXCLUSIVELY for college students to connect with their campus community.',
  client_logo: 'archway.png',
  favicon_logo: '/images/archway-fav.png',
  background_color: '#ebf1fc',
  theme_color: '#262761',
  progress_bar_colour: '#262761',
  logo: 'https://tagfi-s3-dev1.s3.amazonaws.com/Archway_logo.png',

  manus: [
    {
      id: '1',
      name: "Home",
      url: '/'
    },
    {
      id: '2',
      name: 'About Me',
      url: 'about-me'
    },
    {
      id: '3',
      name: ' My Work',
      url: 'work'
    },
    {
      id: '4',
      name: ' How To Reach Me',
      url: 'contact-me'
    },
  ],
  projects: [{
    id: '1',
    name: "Contact Us, Laravel Package 2020",
    image: "images/projects/laravel.jpeg",
    url: 'https://github.com/iamrajput/contactUs-package'
  },
{
  id: '2',
    name: 'Poll App (svelte)',
  image: "images/projects/svelte.jpeg",
  url: 'https://github.com/iamrajput/PollApp-Svelte'
},
{
  id: '3',
    name: 'Weather-app-Nuxt.js-Vuetify',
  image: "images/projects/nuxt.png",
  url: 'https://github.com/iamrajput/Weather-app-Nuxt.js-Vuetify'
},
{
  id: '4',
    name: 'My Profile',
  image: "images/projects/vuejs.jpeg",
  url: 'https://iamrajput.github.io/'
},
],

  social_accounts: {
    facebook: 'https://www.facebook.com/thearchwayapp',
    twitter: '',
    linkedin: 'https://www.linkedin.com/showcase/archwayapp',
    instagram: 'https://www.instagram.com/archway.app/',
  },

  images: {
    logo: '/images/archway_logo.png',
    favicon: '/images/archway-fav.png',
  },

  links: {
  },

  texts: {
    banner_1: 'Establish',
    banner_2: 'New Connections',
    banner_3: 'Discover'
  },

  flags: {
    show_newsletter: true,
    show_membership_button: true,
  },
  landingPageButton: {
    promoPopup: true,
    watchVideo: true,
  },
}



