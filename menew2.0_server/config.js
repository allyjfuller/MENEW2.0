'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://allyjfuller:railkey1@ds019876.mlab.com:19876/menew';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret'
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';