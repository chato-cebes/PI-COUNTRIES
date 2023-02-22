const { Router } = require('express');
const router = Router();
const createPost =  require('../controllers/activities/post/createPost.js')
const getActivities = require('../controllers/activities/get/getactivities.js');


router.post('/', async (req, res) => {
    const { activityName, description, difficulty, time, season, country } = req.body;

    try {
        const newpost = await(createPost(activityName, description, difficulty, time, season, country))
        res.status(200).json({message: newpost/* 'Activity created successfully' */})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});


router.get('/', async(req, res) => {
    try {
        const getAll =  await getActivities()
        res.status(200).send(getAll)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
})




module.exports = router