const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return
  // Aparece no teste, mas não precisa testar isso

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return
  // Aparece no teste, mas não precisa testar isso

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
