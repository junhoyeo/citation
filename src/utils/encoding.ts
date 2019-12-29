export const encodeString = (value: string): string => (
  window.btoa(
    encodeURIComponent(value)
  )
    .replace(/\./gi, '+')
    .replace(/_/gi, '/')
    .replace(/-/gi, '=')
);

export const decodeString = (encoded: string): string => (
  decodeURIComponent(
    window.atob(encoded),
  )
    .replace(/\+/gi, '.')
    .replace(/\//gi, '_')
    .replace(/=/gi, '-')
);
