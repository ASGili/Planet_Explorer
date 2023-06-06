import earthImage from '../assets/Earth.png'
import jupiterImage from '../assets/Jupiter.png'
import marsImage from '../assets/Mars.png'
import mercuryImage from '../assets/Mercury.png'
import neptuneImage from '../assets/Neptune.png'
import saturnImage from '../assets/Saturn.png'
import uranusImage from '../assets/Uranus.png'
import venusImage from '../assets/Venus.png'

const getPlanetImg = (name) => {
    let planetImg = ''
    switch (name) {
        case 'Earth':
            planetImg = earthImage
            break;

        case 'Jupiter':
            planetImg = jupiterImage
            break;

        case 'Mars':
            planetImg = marsImage
            break;

        case 'Mercury':
            planetImg = mercuryImage
            break;

        case 'Neptune':
            planetImg = neptuneImage
            break;

        case 'Saturn':
            planetImg = saturnImage
            break;

        case 'Uranus':
            planetImg = uranusImage
            break;

        case 'Venus':
            planetImg = venusImage
            break;
    
        default:
            planetImg = null
            break;
    }

    return planetImg
}

export default getPlanetImg;