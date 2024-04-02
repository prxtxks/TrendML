// app/app.js minimal
import express from "express";
import session from "express-session";
import { shopify } from "./config/shopify.js";
import routes from "./routes/index.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Shopify session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Shopify auth middleware
app.use(shopify.cspHeaders());
app.use("/api/auth", shopify.authRouter);

// App routes
app.use("/api", routes);

// Global error handler
app.use(errorHandler);

export default app;