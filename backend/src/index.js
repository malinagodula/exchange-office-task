/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { clientOrigins, serverPort } = require("./config/env.dev");
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
connectDB();

const messageRoutes = require("./routes/messageRoutes");
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);
apiRouter.use("/messages", messageRoutes);
apiRouter.use("/goals", goalRoutes);
apiRouter.use("/users", userRoutes);
app.use(errorHandler);

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
