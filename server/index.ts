import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Only the eventual production domain should be eligible for indexing.
  app.use((req, res, next) => {
    if (!["flygreen24.com", "www.flygreen24.com"].includes(req.hostname.toLowerCase())) {
      res.set("X-Robots-Tag", "noindex");
    }
    next();
  });

  app.use(express.static(staticPath));

  // Keep unknown SPA routes out of the search index instead of returning a soft 404.
  app.get("*", (_req, res) => {
    res.status(404).sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
