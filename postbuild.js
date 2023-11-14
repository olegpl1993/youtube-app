const fs = require("fs");
const path = require("path");

const sourcePath = path.join("dist", "index.html");
const destinationPath = path.join("dist", "404.html");

fs.readFile(sourcePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading ${sourcePath}:`, err);
    process.exit(1);
  }

  fs.writeFile(destinationPath, data, "utf8", (err) => {
    if (err) {
      console.error(`Error writing to ${destinationPath}:`, err);
      return process.exit(1);
    }

    console.log("Copied index.html to 404.html successfully.");
    process.exit(0);
  });
});
