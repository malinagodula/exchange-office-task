/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const { clientOrigins, serverPort } = require("./config/env.dev");
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
connectDB();

const messageRoutes = require("./routes/messageRoutes");
const dealRoutes = require("./routes/dealRoutes");
const userRoutes = require("./routes/userRoutes");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
        imgSrc: [
          "'self'",
          "data:",
          "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",
        ],
        connectSrc: ["'self'", "https://dev-obkep2cg.us.auth0.com/oauth/token"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'", "dev-obkep2cg.us.auth0.com"],
      },
    },
  })
);
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);
apiRouter.use("/messages", messageRoutes);
apiRouter.use("/deals", dealRoutes);
apiRouter.use("/users", userRoutes);
app.use(errorHandler);

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

/**
 * Server Activation
 */

app.listen(serverPort || process.env.PORT || 5000, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
