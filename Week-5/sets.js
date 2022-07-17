function isDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(isDuplicate([5, -1, 0, 2, 3]) ? "Duplicate" : "No Duplicates");
console.log(
  isDuplicate([5, -1, 0, 2, 3, 5]) ? "Has Duplicates" : "No Duplicates"
);
