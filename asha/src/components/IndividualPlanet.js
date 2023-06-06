import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import getPlanetImg from "../utils";

const Container = styled.div`
    display: flex;
    margin: 10px auto;
    width: 90%;
    /* background-color: #efebebeb; */
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
    /* flex-direction: column;
    justify-content: space-between; */
    /* margin-left: 10px; */
    /* font-size: 1px; */
`;

const PlanetDistance = styled.p`
    margin-bottom: 0px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
    width: 350px;
    /* background-color: #efebebeb; */
`
const ShowMeMoreButton = styled.button`
  background-color: #BDCDD6; /* Green */
  border: none;
  font-family: monospace;
  color: #205e61;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  /* background-color: transparent;  */
  border: 2px solid #BDCDD6;
  border-radius: 25px;
    &:hover {
    background-color: #205e61;
    color: #BDCDD6;
    }
`


const IndividualPlanet = ({ planet, getOnePlanet, getImageNASA }) => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        getOnePlanet(planet._id)
        getImageNASA(planet.Planet)
        setTimeout(() => {
            navigate(`/planets/${planet._id}`)
        }, 500);
    }

    return (
        <Container>
            {/* <Link to={`/planets/${planet._id}`}><h3>{planet.Planet}</h3></Link> */}
            <PlanetImage src={getPlanetImg(planet.Planet)} />
            <TextContainer>
                <PlanetName>{planet.Planet}</PlanetName>
                <PlanetDistance>Distance from the Sun (10<sup>6</sup>km): {planet.DistancefromSun10e6km}</PlanetDistance>
            </TextContainer>
            <ShowMeMoreButton onClick={handleOnClick}>Show me more</ShowMeMoreButton>
        </Container>
    )
}
export default IndividualPlanet