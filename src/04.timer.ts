function setTimeoutExample(): void {
    console.log("1. setTimeout started");
    const id = setTimeout(() => {
        console.log("2. this callback run after 1000 ms");
        clearTimeout(id)
    }, 1000);
    console.log("3. setTimeout run immediately");
}

function runClearTimeOut(): void {
    const timeoutId = setTimeout(() => {
        console.log("4. This callback never run");
    }, 2000);
    console.log("5. clearTimeout");
    clearTimeout(timeoutId);
}

function runSetInterval(): void {
    console.log("5. setInterval started");
    let count = 0;

    const id = setInterval(() => {
        console.log(`7. this callback run after 500 ms & count: ${count}`);
        if (count === 5) {
            clearInterval(id);
        }
        count++;
    }, 500);
    console.log("8. setInterval run immediately");
}

setTimeoutExample();
runClearTimeOut();
runSetInterval();

// console.log("4. SetTimeout run immediately");