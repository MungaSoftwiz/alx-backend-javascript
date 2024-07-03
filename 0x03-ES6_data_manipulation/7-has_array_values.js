export default function hasValuesFromArray(set, array) {
  let allPresent = true;

  array.forEach((value) => {
    if (!set.has(value)) {
      allPresent = false;
    }
  });

  return allPresent;
}
