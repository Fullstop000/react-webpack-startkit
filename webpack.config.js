const path = require('path')
const webpack = require('webpack')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    /** HMR support */
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        path.resolve(APP_PATH, 'index.jsx'),
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        hot: true,
        progress: true
    },
    module: {
        preLoaders: [{
            test: /\.(jsx|js)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders:[
            {
                test:/\.(jsx|js)$/,
                loader: 'babel',
                include:APP_PATH
            },
            {
                test:/\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/, 
                loader: "style!css"
            },
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader?sourceMap']
            }
        ]
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    postcss:[
        require('autoprefixer')
    ],
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // you can also use your own index.html
        new HtmlwebpackPlugin({
            title: 'A Simple React App'
        })

    ]
}