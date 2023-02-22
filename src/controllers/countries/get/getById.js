const { Country, Activity } = require("../../../db");

const getbyId = async (id) => {
  const idUpper = id.toUpperCase();
    const idFound = await Country.findAll({
    where: {
      id: idUpper,
    },
    include: {
        model: Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
  });

  if (idFound.length){
    return idFound;
  } else {
    throw new Error(`id ${idUpper} not found`);
  }
};


module.exports = getbyId;