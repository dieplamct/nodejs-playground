// import http from 'node:http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

function arraySum(arr: number[]): number {
    let result = 0
    if (typeof arr === 'object' && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
        }
    }
    return result
}

const val = arraySum([-1, -6, -7, -8, 20])
console.log(val)

// server.listen(port, hostname, () => {
//     console.log(`Server running at: http://${hostname}:${port}/`);
// });
