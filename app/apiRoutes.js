var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get ("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var matchFriend = {
            name: "",
            photo: "",
            difference: 10000
        }

        console.log(req.body);

        var userInfo = req.body;
        var userInfoScores = userInfo.scores;
        var userDifference = 0;

        for(i = 0; i < friends.length; i++){
            userDifference = 0;

            for(var j = 0; j < friends[i].scores[j]; j++) {
                userDifference += Math.abs(parseInt(userInfoScores[j]) - parseInt(friends[i].scores[j]));

                if(userDifference <= matchFriend.difference) {
                    matchFriend.name = friends[i].name;
                    matchFriend.photo = friends[i].photo;
                    matchFriend.difference = userDifference;
                }
            }

           
        }

        friends.push(userInfo);
    res.json(matchFriend);

    })
    
}