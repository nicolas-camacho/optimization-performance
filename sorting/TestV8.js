import { quickSort, bubbleSort } from "./sorting.js";

function runTest() {
    const testArray = Array.from(
        { length: 10000 },
        () => Math.floor(Math.random() * 10000)
    );

    const testVar = bubbleSort(testArray);
    return {
        testVar,
        testArray,
    };
}

function run() {
    const result = {
        arraysCreated: 0,
        sortExecute: 0,
    };

    const idInterval = setInterval(() => {
        const _ = runTest();
        result.arraysCreated++;
        result.sortExecute++;
    }, 0);

    setTimeout(() => {
        clearInterval(idInterval);
        console.log("Test finished");
        console.log("Arrays created: ", result.arraysCreated);
        console.log("Sort executed: ", result.sortExecute);
    }, 20000);
}

run();

