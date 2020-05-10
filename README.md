# siteparts
SitepParts is a set of basic fonctions that can be usefull when building new web applications.

## config
Config module is usefull to read a config file and make configuration environment available to other modules.
This module aim to be one of the basic modules of this project.

## mongodb
This module aim to configure mongodb connections. It uses the Config module and add mongodb and mongoose packages.

## mvc
Add mvc architecture and a basic app.js file. Add also a public folder for direct access to files.

## How to use it ?
1. Create an empty repository on Github (no gitignore, no readme.md, no licence...).
2. Clone this repository or one the branch, according your needs :
`git clone https://github.com/lstumme/siteparts.git`
or
`git clone -b [branch name] https://github.com/lstumme/siteparts.git`

3. Change origin :
`git remote rename origin upstream`

4. Reference your new repository :
`git remote add origin [your repository url]`

5. Push to your repository :
`git push origin master`

6. Clear repositories references :
`git remote rm upstream`

7. Install packages :
`npm install`

8. Code your application and have fun!
