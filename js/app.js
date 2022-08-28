// init city
const city = new City()
const ui = new UI()
const search = document.getElementById("search")
// Search input event listener
search.addEventListener("keyup", (e) => {
  // Get input text
    const text = e.target.value
    ui.removeCities()
    if(text != ""){
      city.getCity(text,5).then((data)=>{
        console.log(data.data.length)
        if(data.data.length >0){
          ui.addCities(data.data)
        }
        else {
          const ul = document.querySelector(".searchList")
          ul.innerHTML="No Results"
        }
      })
     
    }
    
})