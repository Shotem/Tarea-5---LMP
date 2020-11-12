const PROXY_CONFIG = {
    "/api/*": {
        "target": "https://swapi.dev",
        "changeOrigin": true,
        "secure": false,
        "logLevel": "debug"
    }
}

module.exports = PROXY_CONFIG;