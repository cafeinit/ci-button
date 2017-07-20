/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.15
 */

'use strict'

const config = require('./webpack.config')

config.output.filename = '[name].amd.js'
config.output.libraryTarget = 'amd'

module.exports = config
