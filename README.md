This repo is from my blog post on "[What is an API?](https://www.zachgollwitzer.com/posts/what-is-an-api/)".

## How to Run the App

1. Set up a project in Google Cloud with [these instructions](https://cloud.google.com/vision/docs/setup).
2. Configure the Node SDK with [these instructions](https://cloud.google.com/vision/docs/libraries).
3. Clone this repo, open two terminals, and run the following commands

```
# Terminal 1
npm install
npm install -g nodemon
nodemon app.js
```

```
# Terminal 2
cd angular
npm install
ng serve
```

You should have two processes running, and you can visit http://localhost:4200 to visit the app.
