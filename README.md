# react-tutorial

https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC

```
npm init
npm install --save react react-dom
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev webpack webpack-cli webpack-dev-server
```
```
//webpack.config.js
module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/react', '@babel/preset-env']
                    }
                }
            ]
        }
};
```
