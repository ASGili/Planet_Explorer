import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import getPlanetImg from "../utils";

const Container = styled.div`
    display: flex;
    margin: 10px auto;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
`

const PlanetImage = styled.img`
    width: 100px;
    height: 100px;
    float: left;
    object-fit: cover;
`;

const PlanetName = styled.h3`
    display: flex;
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 0px;
`;

const PlanetDistance = styled.p`
    margin-bottom: 0px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
    width: 350px;
`
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
`


const IndividualPlanet = ({ planet, getOnePlanet, getImageNASA, deletePlanet }) => {

    const navigate = useNavigate();

    const handleClickShowMore= () => {
        getOnePlanet(planet._id)
        getImageNASA(planet.Planet)
        setTimeout(() => {
            navigate(`/planets/${planet._id}`)
        }, 500);
    }

    const handleClickDeletePlanet = (event) => {
        deletePlanet(event.target.value)
    }

    return (
        <Container>
            {/* <Link to={`/planets/${planet._id}`}><h3>{planet.Planet}</h3></Link> */}
            <PlanetImage src={getPlanetImg(planet.Planet)} />
            <TextContainer>
                <PlanetName>{planet.Planet}{planet.CustomPlanet? <button className="btns" value={planet._id} onClick={handleClickDeletePlanet}>Delete</button> : null}</PlanetName>
                {planet.CustomPlanet ? null : <PlanetDistance>Distance from the Sun (10<sup>6</sup>km): {planet.DistancefromSun10e6km}</PlanetDistance>}
            </TextContainer>
            <ShowMeMoreButton onClick={handleClickShowMore}>Show me more</ShowMeMoreButton>
        </Container>
    )
}
export default IndividualPlanet