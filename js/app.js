// init city
const city = new City();
const search = document.getElementById("search")
// Search input event listener
search.addEventListener("keyup", (e) => {
  // Get input text
    const Text = e.target.value
     city.getCity(Text,7)
})