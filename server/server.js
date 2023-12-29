const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./src/config/db");

const app = express();
dotenv.config();
db.connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.CORS_ORIGINS.split(", "),
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

//include route
const authRoutes = require("./src/routes/Auth.routes");
const menuRoutes = require("./src/routes/Menu.routes");

// Routes used in the app
app.use("/auth", authRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});