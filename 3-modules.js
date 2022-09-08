const os = require("os");
const path = require("path");

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
// console.log(path.basename('/Users/Refsnes/demo_path.js'));
console.log(__dirname);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
