var webpack=require("webpack");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    entry:{
        index:"main.js"
    },
    output:{
        path:"dist",
        filename:"all.js"
    },
    module:{
       loaders:[
           {
              test:/\.css/,
               loader:ExtractTextPlugin.extract(["css"])
           },
           {
               test:/\./
           }

       ]
    }


}
