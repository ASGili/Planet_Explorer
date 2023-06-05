import earthImage from '../assets/Earth.jpeg'
import jupiterImage from '../assets/Jupiter.jpeg'
import marsImage from '../assets/Mars.jpeg'
import mercuryImage from '../assets/Mercury.jpeg'
import neptuneImage from '../assets/Neptune.jpeg'
import saturnImage from '../assets/Saturn.jpeg'
import uranusImage from '../assets/Uranus.jpeg'
import venusImage from '../assets/Venus.jpeg'

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
            planetImg = earthImage
            break;
    }

    return planetImg
}

export default getPlanetImg