'use strict';

const redis = require('redis');

const redisClient = {
    client: null,

    getClient(callback) {
        if (!redisClient.client) {
            redisClient.client = redis.createClient(6379, 'localhost');
            redisClient.client.on('connect', () => {
                callback(null, redisClient.client);
            });
            redisClient.client.on('error', e => {
                redisClient.client.once('end', function () {
                    redisClient.client.quit();
                    redisClient.client = null;
                    callback(e);
                });
            });

            return;
        }

        callback(null, redisClient.client);
    }
};

module.exports = redisClient;
