const flattenArray = (arr) => {
  const queue = [...arr];
  const result = [];

  while (queue.length > 0) {
    const item = queue.pop();

    if (item instanceof Array) {
      queue.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
};

console.log(flattenArray([1, [10, 12], [[2, 4, [999]], 7], 190]));
// [1, 10, 12, 2, 4, 999, 7, 190]