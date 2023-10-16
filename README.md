!! STARTING A NEW BRANCH !!

// in bash
- git add *
- git stash
- git pull origin main
- pipenv shell
- pipenv sync

// new bash terminal
- npm install emailjs-com --save

// new bash terminal
- rm -rf node_modules
- rm -f package-lock.json
- rm -rf dist
- npm cache clean --force
- npm install

// make ports 3000 & 3001 visible (public)

// new bash terminal
- pipenv shell
- pipenv run start
- copy address and update .env

// optional step
- git add .
- git commit -m "resolved pulling from main"
- git push (edited) 

// close all open terminals/npm/python

// open new terminal
- pipenv shell
- pipenv run start

// open new terminal
- npm run start