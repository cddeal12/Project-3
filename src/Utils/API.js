import axios from "axios";

const API = {

    // Makes a search to the boardgamegeek api with a given query, only returns game and expansion items
    searchGames: function(query) {
        return axios.get("https://www.boardgamegeek.com/xmlapi2/search?type=boardgame,boardgameexpansion&query=" + query)
        .then(function(response) {
            console.log(response);
            let parser = new DOMParser();
            let parsedRes = parser.parseFromString(response.data, "text/xml");
            console.log(parsedRes);
            return(parsedRes);
        })
        .catch(function(error) {
            console.log(error);
        }).then(console.log("Ran Search.."));
    },

    // Gets an item with a specific bgg_id, only returns one item
    searchById: function(id) {
        return axios.get("https://www.boardgamegeek.com/xmlapi2/thing?id=" + id)
        .then(function(response) {
            let parser = new DOMParser();
            let parsedRes = parser.parseFromString(response.data, "text/xml");
            return(parsedRes);
        });
    },

    // DATABASE ROUTES
    // ==========================================================

    // Game Routes
    //-------------------------------------------------
        // Adds a new game to database, from GameController
        addGame: function(game) {
            console.log("Attempting to add game: " + game.title);
            return axios.post("/api/game", {title: game.title, bggId: game.bggId, imageString: game.imageString})
        },

        getGameByBGG: function(bggId) {
            return axios.get("/api/game/" + bggId);
        },

        getGameById: function(id) {
            return axios.get("/api/game/byId/" + id);
        },

    // User Routes
    // ------------------------------------------------
        // Adds a new user to the database, from UserController
        addUser: function(newUser) {
            return axios.post("/api/user", {username: newUser.userName, password: newUser.password});
        },

        // Sets currentUser to a user found by id
        setCurrentUser: function(id) {
            return axios.get("/api/user/" + id);
        },

        changeName: function(name, id) {
            return axios.put("/api/user/", {name: name, id: id});
        },

    // Meetup Routes
    // ----------------------------------------------------
        // Adds a new meetup to the database, from MeetupController
        addMeetup: function(newMeet) {
            return axios.post("/api/meetup", {
                name: newMeet.name,
                timeInfo: newMeet.timeInfo,
                locationInfo: newMeet.locationInfo,
                extraInfo: newMeet.extraInfo,
                owner_id: newMeet.ownerId
            });
        },

        // Gets all meetups
        getAllMeetups: function() {
            return axios.get("/api/meetup/all");
        },

        // Gets a meetup by ID
        getMeetup: function(id) {
            return axios.get("/api/meetup/" + id);
        },

        // Gets all meetups with an owner id
        getMeetupByOwner: function(id) {
            return axios.get("/api/meetupByUser/" + id)
        },

    // UserGame Routes
    // ------------------------------------------------------
        // Adds a new user-game association to the usergame table
        addUserGame: function(newUserGame) {
            return axios.post("/api/usergame", {
                userId: newUserGame.userId,
                gameId: newUserGame.gameId
            });
        },

        // Finds associations by the user's ID
        findUserGameByUser: function(id) {
            return axios.get("/api/usergame/byUser/" + id);
        },

        // Finds an association by a userId and a gameId
        findUserGame: function(query) {
            return axios.get("/api/usergame", {
                userId: query.userId,
                gameId: query.gameId
            });
        },
    
    // UserMeetup Routes
    // ------------------------------------------------------------------
        // Adds a new association
        addUserMeetup: function(query) {
            return axios.post("/api/usermeetup", {
                meetupId: query.meetupId,
                attendeeId: query.attendeeId
            });
        },

        // Gets an association by an attendee
        findUserMeetupByAttendee: function(id) {
            return axios.get("/api/usermeetup/byUser/" + id);
        },

        // Gets an association by the meetup
        findUserMeetupByMeetup: function(id) {
            return axios.get("/api/usermeetup/byMeetup/" + id);
        }


};

export default API;