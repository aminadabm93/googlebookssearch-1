const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//api routes
router.use("/api", apiRoutes);

//If no api routes are hit, send the react app
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../cliend/build/index.html"))
});

module.exports = router;