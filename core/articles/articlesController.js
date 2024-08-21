const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Teste article")
})

module.exports = router;