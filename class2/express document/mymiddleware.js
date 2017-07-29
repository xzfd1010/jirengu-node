/**
 * Created by nick on 2017/7/28.
 */
module.exports = function (req, res) {
    res.send("The views directory is " + req.app.get("views"));
};