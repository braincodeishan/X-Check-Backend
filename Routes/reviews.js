const express = require("express");
const router = express.Router();
const cors = require("cors");
const { userReviews } = require("../Modals/reviewsSchema");
const { criticReviews } = require("../Modals/reviewsSchema");
const imageSchema = require("../Modals/imageSchema");
const { userStar } = require("../Modals/reviewsSchema");
const { criticStar } = require("../Modals/reviewsSchema");

router.use(cors());

router

  // GET REVIEWS
  .post("/UserReviews", async (req, res) => {
    try {
      const id = req.body.id;
      const result = await userReviews.find({ phoneId: id });
      var starResult = await userStar.find({ phoneId: id });
      if (starResult.length===0) {
        starResult = {
          phoneId:id,
          value:[100,70,100,400,400]
        }
      }

      if (result && starResult) {
        res.status(200).json({ result, starResult });
      } else {
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      console.log(err)
      res.status(404).json("Something Went wrong!");
    }
  })


  // GET critic REVIEWS
  .post("/CriticsReviews", async (req, res) => {
    try {
      const id = req.body.id;
      const result = await criticReviews.find({ phoneId: id });
      var starResult = await criticStar.find({ phoneId: id });
      if (starResult.length===0) {
        starResult = {
          phoneId:id,
          value:[100,70,100,400,400]
        }
      }

      if (result && starResult) {
        res.status(200).json({ result, starResult });
      } else {
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      res.status(404).json("Something Went wrong!");
    }
  })

  //   ADD REVIEWS
  .post("/UserReviews/addReview", async (req, res) => {
    try {
      const data = req.body;
      const newReview = new userReviews({
        phoneId: data.phoneId,
        name: data.name,
        username: data.username,
        title: data.title,
        description: data.description,
        stars: data.stars,
        image:data.image
      });

      const result = await newReview.save();
      console.log(result)
      if (result) {
        console.log(result);
        res.status(201).json("Saved!");
      } else {
        console.log(result);
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      console.log(err);
      res.status(404).json("Something Went wrong!");
    }
  })

  .post("/CriticsReviews/addReview", async (req, res) => {
    try {
      const data = req.body;
      const newReview = new criticReviews({
        phoneId: data.phoneId,
        name: data.name,
        username: data.username,
        title: data.title,
        description: data.description,
        stars: data.stars,
      });

      const result = await newReview.save();
      console.log(result)
      if (result) {
        console.log(result);
        res.status(201).json("Saved!");
      } else {
        console.log(result);
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      console.log(err);
      res.status(404).json("Something Went wrong!");
    }
  })

  // ADD LIKES TO REVIEWS
  .post("/addLikes", async (req, res) => {
    try {
      const id = req.body.id;
      const likes = req.body.likes;
      const update = req.body.update;
      const newLike = likes + update;
      const result = await userReviews.findByIdAndUpdate(id, {
        likes: newLike,
      });
      if (result) {
        res.status(201).json("updated");
      } else {
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      res.status(404).json("Something Went wrong!");
    }
  })

  //   ADD PHOTOS CLICKED BY THE USERS
  .post("/addPhotos", async (req, res) => {
    try {
      const data = req.body;
      const newImage = new imageSchema({
        name: data.name,
        username: data.username,
        phoneId: data.phoneId,
        image: data.image,
      });

      const result = await newImage.save();
      if (result) {
        console.log(result);
        res.status(201).json("Saved!");
      } else {
        console.log(result);
        res.status(200).json("Something Went wrong!");
      }
    } catch (err) {
      console.log(err);
      res.status(404).json("Something Went wrong!");
    }
  })

module.exports = router;
