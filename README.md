# Social Media Icons API

## Description

The Social Media Icons API is a simple web service that provides access to various social media icons. Each endpoint corresponds to a specific social media platform and returns the corresponding icon image.

The API is currently hosted at [https://socialmediaicon.vercel.app/](https://socialmediaicon.vercel.app/).


## Icons
<div align="center">
        <table>
                <tr>
                    <th>Social Media Platform</th>
                    <th>Icon Image</th>
                </tr>
                <tr>
                    <td>Twitter</td>
                    <td><img src="https://socialmediaicon.vercel.app/twitter" alt="Twitter Icon"></td>
                </tr>
                <tr>
                    <td>Facebook</td>
                    <td><img src="https://socialmediaicon.vercel.app/facebook" alt="Facebook Icon"></td>
                </tr>
                <tr>
                    <td>Instagram</td>
                    <td><img src="https://socialmediaicon.vercel.app/instagram" alt="Instagram Icon"></td>
                </tr>
                <tr>
                    <td>LinkedIn</td>
                    <td><img src="https://socialmediaicon.vercel.app/linkedin" alt="LinkedIn Icon"></td>
                </tr>
                <tr>
                    <td>Snapchat</td>
                    <td><img src="https://socialmediaicon.vercel.app/snapchat" alt="Snapchat Icon"></td>
                </tr>
                <tr>
                    <td>Pinterest</td>
                    <td><img src="https://socialmediaicon.vercel.app/pinterest" alt="Pinterest Icon"></td>
                </tr>
                <tr>
                    <td>X</td>
                    <td><img src="https://socialmediaicon.vercel.app/twitter-x" alt="X Icon"></td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td><img src="https://socialmediaicon.vercel.app/github" alt="GitHub Icon"></td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td><img src="https://socialmediaicon.vercel.app/medium" alt="Medium Icon"></td>
                </tr>
                <tr>
                    <td>Youtube</td>
                    <td><img src="https://socialmediaicon.vercel.app/youtube" alt="Youtube Icon"></td>
                </tr>
                <tr>
                    <td>Spotify</td>
                    <td><img src="https://socialmediaicon.vercel.app/spotify" alt="Spotify Icon"></td>
                </tr>
                <tr>
                    <td>Skype</td>
                    <td><img src="https://socialmediaicon.vercel.app/skype" alt="Skype Icon"></td>
                </tr>
                <tr>
                    <td>Telegram</td>
                    <td><img src="https://socialmediaicon.vercel.app/telegram" alt="Telegram Icon"></td>
                </tr>
                <tr>
                    <td>Whatsapp</td>
                    <td><img src="https://socialmediaicon.vercel.app/whatsapp" alt="Whatsapp Icon"></td>
                </tr>
                <tr>
                    <td>Reddit</td>
                    <td><img src="https://socialmediaicon.vercel.app/reddit" alt="Reddit Icon"></td>
                </tr>
                <tr>
                    <td>Webpage</td>
                    <td><img src="https://socialmediaicon.vercel.app/internet" alt="Webpage Icon"></td>
                </tr>
        </table>
</div>

## Usage

To use the social media icons within an `<img>` tag, simply set the src attribute of the `<img>` tag to the URL of the desired social media platform. For example, to display the Twitter icon, you would use the following HTML

```html
<img src="https://socialmediaicon.vercel.app/twitter" alt="Twitter Icon">
```

This will display the Twitter icon image within the `<img>` tag. 

## Running Locally

To install and run the Social Media Icons API locally, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/vasantharan/Social-Media-Icons-API.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Social-Media-Icons-API
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm run dev
    ```

5. The API will be available at `http://localhost:PORT/`
   Replace `PORT` with the port number specified in your environment configuration.


## Contribution

Contributions to the Social Media Icons API are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

Please ensure your code adheres to the existing code style and includes appropriate documentation.

## API Endpoints

- `GET /twitter`: Retrieve the Twitter icon.
- `GET /facebook`: Retrieve the Facebook icon.
- `GET /instagram`: Retrieve the Instagram icon.
- `GET /linkedin`: Retrieve the LinkedIn icon.
- `GET /snapchat` : Retrieve the Snapchat icon.
- `GET /pinterest`: Retrieve the Pinterest icon.
- `GET /twitter-x`: Retrieve the X icon.
- `GET /github`: Retrieve the GitHub icon.
- `GET /medium`: Retrieve the Medium icon.
- `GET /youtube`: Retrieve the Youtube icon.
- `GET /spotify`: Retrieve the Spotify icon.
- `GET /skype`: Retrieve the Skype icon.
- `GET /telegram`: Retrieve the Telegram icon.
- `GET /whatsapp`: Retrieve the Whatsapp icon.
- `GET /reddit`: Retrieve the Reddit icon.
- `GET /internet`: Retrieve the Webpage icon.

## License

This project is licensed under the Apache License, Version 2.0 - see the LICENSE file for details.

