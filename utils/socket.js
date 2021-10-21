const udp = require("dgram");
const DeviceUtils = require("../adapters/utils");

const server = udp.createSocket("udp4");

module.exports = () => {
    server.on("error", (error) => {
        throw new Error(error);
    });

    server.on("message", async(message, info) => {
        try {
            console.log("message", message.toString());
            await DeviceUtils.checkDeviceType(
                message.toString(),
                server,
                info.port,
                info.message
            );
        } catch (err) {
            console.log(err);
        }
        // console.log("message", message.toString(), info.address, info.port);
    });

    const port = process.env.UDP_SERVER_PORT;
    server.on("listening", () => {
        console.log(`UDP Server is running on port: ${port}`);
    });

    server.bind(port);

    return server;
};