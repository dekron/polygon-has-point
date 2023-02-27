# Polygon has point

Небольшая библиотека для определения находится ли точка внутри полигона

## Возможности

- Работает с полигонами которые имеют дыры
- Возвращает 0 если точка на границе
- Работает с дробными числами

## Использование
```js
const { pointInPolygon } = require('polygon-has-point');

const polygon = [[
  [0, 0],
  [1, 0],
  [1, 1],
  [0, 1],
  [0, 0],
]];
console.log(pointInPolygon([2, 1], polygon)); // false
console.log(pointInPolygon([-1, 1], polygon)); // false
console.log(pointInPolygon([0, 0], polygon)); // 0 => означает, что точка на границе
console.log(pointInPolygon([0, 1], polygon)); // 0
console.log(pointInPolygon([1, 1], polygon)); // 0
console.log(pointInPolygon([1, 0], polygon)); // 0
console.log(pointInPolygon([0.5, 0.5], polygon)); // true
```

**Примечание**: Формат входного полигона соответствует спецификации GeoJSON для полигонов. Это означает, что первая и последняя координата в многоугольнике должны повторяться, в противном случае эта библиотека выдаст ошибку.

```js
const polygonWithHole = [
  [
    [0, 0], [1, 0], [1, 1], [0, 1], [0, 0]
  ],
  [
    [0.1, 0.1], [0.1, 0.9], [0.9, 0.9], [0.9, 0.1], [0.1, 0.1]
  ]
]
```

## Лицензия

MIT
