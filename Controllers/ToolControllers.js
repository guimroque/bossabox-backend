const ToolService = require('../Services/ToolService')

const Tool = {

    async addTool(req, res){    
         add = await ToolService.addTool(req, res)
            .then(async(data)=>{
                res.status(201).json(data)
            })
            .catch((err) =>{
                console.log(err)
                res.status(400).json(err)
            });
    },

    async getAllTools(req, res){    
         await ToolService.getAllTools(req, res)
            .then(async(data)=>{
                res.status(200).json(data)
            })
            .catch((err) =>{
                res.status(400).json(err)
            });
    },

    async deleteToolById(req, res){    
        await ToolService.deleteToolById(req, res)
            .then(async(data)=>{
                res.status(204).json(data)
            })
            .catch((err) =>{
                res.status(400).json(err)
            });
    },
    
    async getByTag(req, res){
        await ToolService.getByTag(req, res)
            .then(async(data)=>{
                res.status(200).json(data)
            })
            .catch((err) =>{
                res.status(400).json(err)
            });
    }

}


module.exports = Tool;