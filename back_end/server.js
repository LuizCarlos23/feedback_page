require('dotenv/config');
const express = require("express")
const configApp = require("./src/config/serverConfig")
const PORT = process.env.SERVER_PORT || 9937

const app = configApp(express)


app.listen(PORT, () => {
    console.log(`Server open on http://localhost:${PORT}`)
})

