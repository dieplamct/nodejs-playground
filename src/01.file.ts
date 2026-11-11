import fs from "node:fs";
import path from "node:path";

const DEMO_PATH = path.join(process.cwd(), "demo_folder")
const RESULT_PATH = path.join(DEMO_PATH, "result.txt")

type FileResult = {
    name: string,
    path: string,
    size: number,
    extension?: string,
    content?: string
}

try {
    if (!fs.existsSync(DEMO_PATH)) {
        fs.mkdirSync(DEMO_PATH, { recursive: true });
    }
    fs.writeFileSync(RESULT_PATH, "Hello World!");
    fs.appendFileSync(RESULT_PATH, "Hello again!");
    console.log("File written successfully");
} catch (err) {
    console.error(err);
}

function readFilePromises(filePath: string): Promise<FileResult> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    name: path.basename(filePath),
                    path: filePath,
                    size: data.byteLength,
                    extension: path.extname(filePath),
                    content: data.toString("utf-8"),
                });
            }
        });
    });
}

readFilePromises(RESULT_PATH)
    .then((fileResult) => {
        console.log(fileResult);
    })
    .catch((err) => {
        console.error(err.message);
    });

try {
    const fileResult = await readFilePromises("/tmp/xyz.txt");
    console.log(fileResult);
} catch (error: Error | any) {
    console.error(error.message);
}

// fs.writeFileSync("output.txt", "Hello World!");

// fs.writeFile("output.txt", "Hello World!", (err) => {
//     if (err) throw err;
//     console.log("File written successfully");
// });

// try {
//     fs.writeFileSync("output.txt", "Hello World!");
//     console.log("File written successfully");
// } catch (err) {
//     console.error(err);
// }

// fs.readFile("output.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });