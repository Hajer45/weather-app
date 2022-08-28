class UI {
    addCities(cities){
        cities.forEach(element => {
            const ul = document.querySelector(".searchList")
            const li = document.createElement("li")
            li.appendChild(document.createTextNode(element.name))
            ul.appendChild(li)
        });
    }
    removeCities(){
        const ul = document.querySelector(".searchList")
        ul.innerHTML=""
    }

}