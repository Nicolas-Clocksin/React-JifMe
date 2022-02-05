JifMe Application
    Purpose: This application is a demonstration example I created to help
    run an Application that used both front and back end utilities with React and Mongoose,
    in order to create a proper CRUD application. The application will allow users
    to view images/gifs currently added to the Library database, it will also allow
    a user to post and update the library enteries. The user will also be able to 
    view and update liked or disliked enteries.

    How to Run Application: To run the application
        1. Create two instances of a terminal/console
        2. In one terminal open the application folder and the other open
        the server folder
        3. Type "npm start" on both the server then the application to start the application
Home.js
    Purpose: The home page will display to the user an entry of the library in which
    the user can click on to change or like/dislike the image/gif in the library. On click
    the image/gif will change to another entry in the database

    Functions:
        onClick (): This funtion serves to update the currently displayed function on the homepage
        it will be randomly generated entry in the database/library
        
        like (): When a user likes an image that entry will be updated in the database to true for like and false
        for dislike

        dislike(): When a user didslikes an image the entry is then updated in the database to true for dislike and false
        for like

AddtoLibrary.js
    Purpose: the AddtoLibrary page gives the user the ability to add an image into the database of Library. The user
    will be able to choose between adding a custom image source or have the ability to generate a gif provided by the 
    Giphy API. For both the source will be displayed to the user before final conformation of adding it to the library database.

    Functions:
        checkLibrary(): The checkLibrary function is used to search through the current enteries, and if the source matches,
        then it will not be added into the database and an alert is thrown

        postMeme(): When run, the postMeme gathers the information from the user entered source and creates a new entry
        in the database to post/create

        viewImage(): ViewImage is used to display the current image that the user has sourced to enter to verify the correct
        image is being added to the library

        postGif(): PostGif is used to post the currently randomly generated source of Gif into the library 
        
        generateGif (): generateGif uses the giphy api to randomly pull a source from Giphy to be displayed to the user for
        possible entry into the database

ViewLibrary.js
    Purpose: The ViewLibrary page is used to display each entry in a row to the user in order to allow them to see all possible
    data enteries of libary. By doing this, the user will be able to update/remove the enteries displayed as needed in order to modify
    any changes or mistakes in the database.

    Functions: 
        show(): Show is used to display a pop up menu for the user to edit/update entry of the database selected

        disable(): Disable is used to hide the pop up display from the user either when cancelled or clicking out of
        the container

        update(): Update receives the id of the current entry selected and updates either the src information or the 
        name of the entry selected

        remove(): Remove is used to remove the currently selected entry from the database by accepting in an ID of that
        entry to be passed to the databse

Likes.js
    Purpose: The purpose of the like page is to display enteries in the Library database where the boolean entry likes
    is set to true. The user can view these enteries and determine if they would like to set to default value of false or dislike
    the image and place into the dislike enteries.

    Functions:
        unlike (): Unlike goes through and sets the currently selected entry and updates the like/dislike values to default of false
        dislike(): Dislike updates the current selected entry and sets the like to false and dislike to true to be added to the dislike
        list of enteries

Dislike.js
    Purpose: The dislike page is used to display any entry in the databse with dislike value set to true. The user will be able to
    view and update these enteries to be either default or liked. 

    Function:
         undislike(): undislike sets the current entry to default values of like: false and dislike: false
         like(): Like is used to update a dislike entry from like false to true and change the current dislike from true to false
         and display in the like page.