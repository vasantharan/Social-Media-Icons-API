const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const sharp = require('sharp');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const iconsDirectory = path.join(__dirname, 'icons');
const socialMediaIcons = {
  "twitter": "twitter.png",
  "facebook": "facebook.png",
  "instagram": "instagram.png",
  "github": "github.png",
  "pinterest": "pinterest.png",
  "snapchat": "snapchat.png",
  "twitter-x": "twitter_x.png",
  "youtube": "youtube.png",
  "medium" : "medium.png",
  "linkedin" : "linkedin.png",
  "whatsapp" : "whatsapp.png",
  "spotify" : "spotify.png",
  "reddit" : "reddit.png",
  "skype" : "skype.png",
  "internet" : "internet.png",
  "telegram" : "telegram.png",
};

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hey this API is running 🥳',
  });
});

app.get('/:platform', (req, res) => {
  const platform = req.params.platform.toLowerCase();
  const iconFileName = socialMediaIcons[platform];

  if (iconFileName) {
    const iconFilePath = path.join(iconsDirectory, iconFileName);
    // Resize the image to 32x32 pixels
    sharp(iconFilePath)
      .resize(40, 40)
      .toBuffer()
      .then((buffer) => {
        res.type('png').send(buffer);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    res.status(404).json({ error: "Platform not found" });
  }
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
