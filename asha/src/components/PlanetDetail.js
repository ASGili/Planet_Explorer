import { useEffect, require } from "react";
import { useParams } from "react-router-dom";
import getPlanetImg from "../utils";
import PlanetImageSlider from "./PlanetImageSlider";

const PlanetDetail = ({
  onePlanet,
  getOnePlanet,
  planetImages,
  getImageNASA,
}) => {
  const { planetId } = useParams();

  useEffect(() => {
    getOnePlanet(planetId);
  }, []);
  
  // useEffect(() => {
  //     onPlanetIdChange(planetId); // Call the callback function with the planetId
  //   }, [planetId]);

  // useEffect (() => {
  //     console.log(onePlanet)
  //     getImageNASA(onePlanet.Planet)
  // },[])

  return (
    <>
    {/* A conditional check is needed before accessing the properties of the onePlanet object. */}
    {onePlanet && (
    <>
      {/* {onePlanet ? <h1>{onePlanet.Planet}</h1> : null} */}
      <h1>{onePlanet.Planet}</h1>
      {/* <img src={require(`../assets/${onePlanet.Planet}.jpeg`)} /> */}
      <img src={getPlanetImg(onePlanet.Planet)} />
      {/* {console.log(`${onePlanet.Planet}.jpeg`)} */}
      {/* {console.log(planetImages.items[0].links[0].href)} */}

      <table>
        <tbody>
          <tr>
            <td>Moons: </td>
            {onePlanet ? <td>{onePlanet.NumberOfMoons}</td> : null}
          </tr>
          <tr>
            <td>Colours: </td>
            <td>{onePlanet.Color?.slice(1).join(", ")}</td>
            {/* By using the optional chaining operator (?.), we ensure that the properties are accessed only if onePlanet is defined. */}
          </tr>
          <tr>
            <td>Ring System: </td>
            <td>{onePlanet.RingSystem ? "Has rings" : "No rings" }</td>
          </tr>
        </tbody>
      </table>
      <h3> Other Interesting Facts: </h3>
      <p>
        {onePlanet.Planet} is located {onePlanet.DistancefromSun10e6km} million
        kilometers from the Sun.
      </p>
      <p>
        It has a mass of {onePlanet.Mass10e24kg} x 10^24 kilograms. The mass
        indicates the amount of matter it contains. Additionally, it has a
        diameter of {onePlanet.Diameterkm} kilometers.
      </p>
      <p>
        The density of the planet is {onePlanet.Densitykgme3} kilograms per
        cubic meter. The surface gravity measures {onePlanet.SurfaceGravitymse2}{" "}
        meters per second squared.
      </p>
      <p>
        The escape velocity, which is {onePlanet.EscapeVelocitykms} kilometers
        per second, indicates the minimum speed an object needs to escape the
        planet's gravitational pull.
      </p>
      <p>
        It takes {onePlanet.RotationPeriodhours} hours for the planet to
        complete one full rotation, resulting in its day length.
      </p>
      <p>
        The planet's distance from the Sun affects its climate and temperature.
        With a distance of {onePlanet.DistancefromSun10e6km} million kilometers,
        it experiences unique environmental conditions.
      </p>
      <p>
        In terms of its orbit around the Sun, the planet takes{" "}
        {onePlanet.OrbitalPerioddays} days to complete one revolution. It moves
        at an orbital velocity of {onePlanet.OrbitalVelocitykms} kilometers per
        second. The orbital inclination of {onePlanet.OrbitalInclinationdegrees}{" "}
        degrees describes the angle between its orbital plane and the plane of
        reference.
      </p>
      <p>
        The planet's orbital eccentricity, which is{" "}
        {onePlanet.OrbitalEccentricity}, indicates the shape of its orbit around
        the Sun. A value closer to zero represents a more circular orbit. The
        obliquity to its orbit, at {onePlanet.ObliquityToOrbitdegrees} degrees,
        describes the tilt of the planet's axis relative to its orbital plane.
      </p>
      <p>
        The mean temperature on the planet is {onePlanet.MeanTemperatureC}{" "}
        degrees Celsius, providing insight into its overall climate. It
        experiences a surface pressure of {onePlanet.SurfacePressurebars} bars,
        which affects its atmospheric conditions.
      </p>
      <p>
        Additionally, the planet{" "}
        {onePlanet.GlobalMagneticField ? "possesses" : "does not possess"} a
        global magnetic field, which influences its interaction with solar wind
        and other celestial bodies.
      </p>
    </>
    )}
    </>
  );
};
export default PlanetDetail;
