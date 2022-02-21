// Index the files in the given directory,
// producing an `index.json` in the `src/` dir.
// This file will contain a JSON array of all files.

// Usage:
// node index-assets.js <relative path from project root>

// Output: A file named `<dir>.json` in `src/`

const path = require('path');
const fs = require('fs').promises;

async function main() {
    let indexed = [];

    const directoryPath = path.join(__dirname, process.argv[2]);
    console.log(directoryPath);
    const categoryName = directoryPath.split("/").at(-2);
    const indexPath = "src/" + categoryName + ".json";

    // List files in assets directory
    let files = await fs.readdir(directoryPath)

    // Filter txt and json files (like the index.json we're generating)
    files = files.filter(f => 
        !f.includes(".txt")
        && !f.includes(".json"));

    // Fix URLs to be relative to `public`.
    files = files.map(url => "assets/" + categoryName + "/" + url);

    // dump to index.json
    await fs.writeFile(indexPath, JSON.stringify(files));

}

main().then(_ => console.log("done!"))
