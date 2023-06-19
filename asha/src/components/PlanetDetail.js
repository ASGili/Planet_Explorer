import { useEffect } from "react";
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
        // Fetch the details of a specific planet based on the planetId parameter
        getOnePlanet(planetId);
    
        if (onePlanet && !planetImages) {
          // Fetch NASA images for the planet if they are not already available
          getImageNASA(onePlanet.Planet);
        }
      }, [onePlanet, planetImages]);
    
      return (
        <>
            {/* A conditional check is needed before accessing the properties of the onePlanet object. */}
            {onePlanet && (
                <>
                <h1 className="planet-name">{onePlanet.Planet}</h1>
    <div className="planet-top-container">
        <img className="planet-image" src={getPlanetImg(onePlanet.Planet)} />
        <div className="table-container">
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
              <tr>
                <td>Temperature: </td>
                <td>{onePlanet.MeanTemperatureC}{"°C"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
                    {/* Additional planet facts */}
                    {/* Displayed conditionally based on whether it's a custom planet or not */}
                    {onePlanet.CustomPlanet ? null : <section className="other-facts">
                        <h2 className="other-facts-heading"> Other Interesting Facts: </h2>
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
                            It experiences a surface pressure of {onePlanet.SurfacePressurebars} bars,
                            which affects its atmospheric conditions.
                        </p>
                        <p>
                            Additionally, the planet{" "}
                            {onePlanet.GlobalMagneticField ? "possesses" : "does not possess"} a
                            global magnetic field, which influences its interaction with solar wind
                            and other celestial bodies.
                        </p>
                    </section>}

                    {/* PlanetImageSlider component */}
                    {planetImages &&
                        <PlanetImageSlider planetImages={planetImages} />}

                </>
            )}

        </>
    );
};
export default PlanetDetail;
