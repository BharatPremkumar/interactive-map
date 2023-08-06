const btn = document.getElementById("btn");
const btn2 = document.getElementById("genInfo");
const btn3 = document.getElementById("close");
const modal = document.getElementById("myModal");
const pEl = document.getElementById("osloLocation");

const form = document.getElementById("myform");
btn2.addEventListener("click", addModule);
btn3.addEventListener("click", closeModal);

function addModule() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
/* 
// Add an event listener for the form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = {
    locationName: locationInput.value,
  };

  // Make a GET request to the Python script's endpoint with query parameters
  fetch("http://localhost:5000/submit?" + new URLSearchParams(data))
    .then((response) => response.json())
    .then((result) => {
      // Handle the response from the server here
      console.log(result); // This will contain the data sent back from the Python script
      // Update your HTML or display the data in any way you need
      if (!result || result.id === undefined) {
        pEl.style.color = "red";
        pEl.innerHTML =
          "The location does not exist. Please check for spelling errors.";
      } else {
        pEl.style.color = "#1b6613";
        pEl.innerHTML = `The ${locationInput.value} is on track: ${result.id}`;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}); */

const locations = [
  { id: 1, name: "tåsen senter" },
  { id: 2, name: "gunerius" },
  { id: 3, name: "grunerløkken" },
  { id: 4, name: "St.hanshaugen" },
  { id: 5, name: "kronen" },
  { id: 6, name: "holtet" },
  { id: 7, name: "nordstrand" },
  { id: 8, name: "bryn" },
  { id: 10, name: "tveita" },
  { id: 11, name: "nittedal" },
  { id: 12, name: "nydalen" },
  { id: 13, name: "hagan" },
  { id: 14, name: "haugerud" },
  { id: 15, name: "skøyen" },
  { id: 16, name: "romsås" },
  { id: 17, name: "st.hanshaugen senter" },
  { id: 18, name: "løren" },
  { id: 19, name: "romerike helsebygg" },
  { id: 21, name: "lamberseter" },
  { id: 22, name: "storgata" },
  { id: 23, name: "stovner" },
  { id: 24, name: "frogner" },
  { id: 25, name: "ensjø" },
  { id: 26, name: "åråsen lillestrøm" },
  { id: 27, name: "kiellandshus" },
  { id: 28, name: "hasle linje" },
  { id: 29, name: "eiksmarka" },
  { id: 30, name: "lilleaker" },
  { id: 31, name: "metro" },
  { id: 32, name: "ringnes park" },
  { id: 33, name: "ikke oppgitt i liste" },
  { id: 34, name: "carl berner" },
  { id: 35, name: "ikke oppgitt i liste" },
  { id: 36, name: "grønland" },
  { id: 37, name: "grorud" },
  { id: 38, name: "kalbakken" },
  { id: 39, name: "hv" },
  { id: 40, name: "karlsrud" },
  { id: 41, name: "kanalveien" },
  { id: 42, name: "linderud" },
  { id: 43, name: "lillo" },
  { id: 44, name: "harbitz torg" },
  { id: 45, name: "solheim" },
  { id: 46, name: "torshov" },
  { id: 47, name: "ikke oppgitt i liste" },
  { id: 48, name: "nordstjernen" },
  { id: 49, name: "ulven" },
  { id: 50, name: "holmlia" },
  { id: 51, name: "liseapotekene lillestrøm" },
  { id: 52, name: "carl berner torg" },
  { id: 53, name: "fjellhamar" },
  { id: 54, name: "skjettentoppen" },
  { id: 55, name: "røa" },
  { id: 56, name: "ullevaal stadion" },
  { id: 57, name: "vinderen" },
];

function findIdByLocation(inputValue) {
  for (const item of locations) {
    if (item.name === inputValue) {
      return item.id;
    }
  }
  return null; // Return null if no match is found
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const locationInput = document.getElementById("location");
  const locationValue = locationInput.value.toLowerCase();
  console.log(locationValue);

  const foundId = findIdByLocation(locationValue);
  if (foundId === 55 || foundId === 56 || foundId === 57) {
    pEl.style.color = "#1b6613";
    pEl.innerHTML = `${locationInput.value} is track is the same location as where 190T is sorted: `;
  } else if (foundId !== null) {
    pEl.style.color = "#1b6613";
    pEl.innerHTML = `${locationInput.value} is on track: ${foundId}`;
  } else {
    pEl.style.color = "red";
    pEl.innerHTML =
      "Location does not exist. Please check for spelling errors.";
  }
});
