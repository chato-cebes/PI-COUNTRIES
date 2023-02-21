const { Router } = require('express');
const getAllCountries = require("../controllers/countries/get/getAllCountries")
const router = Router();

router.get ('/allcountries', async (req, res) => {
const { name } = req.query
let countryAll = await getAllCountries();
if (name){
    let nameTrue = await countryAll.filter((c)=> c.name.toLowerCase().includes(name.toLowerCase()))
    nameTrue?
    res.status(200).send(nameTrue):
    res.status(404).send('No hay esta el personaje')
} else {
    res.status(200).send(countryAll)
}
})


module.exports= router