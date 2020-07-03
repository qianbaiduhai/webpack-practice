const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src/testPostcss'),
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/testPostcss'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }
}
