const express = require("express");

// Middleware imports
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

// Environment variables
const config = require("./config.json");

const app = express();

// Middleware handling
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: config.PRODUCTION },
    name: "_session_uuid"
}));

// Route handling
const routeCollection = require("./routes/collection");
routeCollection.forEach(route => {
    app.use(route.path, route.router);
});

// Request unhandled
app.use((req, res) => {
    res.status(404).json({
        message: "API ENDPOINT DOES NOT EXIST"
    });
});

app.listen(config.PORT, () => console.log(`Express server up and running on PORT: ${config.PORT}`));