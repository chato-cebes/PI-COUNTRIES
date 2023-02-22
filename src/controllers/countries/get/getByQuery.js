const { Sequelize } = require("sequelize");
const { Country } = require("../../../db");

const getByQuery = async (name) => {
  let lowname = name.toLowerCase();
  let queryname = await Country.findAll({
    where: {
      name: Sequelize.where(
        Sequelize.fn("LOWER", Sequelize.col("name")),
        "LIKE",
        "%" + lowname + "%"
      ),
    },
  });

  if (queryname.length) {
    return queryname;
  } else {
    throw new Error(`Name ${name} not found in database`);
  }
};

module.exports = getByQuery;
