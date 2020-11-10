import axios from "axios";

const API = {
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

    searchById: function(id) {
        return axios.get("https://www.boardgamegeek.com/xmlapi2/thing?id=" + id)
        .then(function(response) {
            let parser = new DOMParser();
            let parsedRes = parser.parseFromString(response.data, "text/xml");
            return(parsedRes);
        });
    }
};

export default API;