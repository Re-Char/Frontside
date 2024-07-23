async function Socket() {
    const client = new WebSocket("ws://127.0.0.1:7001")

    client.onopen = () => {
        console.log("client connected")
        client.send("I love Hu Ran.")
    }

    client.onmessage = (message) => {
        console.log(message.data)
    }
}