export function setKey<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function getKey<T>(key: string): T {
  const data = localStorage.getItem(key)
  return JSON.parse(data as string)
}
