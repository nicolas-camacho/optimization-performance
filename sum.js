function sumUsingForeach(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

function sumUsingReduce(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function sumUsingForOf(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function sumUsingForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

Deno.bench({
    name: "ForEach method",
    fn: () => sumUsingForeach(largeArray),
});

Deno.bench({
    name: "Reduce method",
    fn: () => sumUsingReduce(largeArray),
})

Deno.bench({
    name: "For of loop",
    fn: () => sumUsingForOf(largeArray),
});

Deno.bench({
    name: "For loop",
    baseline: true,
    fn: () => sumUsingForLoop(largeArray),
});