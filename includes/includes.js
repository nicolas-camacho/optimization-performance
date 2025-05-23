function generateTestData(size) {
    const userIds = Array.from(
        { length: size },
        (_, i) => `user_${(i + 1000).toString(36)}`
    );

    const productIds = Array.from(
        { length: size },
        () => `product_${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    );

    const emails = Array.from(
        { length: size },
        (_, i) => `user${i}@${['gmail.com', 'yahoo.com', 'hotmail.com'][i % 3]}`
    )

    return [
        ...userIds,
        ...productIds,
        ...emails,
    ];
}

function generateLookupValues(data, lookupSize, hitRatio) {
    const lookupValues = []
    const hits = Math.floor(lookupSize * hitRatio);
    const misses = lookupSize - hits;

    for (let i = 0; i < hits; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        lookupValues.push(data[randomIndex]);
    }

    for (let i = 0; i < misses; i++) {
        lookupValues.push(`miss_${Math.random().toString(36).substring(2, 8)}`);
    }

    return lookupValues.sort(() => Math.random() - 0.5);
}

const data = generateTestData(10000);
const dataSet = new Set(data);
const lookupValues = generateLookupValues(data, 1000, 0.7);

Deno.bench({
    name: "Array includes",
    fn: () => {
        for (const value of lookupValues) {
            data.includes(value);
        }
    }
});

Deno.bench({
    name: "Set has",
    baseline: true,
    fn: () => {
        for (const value of lookupValues) {
            dataSet.has(value);
        }
    }
});

export {
    generateTestData,
    generateLookupValues,
}

