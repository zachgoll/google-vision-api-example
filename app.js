const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors');

async function analyzeText(url) {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    const request = {
        image: {
            source: { imageUri: url }
        }
    }

    // Performs label detection on the image file
    try {
        const result = await client.textDetection(request);
        return result[0];
    } catch (err) {
        console.log (err)
        return null;
    }

  }

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res, next) => {
    const url = req.body.url;
    console.log(url)
    analyzeText(url).then(val => {
        res.json({textTranslation: val.fullTextAnnotation.text})
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})