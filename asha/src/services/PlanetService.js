// Define the base URL for the planet API
const baseURL = 'http://localhost:9000/api/planets/';

// Create an object named PlanetService
const PlanetService = {
  // Method to get all planets
  getPlanets() {
    // Send a GET request to the base URL and parse the JSON response
    return fetch(baseURL)
      .then(res => res.json());
  },

  // Method to get a specific planet by ID
  getPlanet(id) {
    // Send a GET request to the base URL with the provided ID and parse the JSON response
    return fetch(baseURL + id)
      .then(res => res.json())
  },

  // Method to add a new planet
  addPlanet(planet) {
    // Send a POST request to the base URL with the planet data in the request body as JSON
    // Set the Content-Type header to specify JSON format
    // Parse the JSON response
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(planet),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  // Method to delete a planet by ID
  deletePlanet(id) {
    // Send a DELETE request to the base URL with the provided ID
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  },

  // Method to update a planet (currently commented out)
  // updatePlanet(planet) {
  //   // Send a PUT request to the base URL with the planet ID in the URL
  //   // Include the updated planet data in the request body as JSON
  //   // Set the Content-Type header to specify JSON format
  //   // Parse the JSON response
  //   return fetch(baseURL + planet._id, {
  //     method: 'PUT',
  //     body: JSON.stringify(planet),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json());
  // },
};

// Export the PlanetService object as the default export of the module
export default PlanetService;
