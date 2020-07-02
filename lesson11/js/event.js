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
		let events = document.createElement('p');
		events.textContent = town.events;
		towns.appendChild(events);
		document.querySelector('div.towns').appendChild(towns);
	})
		sodasprings.forEach(town => {
			let towns = document.createElement('section');
			let events = document.createElement('p');
			events.textContent = town.events;
			towns.appendChild(events);
			document.querySelector('div.towns').appendChild(towns);
	  })
  
	  fishhaven.forEach(town => {
		let towns = document.createElement('section');
		let events = document.createElement('p');
		events.textContent = town.events;
		towns.appendChild(events);
		document.querySelector('div.towns').appendChild(towns);
	  });
	});