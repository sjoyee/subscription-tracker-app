const express = require("express");
const cors = require("cors");
const connectDB = require("../src/config/db");

const authRoutes = require("../src/routes/auth");
const activeRoutes = require("../src/routes/api/active");
const freeTrialRoutes = require("../src/routes/api/freetrial");
const userRoutes = require("../src/routes/api/user");
const adminUserRoutes = require("../src/routes/api/adminuser");

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

// for the /admin/user path
app.use("/api/user", userRoutes);

// for the /admin/user path
app.use("/admin/user", adminUserRoutes);

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
