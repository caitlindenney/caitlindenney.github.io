const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=f8a57c7467b43459a0553ec5fb789192&units=imperial';
const apiURLf = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=f8a57c7467b43459a0553ec5fb789192&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temp = jsObject.main.temp;
    const speed = jsObject.wind.speed;
    if (temp <= 50 && s >= 3.0) {
      chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (.4275 * temp * Math.pow(speed, 0.16)));
    } else {
      chill = 'N/A';
    }
    document.getElementById('temp').innerHTML = temp;
    document.getElementById('speed').innerHTML = speed;
    document.getElementById('chill').innerHTML = chill;
    document.getElementById('curr').textContent = jsObject.weather[0].main;
    document.getElementById('hum').textContent = jsObject.main.humidity;
  });

fetch(apiURLf)
  .then((response) => response.json())
  .then((jsObject) => {

    const week = jsObject.list.filter(element => element.dt_txt.includes('18:00:00'));

    console.log(week);
    let weekdays = ['sun','Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'sat'];
    let day = 0;
    week.forEach(jsObject => {
      let d = new Date(jsObject.dt_txt);
      document.getElementById(`forecast${day+1}`).textContent = jsObject.main.temp;
      document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];


      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation

      document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method


    });
  });