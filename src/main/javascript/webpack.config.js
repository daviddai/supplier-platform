const path = require('path');
const merge = require('webpack-merge');

const javascriptLoader = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

const clientCssLoader = {
    resolve: {
        extensions: ['.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
const serverCssLoader = {
    resolve: {
        extensions: ['.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
};

const server = {
    mode: 'development',
    target: 'node',
    entry: './server/server.tsx',
    output: {
        path: path.resolve(__dirname, 'build/server'),
        filename: 'server.js'
    }
};

const client = {
    mode: 'development',
    target: 'web',
    entry: './client/client.tsx',
    output: {
        path: path.resolve(__dirname, 'build/client'),
        filename: 'client.js'
    }
};

module.exports = [
    merge(serverCssLoader, javascriptLoader, server),
    merge(clientCssLoader, javascriptLoader, client)
];