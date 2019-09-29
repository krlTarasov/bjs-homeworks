function compareArrays (arr1, arr2 ) {
  if (arr1.length === arr2.length) return arr1.every((v,i) => v === arr2[i])
  return false;
}

console.log(compareArrays([8, 9], [6]), // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]), // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]), // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]), // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2])) // true

function memoize(fn, limit) {
  let results = [];
  return (...rest) => {
    if (results.some(v => compareArrays(v.args, rest))) {
      return results.find(v => compareArrays(v.args, rest)).result;
    }
    results.push({args: rest, result: fn(...rest)});
    if (results.length > limit) {
      results.shift();
    }
    return fn(...rest);
  };
}

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2);
console.log(mSum( 3, 4 )); // 7
console.log(mSum( 3, 4 )); // 7