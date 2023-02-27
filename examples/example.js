const { pointInPolygon } = require('../dist');

const polygon = [[
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
]];
console.log(pointInPolygon([2, 1], polygon)); // false
console.log(pointInPolygon([-1, 1], polygon)); // false
console.log(pointInPolygon([0, 0], polygon)); // 0 => indicate on edge
console.log(pointInPolygon([0, 1], polygon)); // 0
console.log(pointInPolygon([1, 1], polygon)); // 0
console.log(pointInPolygon([1, 0], polygon)); // 0
console.log(pointInPolygon([0.5, 0.5], polygon)); // true
