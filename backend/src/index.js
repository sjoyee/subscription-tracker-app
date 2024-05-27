const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const activeRoutes = require("./routes/api/active");
const freeTrialRoutes = require("./routes/api/freetrial");

const app = express();
app.use(cors());
app.use(express.json());

// use the routes module as a middleware
// Use the authentication routes
app.use("/auth", authRoutes);

// for the /api/subscription/active path
app.use("/api/subscription/active", activeRoutes);

// for the /api/subscription/freetrial path
app.use("/api/subscription/freetrial", freeTrialRoutes);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
