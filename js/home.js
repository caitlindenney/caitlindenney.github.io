const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const preston = towns.filter(town => (town.name == 'Preston'));
    const sodasprings = towns.filter(town => (town.name == 'Soda Springs'));
    const fishhaven = towns.filter(town => (town.name == 'Fish Haven'));

    preston.forEach(town => {
      let towns = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let img = document.createElement('img');

      name.textContent = town.name;
      motto.textContent = town.motto;
      year.textContent = 'Year Founded: ' + town.yearFounded;
      pop.textContent = 'Current Population: ' + town.currentPopulation;
      rain.textContent = 'Aversage Rainfall: ' + town.averageRainfall;
      img.setAttribute('src', town.photo);

      towns.appendChild(name);
      towns.appendChild(img);      
      towns.appendChild(motto);
      towns.appendChild(year);
      towns.appendChild(pop);
      towns.appendChild(rain);

      document.querySelector('div.towns').appendChild(towns);
    })

    sodasprings.forEach(town => {
      let towns = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let img = document.createElement('img');

      name.textContent = town.name;
      motto.textContent = town.motto;
      year.textContent = 'Year Founded: ' + town.yearFounded;
      pop.textContent = 'Current Population: ' + town.currentPopulation;
      rain.textContent = 'Aversage Rainfall: ' + town.averageRainfall;
      img.setAttribute('src', town.photo);

      towns.appendChild(name);
      towns.appendChild(img);
      towns.appendChild(motto);
      towns.appendChild(year);
      towns.appendChild(pop);
      towns.appendChild(rain);

      document.querySelector('div.towns').appendChild(towns);
    })

    fishhaven.forEach(town => {
      let towns = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let year = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let img = document.createElement('img');

      name.textContent = town.name;
      motto.textContent = town.motto;
      year.textContent = 'Year Founded: ' + town.yearFounded;
      pop.textContent = 'Current Population: ' + town.currentPopulation;
      rain.textContent = 'Aversage Rainfall: ' + town.averageRainfall;
      img.setAttribute('src', town.photo);

      towns.appendChild(name);
      towns.appendChild(img);      
      towns.appendChild(motto);
      towns.appendChild(year);
      towns.appendChild(pop);
      towns.appendChild(rain);

      document.querySelector('div.towns').appendChild(towns);
    });
  });