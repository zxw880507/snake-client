const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
    const client = net.createConnection({
        host: IP,
        port: PORT
    });
    // interpret incoming data as text
    client.setEncoding('utf8');

    return client;
};

module.exports = { connect };