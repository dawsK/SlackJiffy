'use strict';

module.exports = {
    get: function (req, res) {
        res.send('Hi!');
    },
    post: function (req, res) {
        res.send('Hi, ' + req.body.user_name + "! Glad you are hanging out with us on _" + req.body.channel_name + "_.");        
    }
};
