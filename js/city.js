class City {
    async getCity(name,limit) {
        try{
            const res = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${name}&limit=${limit}`, 
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd6c42a457cmsh76f431459577e7ep1136bfjsn69fb22b4604d',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                }

            })
            const d = await res.json()
            if (d.data.length > 0) {
                return d
              } else {
                return false
              }
        }catch(err){
            console.log(err)
        }

   } 
    
}