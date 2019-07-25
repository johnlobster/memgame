# memgame
A memory  game, built using reactjs. User clicks on cards, that get re-shuffled by a click. If the user clicks on the same card twice then they lose. This is a front-end app.

#### Technologies

* react
* github
* javascript
* html
* css
* create-react-app

#### Deployed

https://johnlobster.github.io/memgame/

#### Github repository

<https://github.com/johnlobster/memgame.git>

#### Running locally

clone the master repo, cd to memgame directory

`npm install` will install all the node modules. This will take a while, as react uses nearly 1000 modules

`npm start` will run the app, including opening a new browser tab 

#### Setup

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
