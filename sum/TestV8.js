import { sumUsingForOf, sumUsingReduce, sumUsingForeach, sumUsingForLoop } from './sum.js';

function runTest(){
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);
    const testVar = sumUsingForLoop(largeArray);
    return {
        testVar,
        largeArray,
    }
} 

function run() {
    const result = {
        arraysCreated: 0,
        sumExecute: 0,
    }

    const idInterval = setInterval(() => {
        const _ = runTest();
        result.arraysCreated++;
        result.sumExecute++;
    }, 1000);

    setTimeout(() => {
        clearInterval(idInterval);
        console.log("Test finished");
        console.log("Arrays created: ", result.arraysCreated);
        console.log("Sum executed: ", result.sumExecute);
    }, 30000);
}

run();
