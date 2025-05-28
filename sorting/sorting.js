function bubbleSort(arr) {
  const n = arr.length;
  const result = [...arr];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const result = [...arr];

  function partition(low, high) {
    const pivot = result[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (result[j] < pivot) {
        i++;
        [result[i], result[j]] = [result[j], result[i]];
      }
    }

    [result[i + 1], result[high]] = [result[high], result[i + 1]];
    return i + 1;
  }

  function quickSortHelper(low, high) {
    if (low < high) {
      const pivotIndex = partition(low, high);
      quickSortHelper(low, pivotIndex - 1);
      quickSortHelper(pivotIndex + 1, high);
    }
  }

  quickSortHelper(0, result.length - 1);
  return result;
}

const testArray = Array.from({ length: 10_000 }, () =>
  Math.floor(Math.random() * 10000),
);

Deno.bench({
  name: "Bubble Sort",
  fn: () => bubbleSort(testArray),
});

Deno.bench({
  name: "Quick Sort",
  fn: () => quickSort(testArray),
});

Deno.bench({
  name: "JS Sort",
  baseline: true,
  fn: () => testArray.toSorted(),
});

export { bubbleSort, quickSort };
