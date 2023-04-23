 * A project using "vite"
 * Step:1 ==> First of all, Project setup::
    1. go to the "react router website" for following the tutorial for some essential command.
    2. open cmd 
        >> * npm create vite@latest the-news-dragon-client -- --template react
        >> * cd the-news-dragon-client
        >> * npm install react-router-dom localforage match-sorter sort-by
        >> * npm i firebase (i == install)
        >> * code . (for open the project at vscode)

 * Step:2 ==> Firebase setup ::
    * go to the firebase.google.com
    * then create a firebase project
    * project name> (disable the enable)> again project name> copy the SDK file then create a file such as: "src> firebase> firebase-config.js" then paste to it. 
        --> at the last line of the file just (export default app;)
        ---> enable some of the auth provider as necessary for authentication

* ----------------------------------------------
    * Step: 3 ==> Main Project buildup
* -----------------------------------------------
1. Basically we build this project through the "react bootstrap"
   so go to the "react bootstrap" website ==> https://react-bootstrap.github.io/ ==> Get started,
2. cmd> npm install react-bootstrap bootstrap
3. cmd> npm run dev
   (go to the ==> http://localhost:5173/)
4. Remove all the default css form "index.css" && "App.css"
5. import to the "main.css" file ==> 
    "import 'bootstrap/dist/css/bootstrap.min.css';"
* -------------------------------------------------------
6. Route Setup
* -------------------------------------------------------
    * create >src>routes>Routes.js 
    * create more components(pages) for some more routes && and set the all routes at the Routes.js file
    * As we have to use all the router of the Routes.js to the main.jsx so, we have (export default router) from Routes.js
    * go to the main.jsx and set the RouterProvider
* .......................................................
     *   SOME NECESSARY Tools...
* ....................................................
 * ==>>> (Working with timezone)
   1. for time set up go to ==> "https://momentjs.com/"
   2. install cmd> npm install moment
   3. import at header ==>import moment from 'moment';
   4. moment().format("dddd, MMMM D, YYYY")
  * ====>>> (marquee)
   1. go to the "react marquee" website
   2. cmd> npm install react-fast-marquee --save
   3. import >> import Marquee from "react-fast-marquee";
  * ===>>> (icons)
   1. go to the "react icons" site
   2. cmd> npm install react-icons --save
   3. import { IconName } from "react-icons/fa";

* --------------------------------------------------------------
*      SERVER API (using express js(nodejs))
* -----------------------------------------------------------------
* * Steps::
  > * go to the "expressjs" site
  > * open new cmd >>
      > 1. mkdir the-news-dragon-server
      > 2. cd the-news-dragon-server
      > 3. npm init -y
      > 4. code .
      > 5. npm install express
  > * create index.js 
    * cmd > nodemon index.js
    * create data>categories (pasts data)
* * ---------------------Now go to the client set up ----------------------
*  > 1. set a state and fetch the data using useEffect(). if there are some problem occurs 
         such as accessing  data problem  we have set up the cors to the server side
   > 2. go to the expressjs> resources> middleware> cors
   > 3. cmd(server) > npm install cors   
   > 4. then require, and use the cors in the index.js  

   * NOTE: if we want to push the server file into the git then we have to create a file .gitignore then write (node_modules)

* --------------------------------------------------------------
*      AUTHENTICATION
* -----------------------------------------------------------------
  > 1. Create provider>AuthProvider
  > 2. For using AuthProvider we have to Create Context. As we use it from different files for different angles so we need to export it.
  > 3.  <AuthContext.Provider value={authInfo}>
            {children} 
    </AuthContext.Provider> and take a children as an argument.
  > 4. Then go to the main.jsx and set RouterProvider into the AuthProvider
  > 5. go to AuthProvider and import>> import { getAuth } from "firebase/auth";
  > 6. create a auth>> const auth = getAuth(app); to use this from anywhere
  > 7. Now we can use this from anywhere such as: const {user} = useContext(AuthContext);

   