import { useEffect, require } from "react";
import { useParams } from "react-router-dom";
import getPlanetImg from "../utils";

const PlanetDetail = ({ onePlanet, getOnePlanet }) => {
  const { planetId } = useParams();

  useEffect(() => {
    // console.log(planetId)
    if (onePlanet) {
      console.log(onePlanet)
      getOnePlanet(planetId);
    }
  }, [planetId]);


  // useEffect(() => {
  //     onPlanetIdChange(planetId); // Call the callback function with the planetId
  //   }, [planetId]);

  // useEffect (() => {
  //     console.log(onePlanet)
  //     getImageNASA(onePlanet.Planet)
  // },[])

  return (
    <>
      <h1>{onePlanet.Planet}</h1>
      {/* <img src={require(`../assets/${onePlanet.Planet}.jpeg`)} /> */}
      <img src={getPlanetImg(onePlanet.Planet)} />
      {/* {console.log(`${onePlanet.Planet}.jpeg`)} */}
      {/* <img src={`${planetImages.items[0].links[0].href}`}/> */}
      {/* {console.log(planetImages.items[0].links[0].href)} */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis
        nisi nec urna ultrices, gravida dictum nulla pretium. Suspendisse
        pharetra quam vitae lobortis pulvinar. Donec non dictum orci. Proin non
        bibendum nisl. Donec dapibus eu dui porta vehicula. Aliquam egestas
        consequat turpis eu tempus. Quisque quis euismod ante, et pellentesque
        tortor. Quisque eget ullamcorper nibh. Curabitur tempor tellus sed augue
        vestibulum dignissim. Donec at felis lectus. Quisque tristique faucibus
        cursus. Mauris varius tellus quis odio posuere bibendum. Donec ornare
        magna vel turpis fringilla blandit. Nam et turpis non quam hendrerit
        tincidunt et quis ante. Aenean sed est eu eros dapibus posuere.
      </p>
    </>
  );
};
export default PlanetDetail;
