const axios = require('axios');
const { Country } = require("../../db")

const getApiData = async() => {
    const getApi = await axios.get('https://restcountries.com/v3/all');
    const mapApiData = await getApi.data.map(item=>{
        
        let languageMap = [];
        for (const key in item.languages) {
            languageMap.push(item.languages[key]);                
        }

        return {
        id: item.cca3,
        name: item.name.official,
        flag: item.flags[1],
        region: item.region,
        subregion: item.subregion? item.subregion: "",
        capital: item.capital? item.capital[0]: "",
        languages: languageMap.join(", "),
        area: item.area? item.area: "",
        population: item.population,
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