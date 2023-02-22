const { Country, Activity } = require ('../../../db');

const getAllCountries = async () => {
    return await Country.findAll()
};


module.exports= getAllCountries;