const { getApiData, getDatabase } = require("../../apiData/apiData");

const getAllCountries = async () => {
  const apiData = await getApiData();
  const DBData = await getDatabase();
  const dataTot = apiData.concat(DBData);
  return dataTot;
};


module.exports= getAllCountries;