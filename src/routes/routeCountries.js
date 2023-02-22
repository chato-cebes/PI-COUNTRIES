const { Router } = require("express");
const router = Router();
const getbyId = require("../controllers/countries/get/getById.js");
const getByQuery = require("../controllers/countries/get/getByQuery.js")
const getAllCountries = require("../controllers/countries/get/getAllCountries.js")

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name){
        let nameQuery = await getByQuery(name);
        res.status(200).send(nameQuery);
    }else{
        const getAll = await getAllCountries();
        res.status(200).send(getAll);
    }
} catch (error) {
    res.status(404).send({error : error.message});
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getIdFound = await getbyId(id);
    res.status(200).json(getIdFound)
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
