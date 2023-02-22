const { Router } = require('express');
const router = Router();
const createPost =  require('../controllers/activities/post/createPost.js')

router.post('/', async (req, res) => {
    const { name, description, difficulty, time, season, country } = req.body;
    try {
        const newpost = await(createPost(name, description, difficulty, time, season, country))
        res.status(200).send(newpost)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




module.exports = router