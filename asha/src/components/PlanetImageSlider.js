import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const PlanetImageSlider = ({ planetImages }) => {

    // The PlanetImageSlider component renders a slideshow of planet images using the Slide component from the react-slideshow-image library. 
    // It receives an array of planetImages as a prop, which is an object with an items property containing the array of images.

    // The component defines CSS styles for the slide container, span, and image div using JavaScript objects. 
    // These styles are applied to the respective elements using the style attribute.

    const slideContainer = {
        display: 'flex',
        height: '500px',
        width: '800px',
        'flex-direction': 'column',
        margin: 'auto',
        border: '2px solid white'
    }

    const spanStyle = {
        padding: '20px',
        background: 'rgba(32,94,97,0.5)',
        'border-radius': '25px',
        color: '#BDCDD6',
        // position: 'relative', 
        // left: 0, 
        // bottom: 0, 
        // "vertical-align": 'bottom'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px',
        width: '700px',
        margin: 'auto',
        'background-size': 'auto',
        'background-repeat': 'no-repeat',
        'background-position': 'center, center',
    }

    const slideImages = planetImages?.items


    return (
        // a slide container div is created with the provided styles. 
        // Within the container, the Slide component is used to iterate over the slideImages array and render each slide. 
        // Each slide consists of a div with a background image, representing a planet image, and a span displaying a description. 
        // The background image URL is dynamically set based on the slideImage object from the slideImages array.
        <div style={slideContainer}>
            <div className="slide-container">
                <Slide>
                    {slideImages && slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.links[0].href})` }}>
                                <span style={spanStyle}>{slideImage.data[0].description_508}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default PlanetImageSlider