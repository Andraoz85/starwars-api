async function getAllPlanets() {
  try {
    let allPlanets = [];
    let nextPage = "https://swapi.dev/api/planets/";

    while (nextPage) {
      const response = await fetch(nextPage);
      const data = await response.json();
      allPlanets = allPlanets.concat(data.results);
      nextPage = data.next;
    }

    displayPlanets(allPlanets);
  } catch (error) {
    console.error("Error: ", error);
  }
}

function displayPlanets(planets) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Rensa tidigare innehåll

  planets.forEach((planet) => {
    const planetDiv = document.createElement("div");
    planetDiv.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Population: ${planet.population}</p>
            <p>Climate: ${planet.climate}</p>
            <p>Terrain: ${planet.terrain}</p>
        `;
    container.appendChild(planetDiv);
  });
}

getAllPlanets();
