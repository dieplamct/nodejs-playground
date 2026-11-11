import { log } from "node:console";

function doStep1Sync(init: number): number {
    return init + 1;
}

function doStep2Sync(init: number): number {
    return init + 2;
}

function doStep3Sync(init: number): number {
    return init + 3;
}

function doStep1Async(init: number, callback: { (res1: any): void; (arg0: number): void; }): void {
    const result = init + 1;
    callback(result);
}

function doStep2Async(init: number, callback: { (res2: any): void; (arg0: number): void; }): void {
    const result = init + 2;
    callback(result);
}

function doStep3Async(init: number, callback: { (res3: any): void; (arg0: number): void; }): void {
    const result = init + 3;
    callback(result);
}

function doOperation(): void {
    let result = 0;

    // result = doStep1Sync(result);
    // result = doStep2Sync(result);
    // result = doStep3Sync(result);
    // console.log(`result: ${result}`);
    doStep1Async(result, (res1: number) => {
        doStep2Async(res1, (res2: number) => {
            doStep3Async(res2, (res3: any) => {
                console.log(`result: ${res3}`);
            })
        })
    });
}

doOperation();
log("DONE")