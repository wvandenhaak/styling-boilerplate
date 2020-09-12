const liveServer = require("live-server");

//Responsible for creating live-server
try {
    // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    console.log('\x1b[32m%s\x1b[0m', 'Creating Live-Server');

    // https://www.npmjs.com/package/live-server
    var params = {
        port: 8080,
        host: "127.0.0.1",
        root: "public",
        open: true,
        wait: 0
    }

    liveServer.start(params)
} catch (e) {
    console.log(e)
}
