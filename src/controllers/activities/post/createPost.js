const { Activity, Country } = require("../../../db");

const createPost = async (
  activityName,
  description,
  difficulty,
  time,
  season,
  country
) => {
  try {
    const newPost = await Activity.create({
      activityName,
      description,
      difficulty,
      time,
      season,
      country,
    });

    const findcountry = await Country.findAll({
      where: {
        name: country,
      },
    });

    newPost.addCountry(findcountry);

    return newPost;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = createPost;
