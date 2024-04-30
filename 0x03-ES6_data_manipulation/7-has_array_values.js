/**
 * A function that returns a boolean if exists
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
