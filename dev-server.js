const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config')
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compailer = webpack(config)
const server = new webpackDevServer(compailer, options)

server.listen(5000, 'localhost', function () {
    console.log('dev server listening on port 5000');
})
