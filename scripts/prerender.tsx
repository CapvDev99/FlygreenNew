import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const indexPath = path.resolve("dist/public/index.html");
const html = readFileSync(indexPath, "utf8");
const root = '<div id="root"></div>';
if (!html.includes(root)) {
  throw new Error("The Vite HTML output has no empty React root to prerender.");
}

// Reuse Vite's JSX and alias transforms rather than maintaining a second build path.
const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const content = renderToString(React.createElement(App));
  if (!content.includes("Sustainable Aviation") || !content.includes("Our Partners")) {
    throw new Error("Home page content is missing from the server-rendered output.");
  }
  const notFound = html
    .replace(/<title>[^<]*<\/title>/, "<title>Page Not Found | FlyGreen24</title>")
    .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
    .replace('<link rel="canonical" href="https://flygreen24.com/" />', "")
    .replace(root, `<div id="root">${renderToString(React.createElement(App, { ssrPath: "/404" }))}</div>`);
  writeFileSync(path.resolve("dist/public/404.html"), notFound);
  writeFileSync(indexPath, html.replace(root, `<div id="root">${content}</div>`));
  console.log("Prerendered the homepage and generated a separate 404 page");
} finally {
  await vite.close();
}
