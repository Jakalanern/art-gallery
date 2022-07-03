import image1 from './art/1.png'
import image2 from './art/2.png'
import image3 from './art/3.png'
import image4 from './art/4.png'
import image5 from './art/5.png'
import image6 from './art/6.png'
import image7 from './art/7.png'
import image8 from './art/8.png'
import image9 from './art/9.png'
import image10 from './art/10.png'
import image11 from './art/11.png'
import image12 from './art/12.png'

const images = [
  {
    src: image10,
    alt: 'drawing of a portrait',
  },
  {
    src: image1,
    alt: 'drawing of a portrait',
  },
  {
    src: image3,
    alt: 'drawing of a portrait',
  },
  {
    src: image7,
    alt: 'drawing of a portrait',
  },
  {
    src: image4,
    alt: 'drawing of a portrait',
  },
  {
    src: image5,
    alt: 'drawing of a portrait',
  },
  {
    src: image6,
    alt: 'drawing of a portrait',
  },
  {
    src: image2,
    alt: 'drawing of a portrait',
  },
  {
    src: image9,
    alt: 'drawing of a portrait',
  },
  {
    src: image8,
    alt: 'drawing of a portrait',
  },

  {
    src: image11,
    alt: 'drawing of a portrait',
  },
  {
    src: image12,
    alt: 'drawing of a portrait',
  },
]
let count = 0
images.forEach((image) => (image.id = count++))

export default images
