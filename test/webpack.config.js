const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(_dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(_dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}