const express = require('express');
const path = require('path');
const sharp = require('sharp');

const app = express();
const PORT = process.env.PORT || 3000;
const iconsDirectory = path.join(__dirname, 'icons');
const socialMediaIcons = {
    "twitter": "twitter.png",
    "facebook": "facebook.png",
    "instagram": "instagram.png",
    "github": "github.png",
    "pinterest": "pinterest.png",
    "snapchat": "snapchat.png",
    "twitter-x": "twitter_x.png",
};

app.get('/icons', (req, res) => {
    res.json(Object.keys(socialMediaIcons));
});

app.get('/icons/:platform', (req, res) => {
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
