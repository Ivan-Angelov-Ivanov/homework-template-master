//jshint esversion:6
const init = () => {
  submitForm();
}

const submitForm = () => {
  const button = document.querySelector("button");
  const locationInput = document.getElementById('location-input');
  const container = document.querySelector(".container")
  button.addEventListener('click', (e) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=7948700442c0e14d939a7646952d0f64`;
    async function externalContent(weatherUrl) {
     await fetch(weatherUrl)
     .then(res => res.json())
     .then((data) => {
       console.log(data);
       const locationButton = document.createElement("button");
       const locationWrapper = document.createElement("span");
       const info = document.createElement("span");
       const infoWrapper = document.createElement("div");

       locationButton.innerText = data.name;
       locationButton.style.backgroundColor = "#044757";
       locationButton.style.border = "none";
       locationButton.style.color = "white";
       locationButton.style.padding = "10px";
       locationButton.onclick = () => {
         if(info.style.display == "none"){
           info.style.display = "block";
         } else {
           info.style.display = "none";
         }
       }

       info.innerHTML = `Coord: ${data.coord.lat} : ${data.coord.lon} <br>
                         Weather: ${data.weather[0].main} <br>
                         Temperature:  ${data.main.temp}  K`;
       info.style.display = "none";
       info.style.wordBreak = "break-all"

       infoWrapper.appendChild(info);
       locationWrapper.appendChild(locationButton);
       locationWrapper.appendChild(infoWrapper);
       container.appendChild(locationWrapper);
       container.appendChiled
     });
    }
    externalContent(url);
  });
}

init();
