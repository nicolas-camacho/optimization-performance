import { generateLookupValues, generateTestData } from "./includes.js";


function run() {
    const data = generateTestData(10000);
    const dataSet = new Set(data);
    const lookupValues = generateLookupValues(data, 1000, 0.7);

    const idInterval = setInterval(() => {
        for (const value of lookupValues) {
            data.includes(value);
        }
    }, 0);

    setTimeout(() => {
        clearInterval(idInterval);
        console.log("Test finished");
    }, 20000);
}

run();