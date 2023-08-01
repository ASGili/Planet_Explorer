import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import getPlanetImg from "../utils";

// Styled component: Container
const Container = styled.div`
    display: flex;
    margin: 10px auto;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
`;

// Styled component: PlanetImage
const PlanetImage = styled.img`
    width: 100px;
    height: 100px;
    float: left;
    object-fit: cover;
`;

// Styled component: PlanetName
const PlanetName = styled.h3`
    display: flex;
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 0px;
`;

// Styled component: PlanetDistance
const PlanetDistance = styled.p`
    margin-bottom: 0px;
`;

// Styled component: TextContainer
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
    width: 350px;
`;

// Styled component: ShowMeMoreButton
const ShowMeMoreButton = styled.button`
    background-color: #BDCDD6;
    border: none;
    font-family: 'OpenDyslexic', sans-serif;
    color: #205e61;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid #BDCDD6;
    border-radius: 25px;
    
    &:hover {
        background-color: #205e61;
        color: #BDCDD6;
        font-size: 2.5em;
    }
`;

const IndividualPlanet = ({ planet, getOnePlanet, getImageNASA, deletePlanet }) => {

    const navigate = useNavigate();

    const handleClickShowMore = () => {
        // Fetch more information about the planet
        getOnePlanet(planet._id);
        getImageNASA(planet.Planet);
        setTimeout(() => {
            // Navigate to the individual planet's page after a delay
            navigate(`/planets/${planet._id}`);
        }, 500);
    };

    const handleClickDeletePlanet = (event) => {
        // Delete the planet when the delete button is clicked
        deletePlanet(event.target.value);
    };

    return (
        <Container>
            {/* Planet information */}
            <PlanetImage src={getPlanetImg(planet.Planet)} />
            <TextContainer>
                <PlanetName>
                    {planet.Planet}
                    {/* Render delete button for custom planets */}
                    {planet.CustomPlanet ? <button className="btns" value={planet._id} onClick={handleClickDeletePlanet}>Delete</button> : null}
                </PlanetName>
                {/* Render distance from the Sun for non-custom planets */}
                {planet.CustomPlanet ? null : <PlanetDistance>Distance from the Sun (10<sup>6</sup>km): {planet.DistancefromSun10e6km}</PlanetDistance>}
            </TextContainer>

            {/* Show me more button */}
            <ShowMeMoreButton onClick={handleClickShowMore}>Show me more</ShowMeMoreButton>
        </Container>
    );
};

export default IndividualPlanet;
