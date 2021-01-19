const mongoose = require("mongoose");

const ToolsSchema = new mongoose.Schema(
  {
      title: String,
      link:String,
      description:String,
      tags:[{type:String}]
  },
  { collection: "Tools" }
);

var Tools = mongoose.model("Tools", ToolsSchema);
module.exports = Tools;
