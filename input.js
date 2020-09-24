const { MAP } = require('./constants');
let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;

    const handleUserInput = function(key) {
        if (key === '\u0003') {
            process.exit();
        } else if (MAP[key]) {
            connection.write(MAP[key]);
        }
    }
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
}

module.exports = { setupInput };