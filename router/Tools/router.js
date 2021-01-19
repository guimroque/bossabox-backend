const router = require('express').Router();
const ToolController = require('../../Controllers/ToolControllers')

//add Tool
router.post("/add-tool", (req, res)=>{
    ToolController.addTool(req, res);
})

//list all tools
router.get("/get-all-tool", (req, res)=>{
    ToolController.getAllTools(req, res)
})

//delete tool byID
router.delete('/tool/:id', (req, res)=>{
    ToolController.deleteToolById(req, res)
})

//list for tag
router.get('/tools', (req, res)=>{
    ToolController.getByTag(req, res)
})

module.exports = router;