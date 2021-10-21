const express = require("express");
const router = express.Router(); 

router.get("/",(req,res)=>{
   res.send("Server for https://voxroom.netlify.app is up and running"); 
}); 

module.exports = router; 