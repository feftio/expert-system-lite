const path = require('path')

module.exports = {
    mode: 'development',
    watch: false,
    entry: path.resolve(__dirname, 'src/ExpertSystemLite.js'),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'expert-system-lite.min.js',
        libraryExport: 'default',
        libraryTarget: 'umd',
        library: 'Expert'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties', 
                            '@babel/plugin-proposal-private-methods',
                            '@babel/plugin-proposal-private-property-in-object'
                        ]
                    }
                }
            }
        ]
    }
}    

