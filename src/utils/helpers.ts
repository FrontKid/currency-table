export function getCurrentDate() {
  return new Date().toISOString().split('T').at(0)?.replace(/-/g, '');
}