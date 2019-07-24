# memgame



#### Setup

run `create-react-app <name>` and cd to `<name>` directory

create github repository

To link them together (update `.gitignore` if necessary)
```bash
git add .
git commit -m "create-react-app setup"

git remote add origin https://github.com/johnlobster/<name>.git

git pull origin master --allow-unrelated-histories
git push origin master
```
This does the following
* `create-react-app` creates react scaffolding and initializes a git repo
* saves the react scaffolding to local master
* add github repo as a remote called origin
* merge with github master. The `--allow-unrelated-histories` is needed for them to merge, as the react github repo
  is not related to the local repo
* push the merged local master to the github repo

