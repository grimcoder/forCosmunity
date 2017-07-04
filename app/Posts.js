// src/models/User.js
var m = require("mithril")

var Posts = {
    list: [],
    loadList: function() {
        return m.request({
                method: "GET",
                url: "https://dev-api.cosmunity.com/v2/Feeds/Posts/all",
                withCredentials: true,
            })
            .then(function(result) {
                Posts.list = result.items
            })
    },
}


module.exports = Posts