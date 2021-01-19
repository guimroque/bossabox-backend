const Tools = require("../models/Tools");

const ToolService = {

    async addTool(req, res){    
            const newTool = new Tools({
                title: req.body.title,
                link: req.body.link,
                description: req.body.description,
                tags: req.body.tags
            })
           return new Promise(async (resolve, reject)=>{  
                await newTool.save((err,result)=>{
                if(err){
                    reject({
                        success:false,
                        message:err
                    });
                }else{
                    resolve({
                        success:true,
                        message:"Created"
                    })
                }
            })
        })
    },

    async getAllTools(req, res){    
            return new Promise(async(resolve, reject)=>{
                await Tools.find((err, result) => {
                    if(err) {
                        reject({
                            success: false,
                            message: err
                        })
                    }else{
                        resolve({
                            success: true,
                            data: result,
                        })
                    }
                });
            })
    },


    async deleteToolById(req, res){
        return new Promise(async(resolve, reject)=>{
            await Tools.deleteOne(
                {_id:req.params.id},
                (err,result)=>{
                if(err){
                    reject({
                        success:false,
                        message:err
                    });
                }else{
                    resolve({
                        success:true,
                        message:"Deleted tool"
                    })
                }
            })
        })
    },

    async getByTag(req, res){
        var tag = req.query.tag
        return new Promise(async(resolve, reject)=>{
            await Tools.find(
                {tags: {$in:tag} }, (err, result)=>{
                if(err){
                    reject({
                        success:false,
                        message:'erro'
                    });
                }else{
                    resolve({
                        success:true,
                        data:result
                    })
                }
            })
        })

        
    }

}


module.exports = ToolService;