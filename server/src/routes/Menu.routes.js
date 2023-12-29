// routes/Menu.routes.js
const express = require("express");
const router = express.Router();
const menuControllers = require("../controllers/Menu.controllers");
const fileUpload = require("../middlewares/File.middlewares");


router.post("/addMenu",fileUpload.uploadFiles, menuControllers.addMenu);
router.get("/getAllMenu", menuControllers.getAllMenu); 
router.delete("/deleteMenuByIndex/:index", menuControllers.deleteMenuByIndex);
// You can add more Menu-related routes as needed

module.exports = router;
