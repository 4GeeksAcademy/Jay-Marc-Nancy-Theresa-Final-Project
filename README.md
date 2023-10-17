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

// housekeeping on this branch
- added font-grey to index.css
- updated navbar links (inactive pages greyed out and removed link functionality)
- corrected console className type errors in contactUs.js component
- removed fetchGetAllComicVendors() from home.js and placed in initialLoading() in flux
- added data validation in mapping functions in vendors.js to prevent random crashes
- added keys to mapped items in vendors.js to remove console warnings
- removed unused imports and hooks from home.js
- corrected react className requirements in svg tags (example: fill-rule should be fillRule, etc.)
- removed unused react hooks and imports from aboutContact.js