window.addEventListener('load', () => {

let main = document.querySelector('.weatherAll');
let temp = document.querySelector('.funäsTemp');
let funäs = document.querySelector('.funäs');

fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.5419159&lon=12.54845720000003&appid=592624802a3152997ad95fd2435b3068')
 .then(response => response.json())
 .then(data => {
     console.log(data);
     let currentTemp = data.main.temp;
     temp.textContent = currentTemp.value - 273;
     console.log(temp)
 });
});