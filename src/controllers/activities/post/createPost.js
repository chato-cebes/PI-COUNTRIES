const { Activity } = require('../../../db')

const createPost = async () => {
    const newPost = await Activity.create({
        name, description, difficulty, time, season, country
    })

if (country.length) 
    const findCountry = await getByQuery(country)
}

module.exports = createPost;