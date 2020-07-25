import fullPalette from './images/fulls/palette.gif'
import fullJobly from './images/fulls/jobly.gif'
import fullWarbler from './images/fulls/warbler.gif'
import fullRecipeep from './images/fulls/recipeep.gif'
import fullChefsMenu from './images/fulls/chefsMenu.gif'

import thumbJobly from './images/thumbs/jobly.png'
import thumbWarbler from './images/thumbs/warbler.png'
import thumbRecipeep from './images/thumbs/recipeep.png'
import thumbPalette from './images/thumbs/palette.png'
import thumbChefsMenu from './images/thumbs/chefsMenu.png'

const PROJECTS = [
  {
    id: '1',
    src: fullChefsMenu,
    imgAlt: "Image of Chef's Menu Project",
    thumbnail: thumbChefsMenu,
    name: "Chef's Menu",
    description: 'A full-stack application for booking Chefs',
    code: 'https://github.com/giftofgrub/paletteMaker',
    live: 'https://palettepal.netlify.app/',
  },
  {
    id: '2',
    src: fullPalette,
    imgAlt: 'Image of Palettepick Project',
    thumbnail: thumbPalette,
    name: 'Palette Pal',
    description: 'A Palette Making application created with React.',
    code: 'https://github.com/giftofgrub/paletteMaker',
    live: 'https://palettepal.netlify.app/',
  },
  {
    id: '3',
    src: fullJobly,
    imgAlt: 'Image of Jobly Project',
    thumbnail: thumbJobly,
    name: 'Jobly',
    description: 'A Linkedin clone build with React, Express, PostgreSQL',
    code: 'https://github.com/giftofgrub/jobly',
  },
  {
    id: '4',
    src: fullWarbler,
    imgAlt: 'Image of Warbler Project',
    thumbnail: thumbWarbler,
    name: 'Warbler',
    description: 'A Twitter clone built with Jinja, Flask, SQLAlchemy',
    code: 'https://github.com/giftofgrub/warbler',
    live: 'http://warbler-twitter-clone.herokuapp.com/',
  },
  {
    id: '5',
    src: fullRecipeep,
    imgAlt: 'Image of Recipeep Project',
    thumbnail: thumbRecipeep,
    name: 'ReciPeep',
    description:
      'A recipe sharing application built with EJS, Express, MongoDB',
    code: 'http://github.com/giftofgrub/recipeapp',
    live: 'http://recipeepapp.herokuapp.com/',
  },
]

export default PROJECTS
