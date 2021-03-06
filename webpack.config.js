const path = require('path');

const MODE = process.env.NODE_ENV || 'development';
const PRODUCTION = MODE === 'production';

module.exports = {
    mode: MODE,
    devtool: PRODUCTION ? 'hidden-source-map' : 'source-map',
    entry: ['./src/App.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        chunkFilename: '[name].js',
        publicPath: '/build/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules'],
            },
        ],
    },
    devServer: {
        open: true,
        port: 3334,
        publicPath: '/build/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /react|react-dom/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
            },
        },
    },
    performance: { hints: false },
};
