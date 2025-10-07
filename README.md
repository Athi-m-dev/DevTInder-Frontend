# DevTinder Frontend
   Install axios and react-redux & reduxtoolkit
   In front-end while call the backend api we have to use the withCredentials:true in axios to send the cookies to the backend.
   becuse without that my axios call will not send the cookies to the backend.
# DevTinder Backend 
   In backend install cors for cross origin resource sharing
   In backend while using the cors we have to use the credentials:true and origin:"http://localhost:5173" to accept the cookies from the frontend.
   becuse without that my backend will not accept the cookies from the frontend.
   ### Solution for that 
    - my frontend and backend both should be run in same domain name and port in production level.
    - or we have to use the above method in development level.


# Redux toolkit 
   ### Steps 
     - Redux (Used to work with data of the application easily)
     - configure the store
     - create the slice with reducers and actions bacause my reducers will help to change the data in the slice 
     - provide the store to my app using the provider component


# refresh the page it redirect to / path 
 ### solution
  - when the browser refresh the data of the store(redux) are cleared so the data not shown in navbar
  - for that at / again add the data into store and dispatch the action
  - here we can auth the user while get the data of the user if the token is not valid redirect him to the login page 
  - if he login navigate to feed page 
  - now if the user refresh it redirect to the / and add the data into the store so the data of the store still remains it shown
  - if the data come to the store dont again make the user to authticate 