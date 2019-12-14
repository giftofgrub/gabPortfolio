

import fullPalette from './images/fulls/palette.gif'
import fullJobly from './images/fulls/jobly.gif'
import fullWarbler from './images/fulls/warbler.gif'
import fullRecipeep from './images/fulls/recipeep.gif'

import thumbJobly from './images/thumbs/jobly.png'
import thumbWarbler from './images/thumbs/warbler.png'
import thumbRecipeep from './images/thumbs/recipeep.png'
import thumbPalette from './images/thumbs/palette.png'

const PROJECTS = [
  { id: '1', src: fullPalette, thumbnail: thumbPalette, name: 'Palette Pal', 
    description: 'A Palette Making application created with React.',
    code: 'https://github.com/giftofgrub/paletteMaker',
    live: 'http://palettepick.herokuapp.com/'
  },
  { id: '2', src: fullJobly, thumbnail: thumbJobly, name: 'Jobly', 
    description: 'A Linkedin clone build with React, Express, PostgreSQL',
    code: 'https://github.com/giftofgrub/jobly',
    live: 'http://jobly-linkedin-clone.herokuapp.com/'
  },
  { id: '3', src: fullWarbler, thumbnail: thumbWarbler, name: 'Warbler', 
    description: 'A Twitter clone built with Jinja, Flask, SQLAlchemy',
    code: 'https://github.com/giftofgrub/warbler',
    live: 'http://warbler-twitter-clone.herokuapp.com/'
  },
  { id: '4', src: fullRecipeep, thumbnail: thumbRecipeep, name: 'ReciPeep', 
    description: 'A recipe sharing application built with EJS, Express, MongoDB',
    code: 'http://github.com/giftofgrub/recipeapp',
    live: 'http://recipeepapp.herokuapp.com/'
  }
]

export default PROJECTS