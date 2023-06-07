const baseURL = 'http://localhost:9000/api/planets/';

const PlanetService =  {
  getPlanets() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  getPlanet(id) {
    return fetch(baseURL + id) 
        .then(res => res.json())
  },

  addPlanet(planet) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(planet),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deletePlanet(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  },

//   updatePlanet(planet) {
//     return fetch(baseURL + planet._id, {
//       method: 'PUT',
//       body: JSON.stringify(planet),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   },

};

export default PlanetService;