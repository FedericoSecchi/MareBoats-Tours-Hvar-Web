export type GeoCoords = { lon: number; lat: number };

function encodeValue(delta: number): string {
  let v = Math.round(delta * 1e5);
  v = v < 0 ? ~(v << 1) : v << 1;
  let out = '';
  while (v >= 0x20) {
    out += String.fromCharCode((0x20 | (v & 0x1f)) + 63);
    v >>= 5;
  }
  out += String.fromCharCode(v + 63);
  return out;
}

function encodePolyline(coords: GeoCoords[]): string {
  let out = '';
  let prevLat = 0;
  let prevLon = 0;
  for (const { lat, lon } of coords) {
    out += encodeValue(lat - prevLat);
    out += encodeValue(lon - prevLon);
    prevLat = lat;
    prevLon = lon;
  }
  return out;
}

export function getMapboxStaticUrl(
  from: GeoCoords,
  to: GeoCoords,
  width = 400,
  height = 265,
): string | null {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) return null;

  const accentHex = '3BC9DB';
  const polyline = encodePolyline([from, to]);
  const path = `path-3+${accentHex}-0.8(${encodeURIComponent(polyline)})`;
  const pinFrom = `pin-s-harbor+${accentHex}(${from.lon},${from.lat})`;
  const pinTo = `pin-l+${accentHex}(${to.lon},${to.lat})`;
  const overlays = [path, pinFrom, pinTo].join(',');

  return (
    `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/` +
    `${overlays}/auto/${width}x${height}?padding=40&access_token=${token}`
  );
}
