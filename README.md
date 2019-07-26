# memgame
A memory  game, built using reactjs. User clicks on cards, that then get re-shuffled. If the user clicks on the same card twice then they lose. This is a front-end app.

#### Technologies

* react
* github
* javascript
* html
* css
* create-react-app
* lodash (_.shuffle() used for randomizing array of cards)

#### Deployed

https://johnlobster.github.io/memgame/

#### Github repository

<https://github.com/johnlobster/memgame.git>

#### Running locally

clone the master repo, cd to memgame directory

`npm install` will install all the node modules. This will take a while, as react uses nearly 1000 modules

`npm start` will run the app, including opening a new browser tab 

#### Design notes

Css grid was used to arrange the cards. Grid provides a fixed number of columns and rows, which is what I 
wanted to lay out the cards. The columns are sized using `1fr` which divides the amount of space to get column widths. The row size of `1fr` makes the all the rows the height of the tallest element.

The app is responsive to screen size. There are different numbers of columns at different screen sizes, and
the cards shrink in size as the screen size gets smaller. At large screen sizes, the displayed part of the grid
is shrunk, otherwise not all the cards appear on the screen at once.

css animation was used to grow cards when hovered. Card flipping is controlled by a boolean state variable "flip" in the Game component. The onClick function for the card makes the Card module flip property true or false, which is then used to conditionally add the "flip" property to the card class.

#### Setup

The app structure was created using `create-react-app`, which sets up directory structure, seed files,
`package.json` entries and webpack configuration, so that running and deploying is very easy. The `github-pages` app was installed, a few modifications made to the package.json and then the app could
be deployed to a github page by typing `npm run deploy`

There seems to be a "bug" in the flow, that environment variables are not passed into the react code. I wanted
to add some conditional rendering based on NODE_ENV to help with debugging, but this was not possible.

run `create-react-app <name>` and cd to `<name>` directory

As well as creating a dummy app/directory tree, `create-react-app` sets up a bundling flow so that the app can be built from a simple `npm build` command. All files are bundled together, post-processing flows run and the files are minified

create github repository

`create-react-app` does a `git init`, creating a fresh git repository in the `<name>` directory, but it has no connection to the github repo.

##### The easy way to link to github

```bash
rm -rf .git
git clone https://github.com/<your github name>/<name>.git
```

##### The hard way, not deleting the initial repo

To link them together (update `.gitignore` if necessary)
```bash
git add .
git commit -m "create-react-app setup"

git remote add origin https://github.com/<your github name>/<name>.git

git pull origin master --allow-unrelated-histories
git push origin master
```
This does the following
* `create-react-app` creates react scaffolding and initializes a git repo
* save the react scaffolding to local master
* add github repo as a remote called origin
* merge with github master. The `--allow-unrelated-histories` is needed for them to merge, as the react github repo
  is not related to the local repo
* push the merged local master to the github repo

Still didn't work after I edited a file, so had to run
```bash
git push --set-upstream origin master
```
