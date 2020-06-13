# _Enjoi Art_

#### _An application to practice making API calls with JavaScript_

#### By _**Allison Mackey**_

[back](README.md)

To work on this application you will need to have node.js/Homebrew installed on your computer. 
To find out if you have node running on your system open your command line and type `node -v` 
If you do not have the latest version of node/homebrew be sure to visit [Homebrew's GitHub Page](https://github.com/Homebrew/brew) or see the installation instructions at the bottom of this page. You can also visit the [Homebrew Website](https://brew.sh/) for more information on how to install!


## Installing Application
* _Open your command line and navigate to your desktop with command `cd desktop`_
* _Run `$ git clone https://github.com/amackey693/art-project.git` in your command line to clone this repository from GitHub_
* _Navigate to your new file 'art-project' in your command line using `$ cd art-project`_
* _Delete the pre-exisiting .git file by running `$ rm -rf .git` in your command line_
* _Create your own git file by running `$ git init` in your command line._
* _Run `code .` in your command line. This will open all files associated with this app._
* _Run `node i` in your command line to insure all node packages are correctly installed._
* _Create your own .env file & .gitignore files within your app's root directory using the commands `$ touch .env` & `$ touch .gitignore` in your command line_
* _Your .gitignore file should hold the following files:_
  - node_modules/
  - dist/
  - .DS_Store
  - .env
* _Apply for your own API KEY from Harvard Art Museums [here](https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform)
* _Once you have your own API KEY be sure to protect it by placing it into your .env file like so:_
  - **API_KEY = your_api_key_here**
* _If you would like to create your own API call for something other than what is displayed currently, you can use an app like PostMan, Swagger, etc. to do so, I would recommend reviewing the API documentation [here](https://www.harvardartmuseums.org/collections/api) to make this application your very own! If you use a new API call, be sure to update the artApp.js response call on line 5 to correctly display your new call parameters._
* _To view your project while you're in the development faze use the command `$ npm run start` in your command line_
  - To see all of the different built in scripts or add your own be sure to checkout the package.json file!
* _The final step is to create your own [GitHub](https://github.com) repository and push all of your updates!_