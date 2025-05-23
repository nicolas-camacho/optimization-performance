const numbers = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

function PerformMethods(data) {
    const result = data.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    return result;
}

function PerformClassic(data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            result += data[i];
        }
    }
    return result;
}

Deno.bench({
    name: "JS methods",
    fn: () => PerformMethods(numbers),
});

Deno.bench({
    name: "Basic way",
    baseline: true,
    fn: () => PerformClassic(numbers),
});

export {
    PerformMethods,
    PerformClassic,
}