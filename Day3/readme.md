## Igniting the react app

- webpack is a bundler , parcel and vite etc these are bundlers
- bundler is responsible for a lot of superpowers
- we will use parcel
- in CRA we use webpack , so CRA uses webpack and babel
- npm does not stands for node package manager (there is no official name for npm)
- npm is used to manage our packages
- why we use npm (because we need more packages in our react app)
- why npm i -D parcel (means install as dev dependencies) dependency means all the packages my project needs
  we need parcel in development mode
- ^(tilda) and ~ () (so that the packages will be auto updated)
- package-lock.json why ? it will exaclty tell us the version we are using and some extra information , it locks the version , package lock.json it locks the version and never put it in gitignore
- nodemodules should be in gitignore because our package-lock.json and package.json has all the information about all our packages
- npx means execute using npm ()
- now parcel will run the server with the help of npx parcel index.html
- when browser is loading scripts browser doesnt know what is import the normal browser doesnt know what import export means
- therefore we have to add type module to the script so that it knows what react
- because parcel is a Beast , Hot module reload (aka HMR) which is responsible for all the changes , it actually keeps a track of all the changes and whenevr there is a change it will reload
- HMR working -- File watcher algorithm (parcel uses File watcher algorithm which is written in C++)
- What is parcel cache ? a seperate space for parcel
- dist folder keeps minified version or faster version of our project it creates development build and hosts it on our server
- parcel bundles everything cleans the cconsole.log() and much more
- Media takes time to be loaded
- Parcel also optimizes the images as well
- Parcel also caches during development it is caching things
- parcel is also taking care of compatibility with older versions of browsers
- parcel adds polyfills
- parcel gives us a functionality that we can enable https in our local enviroment npx parcel index.html - --https
- parcel also manages the port number
- we should put parcel-cache in gitignore
- anything that can be automatically generated will be put in gitignore
- parcel also does consistent Hashing algorithms to cache things up
- parcel is a zero config bundler
- parcel is taking the help of the packages and all the node-modules
- 