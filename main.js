async function getAllPlanets() {
  try {
    let allPlanets = [];
    let page = "https://swapi.dev/api/planets/";

    while (page) {
      const response = await fetch(page);
      const data = await response.json();
      allPlanets = allPlanets.concat(data.results);
      page = data.next;
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
            <span class="close-button">X</span>
            <h2>${planet.name}</h2>
            <p>Population: ${planet.population}</p>
            <p>Climate: ${planet.climate}</p>
            <p>Terrain: ${planet.terrain}</p>
        `;
    container.appendChild(planetDiv);

    const closeButton = planetDiv.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      container.removeChild(planetDiv);
    });
  });
}

getAllPlanets();
