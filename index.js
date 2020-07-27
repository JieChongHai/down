const fs = require("fs");
const path = require("path");
const request = require("request");

const dirPath = path.join(__dirname, "file");
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("文件夹创建成功");
} else {
    console.log("文件夹已存在");
}
const data = fs.readFileSync('extend.txt');
const arr = data.toString().split('\n').slice(0,-1)



// for (let i = 0; i < arr.length; i++) {
//   const publisher = arr[i].split('@')[0].split('.')[0]
//   const name = arr[i].split('@')[0].split('.')[1]
//   const version = arr[i].split('@')[1]
//   const fileName = `${publisher}.${name}-${version}.vsix`
//   const url = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/` + 
//             `${publisher}/vsextensions/${name}/${version}/vspackage`
//   const stream = fs.createWriteStream(path.join(dirPath, fileName));
//   request(url).pipe(stream).on("close", function (err) {
//       console.log(`文件${i} [${fileName}]下载完毕`);
//   });
// }