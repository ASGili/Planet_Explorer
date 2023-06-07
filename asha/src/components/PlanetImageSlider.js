import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

// const ContainerSlider = styled.div`
//     display: flex`


const PlanetImageSlider = ({ planetImages }) => {

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