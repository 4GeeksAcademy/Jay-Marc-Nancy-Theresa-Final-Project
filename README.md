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

// make your ports visible!!

//optional step
- git add .
- git commit -m "resolved pulling from main"
- git push (edited) 