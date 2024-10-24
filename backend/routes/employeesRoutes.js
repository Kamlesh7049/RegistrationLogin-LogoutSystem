const express=require("express");
const route=express.Router();
const empController=require("../controllers/employeeControllers");

route.post("/employeeregistration",empController.userRegistration);
route.post("/employeelogin",empController.userLogin);

module.exports=route;




