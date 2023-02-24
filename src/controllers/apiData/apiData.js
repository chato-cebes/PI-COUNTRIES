const axios = require('axios');
const { Country } = require("../../db")

const getApiData = async() => {
    const getApi = await axios.get('https://restcountries.com/v3/all');
    const mapApiData = await getApi.data.map(item=>{
        
        let languageMap = [];
        for (const key in item.languages) {
            languageMap.push(item.languages[key]);                
        }

        for(const key in item.currencies ){
            tag = [key];
            divisa= item.currencies[key];        
        }
        
      
        return {
        id: item.cca3,
        name: item.name.common,
        officialName: item.name.official,
        flag: item.flags[1],
        region: item.region,
        subregion: item.subregion? item.subregion: "",
        capital: item.capital? item.capital[0]: "",
        languages: languageMap.join(", "),
        area: item.area? item.area: "",
        population: item.population,
        map: item.maps.openStreetMaps? item.maps.openStreetMaps: "",
        currencyTag: tag[0],
        currencyName: divisa.name? divisa.name: "",
        currencySymbol: divisa.symbol? divisa.symbol: "",
    };
});
    return mapApiData;
}

const saveApiData = async () =>{
    const api = await getApiData()
    await Country.bulkCreate(api)
  .then(() => console.log('Countries created successfully!'))
  .catch((error) => console.error('Error creating Countries:', error));
}


module.exports ={
    getApiData,
    saveApiData,
}