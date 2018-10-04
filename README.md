# passports-prototype

Passport journeys

# Setup

Clone/download this repo and run `npm install` then `npm start`.

Visit <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> in your browser.

# Development

Gulp is used to compile and watch assets. Browsersync watches html files and reloads automatically on port 3001. 
Visit <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> in your browser.

# View the prototype online

<a href="https://hmpo-prototypes.herokuapp.com/" target="_blank">https://hmpo-prototypes.herokuapp.com/</a>

It may take a few seconds to load.

# Deploying to Heroku

Get yourself a Heroku account and get yourself added to the prototype app.

Add Heroku remote (that you will push to, to deploy) `heroku git:remote -a hmpo-prototypes`

Use `git push heroku master` to deploy the master branch. To deploy another branch use `git push heroku <branch-name>:master`, where `<branch-name>` is the branch you want to push.
