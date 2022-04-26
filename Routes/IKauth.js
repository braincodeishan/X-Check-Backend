const express = require('express');
const router = express.Router();
const cors = require('cors');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


router.use(cors());

router
    .get('/', async (req, res) => {
        var result = imagekit.getAuthenticationParameters();
        res.send(result);

    })

module.exports = router;