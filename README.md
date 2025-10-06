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