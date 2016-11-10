# passports-prototype

Passport journeys

# Setup

Clone/download this repo and run `npm install` then `npm start`.

Visit <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> in your browser.

# Development

Watch for JS and Sass changes and automatically compile using `npm run watch:js` and `npm run watch:sass`.

# Redis

When Redis is running on localhost:6379 (standard settings) your session data won't be lost during app restarts. [Download Redis](http://redis.io/download).

# View the prototype online

<a href="http://passports-prototype.herokuapp.com/" target="_blank">http://passports-prototype.herokuapp.com/</a>

It may take a few seconds to load.

# Deploying to Heroku

Get yourself a Heroku account and get yourself added to the prototype app.

Add Heroku remote (that you will push to, to deploy) `heroku git:remote -a passports-prototype`

Use `git push heroku master` to deploy the master branch. To deploy another branch use `git push heroku <branch-name>:master`, where `<branch-name>` is the branch you want to push.
