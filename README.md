### Running instructions
* Clone repository
* npm install
* npm start to run the dev server. View the website at [http://localhost:3000/](http://localhost:3000/)

### Comments
* The page was implemented in react. This will provde a good basis to build on the site further down the track.
* The component based structure of this app will allow the reuse of components throughout the site.
* Due to the time limit, a basic layout has beeen implemented that meets most of the requirements. Thoughts on how to improve on this implementtation are included in the code.


### File Structure
The code is separated into three main folders:
* common: This folder contains generic react components that can be reused throughout the site.
* landing-page: This folder contains all the components necessary to render the landing page. This is a domain-specific folder. Extra functionality for the site can be added by creating new domain-specific folders (eg. cart, gallery, contact us, etc...)
* static: All static assets such as images go here.
