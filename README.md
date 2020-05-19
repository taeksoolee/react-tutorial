# react-tutorial

https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC

```
npm init
npm install --save react react-dom
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev webpack webpack-cli webpack-dev-server
```

```
//package.json
{
    "scripts": {
        "start": "webpack-dev-server --hot --host 0.0.0.0"
    },
    "dependencies": {
        "react": "^16.13.1",
        "react-dom": "^16.13.1"
    },
    "devDependencies": {
        "@babel/cli": "^7.8.4",
        "@babel/core": "^7.9.6",
        "@babel/preset-env": "^7.9.6",
        "@babel/preset-es2015": "^7.0.0-beta.53",
        "@babel/preset-react": "^7.9.4",
        "babel-loader": "^8.1.0",
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.11",
        "webpack-dev-server": "^3.11.0"
    }
}
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
