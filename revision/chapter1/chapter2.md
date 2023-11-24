- React is a library its a piece of code that facebook developers wrote for us
- bundler 
- npm manages all our packages
- we use npm because we want to use many packages in our app
-  npm i -D parcel -D is called install as a dev dependency it will be in dev enviroment not in the production
- package-lock.json 
- to install react in our project we do npm i react and moreover we need react in the server as well
- npx means execute our code
- npx parcel index.html here index.html is the entry point sos we are tellling that execute parecel and take the index.html as your entry point
- normal browser doesnt understand import statement therefore we have define the script type as module

## What is NPM?

- NPM is a a platform from where we can borrow or share packages which are used to build applications , so there are many functionalities or features we need that cannot be fulfilled by a single react application so we borrow packages and use them to fulfill the application needs

## What is Parcel/webpack ? why do we need it ?

- dev server : when parcel starts the local server if it sees that the port 1234 is already in use it will automatically switch to a fallback port and will show you the port in the CLI
- Hot reloading : WHenever you make changes in your code parcel detects changes and rebuilds the changed parts bydefault parcel actually reloads the page but it actually does HMR(hot module replacement). HMR improves the development experience and if you are not using any framework you can use the module API
- caching : Parcel actually caches everything it builds to disk if we restart the server parcel will only rebuild the files that were changed since the last build

## What is Parcel-cache

- Answer mentioned above

## What is npx?

- So npx actually stands for node package execute it actually comes along with npm when you installed npm glabally it is an npm package runner that can execute any package that you want from the npm registry without even installing for example npx kill-port 8080 here we execute the command to kill the port 8080 without even installing any kill-port package

## What is the difference between dependencies and devDependencies?

- The packages in which our react app depends or gives our react app superpowers and features are known as dependencies , sometimes some packages you want in the development mode rather than the production mode for example bundlers we need them in the development mode so we can install them in the development using --D but lets say react we need react in the production mode so we directly install it without specifying --D

## What is Tree-Shaking?

- Tree also known as dead code elimination , in production builds Parcel statically analyzes the imports and exports of each module and removes everything that isnt used ,rather than wrapping each module in a different function parcel actually concatenates modules into a single scope whenever possible which actually improves the performance and runtime

## What is Hot-Module Replacement?

- As soon as we make changes in the code parcel actually rebuilds the changed files and updates the app on the browser usually parcel fully reloads the page but in some cases it actually performs HMR . HMR improves the development experience by updating the modules during the runtime itself without actually reloading the page , example CSS changes are applied via HMR with no page reload .

## List down some of the superpowers of parcel any three?

- HMR - as mentioned above
- Minification - Parcel includes compressess or you can say it reduces the size of the files like CSS,HTML and SVG , it reeduces the size by removing the whitespaces , renaming the variables to shorter names and many other optimizations these optimization takes place in the build command
- Image optimization - Parcel supports resizing , converting and optimization of the images , it supports lossless image optimization for JPEG and PNGs by default the production mode which actually reduces the size of the images without affecting their quality.

## What is .gitignore? what should we add and not into it?

- A local .gitignore file is usually placed in the root directory of a project. You can also create a global .gitignore file and any entries in that file will be ignored in all of your Git repositories.Folders like node_modules and the files that are created by the server itself are put in the .gitignore for example parcel cache and dist folders

## What is the difference between Package.json and package-lock.json?

- Package.json : The package.json file has the metadata of the project, The project's basic information, such as package name, version, description, author, dependencies, etc., are present in package.json.The npm init command generates the package.json file.
  this file is mandatory for every project. It contains basicinformation about the project Application name/version/scripts (ng scripts)

Package-lock.json: The package-lock.json file stores the exact version of dependencies. Dependencies and their locked versions are there in the package-lock.json file. The package-lock.json file is generated when you install a package to your project, That is why we shouldnot delete the package-lock.json. Package-lock.json have all the transitive dependencies.
This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.It is generated after an npm install.It allows future devs & automated systems to download the same dependencies as the project.It also allows to go back to the past version of the dependencies without actual ‘committing the node_modules folder.It records the same version of the installed packages which allows to reinstall them. Futuee installs wll be capable of building identical description tree.

## Why Should i not modify package-lock.json?

- package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause depencies issues in the production environment.It actually has all the information about all the transitive dependencies so editing this file will cause issues in downloading all the resources in the server side.

## What is node-modules? Is it good idea to push that on git?

- node_modules is a folder where all the dependencies and transitive dependencies resides.
  The node_modules folder can be regenerated so it can be avoided while pushing.

## What is the dist folder?

- dist is the folder which is created when the build of the application is created. It contains the bundled
  and minified code. It contains all the assets of the application all the images and media which is
  processed and optimized as part of the build.

## What is browserlists?
- It is a website to display compitable browsers from the browserlist string

## What is the difference between ^ - caret and ~ - tilda?
- ~ version is the equivalent version and only accept new patch versions whereas ^ will accept all teh new minor and patch versions , if there is no ~ or ^ than it would be that exact version itself and no updates its just like hardcoding the versions it will never update itself if any in the produ mode as well

## Read about Script types in html
- There are majorly three types of script types - 


