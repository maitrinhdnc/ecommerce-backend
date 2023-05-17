// init port

const app = require("./src/app");

const PORT = 3055
// start server

const server = app.listen(3055, () => {
    console.log(`WSV eCommerce start with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Express`))
    // app.notify.send(ping...)
})