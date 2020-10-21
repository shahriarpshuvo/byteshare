<div style="text-align:center">
<img src="./public/logo.png" style="width: 40px;">
<h2 style="margin-top:10px; padding-bottom: 10px">byteShare<br><span style="font-size: 14px; ">Quick File Share</span></h2>
</div>

**byteShare** allows you to upload file and give you a shareable link for download the file within the next 24 hrs.

### Features

This application is built with react, nodejs, express and mongoose. `api` folder contains REST Api. The node application uses `express` and `multer` for files uploads, `nodemailer` for sending link via email.

React parts of the application uploads file to the server, retrieve file's link for download page, allows user to send email and calls on the rest Api to get file info. Used `axios` to for app call, and `react-router-dom` manages multiple routes for application.

This application uses a third party service - [cron-job.org](https://cron-job.org) for handing the cron job (in every 24 hrs files will get deleted) as free tier of `heroku` application will got slept due to inactivity.

The Graphics, Logo and UI of application is sketched on Figma. And used `sass` for writing styles for the application.

### Preview

![App Preview](./screenshot.gif)

### Installation

**Backend:** Backend of the application uses nodejs, express and mongoose. Go to `api/` folder
edit `.env.example` file and set environment variables and rename the file to `.env`. Then run command `npm install` from `api/` path to install all the dependencies for backend server.

- `npm run server` - will run the development server on port `8000` by default and will listen to file changes
- `npm start` - run production server

**Frontend:** Frontend of the application is generated with `react-create-app`. More can be found [here](https://github.com/facebook/create-react-app).

On the root `/` folder of the application edit `.env.example` file and set environment variables and rename the file to `.env`. Then run command `npm install` from `/` path to install all the dependencies for frontend of the application.

- `npm start` - Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
- `npm run build` Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
