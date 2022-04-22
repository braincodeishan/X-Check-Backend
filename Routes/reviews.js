const express = require('express');
const router = express.Router();
const cors = require('cors');
const reviewsSchema = require('../Modals/reviewsSchema')


router.use(cors());

router
    .post('/addReview', async (req, res) => {
        try {
            const data = req.body;
            const newReview = new reviewsSchema({
                phoneId: data.phoneId,
                name: data.name,
                username: data.username,
                title: data.title,
                description: data.description,
                stars: data.stars,

            })

            const result = await newReview.save()
            if (result) {
                console.log(result)
                res.status(201).json("Saved!");

            } else {
                console.log(result)
                res.status(200).json("Something Went wrong!");
            }

        } catch (err) {
            console.log(err);
            res.status(404).json("Something Went wrong!");
        }
    })
    .post('/', async (req, res) => {
        try {
            const id = req.body.id;
            const result = await reviewsSchema.find({ phoneId: id });
            res.status(200).json(result);
        } catch (err) {
            res.status(404).json("Something Went wrong!");
        }
    })
    .post('/addLikes', async (req, res) => {
        try {
            const id = req.body.id;
            const likes = req.body.likes;
            const update = req.body.update
            const newLike = likes + update;
            const result = await reviewsSchema.findByIdAndUpdate(id, { likes: newLike })
            if (result) {
                res.status(201).json("updated");
            }else{
                res.status(200).json("Something Went wrong!");
            }
        } catch (err) {
            res.status(404).json("Something Went wrong!");
        }

    })

module.exports = router;