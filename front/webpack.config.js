const path = require('path');

const htmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry:  [ 'babel-polyfill', './src/js/index.js' ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
      plugins: [
      
        new htmlWebpackplugin({
            filename: 'index.html',
            template: './src/index.html'
        })
       
       /*  new htmlWebpackplugin({
            filename: 'shop-details.html',
            template: './src/shop-details.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'shoping-cart.html',
            template: './src/shoping-cart.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'checkout.html',
            template: './src/checkout.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'blog.html',
            template: './src/blog.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'blog-details.html',
            template: './src/blog-details.html'
           
        }),
         new htmlWebpackplugin({
            filename: 'checkout.html',
            template: './src/checkout.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'checkout.html',
            template: './src/checkout.html'
           
        }),
        new htmlWebpackplugin({
            filename: 'contact.html',
            template: './src/contact.html'
           
        }), */

    

        
     
    ],
    module: {
        rules: [
            {
                test: '/\js$/',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}