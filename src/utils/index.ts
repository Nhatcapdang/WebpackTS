export function setKey(key: string, data: string) {
  localStorage.setItem(key, data)
}

export function getKey(key: string) {
  return localStorage.getItem(key)
}
