window.addEventListener('load', () => {

//Funäsdalen

let funäsTemp = document.querySelector('.funäsTemp');

fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.5419159&lon=12.54845720000003&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     funäsTemp.innerHTML = currentTemp - 273|0;
     funäsTemp.innerHTML += ' °C';
 });

 //Abisko

 let abiskoTemp = document.querySelector('.abiskoTemp');

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=68.3166654&lon=18.6833306&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     abiskoTemp.innerHTML = currentTemp - 273|0;
     abiskoTemp.innerHTML += ' °C';
 });

 //Idre

 let idreTemp = document.querySelector('.idreTemp');

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=61.889493&lon=12.833530&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     idreTemp.innerHTML = currentTemp - 273|0;
     idreTemp.innerHTML += ' °C';
 });

 //Åre

 let åreTemp = document.querySelector('.åreTemp');

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=63.415&lon=13.062&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     åreTemp.innerHTML = currentTemp - 273|0;
     åreTemp.innerHTML += ' °C';
 });

 //Sarek

 let sarekTemp = document.querySelector('.sarekTemp');

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=67.2833322&lon=17.6999972&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     sarekTemp.innerHTML = currentTemp - 273|0;
     sarekTemp.innerHTML += ' °C';
 });

 //Höga Kusten

 let högaKustenTemp = document.querySelector('.högaKustenTemp');

 fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.791996832&lon=17.936496254&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     högaKustenTemp.innerHTML = currentTemp - 273|0;
     högaKustenTemp.innerHTML += ' °C';
 });
});