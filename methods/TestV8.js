import { PerformClassic, PerformMethods } from "./methods.js";

const numbers = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

function run() {
    const idInterval = setInterval(() => {
        const _ = PerformClassic(numbers);
    }, 0);

    setTimeout(() => {
        clearInterval(idInterval);
        console.log("Test finished");
    }, 20000);
}

run();