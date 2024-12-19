// The root api url, eg.: https://api.service.com
export const apiUrl = ''

// Checks wether the site is viewed in a local server or not
export const isDev = Boolean(
  window.location.hostname === 'localhost'
  // [::1] is the IPv6 localhost address.
  || window.location.hostname === '[::1]'
  // 127.0.0.1/8 is considered localhost for IPv4.
  || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})){3}$/),
)
