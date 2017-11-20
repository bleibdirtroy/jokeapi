const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/users");

const app = express();
const router = express.Router();
const port = 3000;

//Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Config route
router.route("/user").post(userController.postUsers);

app.use("/api",router);

//Listen on defined port
app.listen(port,function(err){
	if (err){
		console.log("An Error Occured");
	} else {
		console.log("Server Listening On Port " + port);
	}
})