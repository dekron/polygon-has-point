export type IPoint = [number, number];
export type IPolygonFlat = number[];
export type IPolygonNested = IPoint[];
export type IPolygon = IPolygonFlat | IPolygonNested;

function nested(
  point: IPoint,
  vs: IPolygonNested,
  start?: number,
  end?: number
) {
  const x = point[0];
  const y = point[1];
  let inside = false;
  if (start === undefined) start = 0;
  if (end === undefined) end = vs.length;
  const len = end - start;
  for (let i = 0, j = len - 1; i < len; j = i++) {
    const xi = vs[i + start][0];
    const yi = vs[i + start][1];
    const xj = vs[j + start][0];
    const yj = vs[j + start][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function flat(point: IPoint, vs: IPolygonFlat, start?: number, end?: number) {
  const x = point[0];
  const y = point[1];
  let inside = false;
  if (start === undefined) start = 0;
  if (end === undefined) end = vs.length;
  const len = (end - start) / 2;
  for (let i = 0, j = len - 1; i < len; j = i++) {
    const xi = vs[start + i * 2];
    const yi = vs[start + i * 2 + 1];
    const xj = vs[start + j * 2];
    const yj = vs[start + j * 2 + 1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function pointInPolygon(
  point: IPoint,
  vs: IPolygon,
  start?: number,
  end?: number
) {
  if (vs.length > 0 && Array.isArray(vs[0])) {
    return nested(point, <IPolygonNested>vs, start, end);
  }
  return flat(point, <IPolygonFlat>vs, start, end);
}
export { nested, flat, pointInPolygon };
