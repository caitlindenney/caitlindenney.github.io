const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
	const fishhaven = towns.filter(town => (town.name == 'Fish Haven'));

	fishhaven.forEach(town => {
		let towns = document.createElement('section');
		let events = document.createElement('p');
		let one = document.createElement('p');
		let two = document.createElement('p');
		events.textContent = town.events[0];
		one.textContent = town.events[1];
		two.textContent = town.events[2];
		towns.appendChild(events);
		towns.appendChild(one);
		towns.appendChild(two);
		document.querySelector('div.towns').appendChild(towns);
	})

	});