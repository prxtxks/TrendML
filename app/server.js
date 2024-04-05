// app/server.js
import app from "./app.js";
import { shopify } from "./config/shopify.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  await shopify.db.connect();

  app.listen(PORT, () => {
    console.log(`TrendML backend running on port ${PORT}`);
  });
}

startServer();