//jshint esversion:6
const init = () => {
  submitForm();
}

const submitForm = () => {
  const button = document.querySelector("button");
  const locationInput = document.getElementById('location-input');
  button.addEventListener('click', (e) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=7948700442c0e14d939a7646952d0f64`;
    async function externalContent(weatherUrl) {
     await fetch(weatherUrl)
     .then(res => res.json())
     .then(data => console.log(data));
    }
    externalContent(url);
  });
}

// const showData = (data) => {
//   const container = document.querySelector('.container');
//
//   Object.keys(data).forEach((element) => {
//     const description = document.createElement("div");
//     description.innerText = element;
//     container.appendChild(description);
//   });
//   console.log(JSON.stringify(data));
// }

init();
