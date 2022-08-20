import { merge } from "lodash"

export const rootUrl = "<ROOT_URL_HERE>"
export const devUrl = "localhost:3000"
export const url = process.env.NODE_ENV === "development" ? devUrl : rootUrl

export function get(url: string, options?: object) {
  return _handleFetch(
    url,
    merge(
      {
        method: "GET"
      },
      options
    )
  )
}

export function post(url: string, body: object | string, options?: object) {
  return _handleFetch(
    url,
    merge(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      },
      options
    )
  )
}

export function put(url: string, body: object | string, options?: object) {
  return _handleFetch(
    url,
    merge(
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      },
      options
    )
  )
}

/**
 * Special function to handle file uploads
 */

export function upload(url: string, body: object | string, options?: object) {
  return _handleFetch(url, {
    method: "POST",
    body,
    ...options
  })
}

export function del(url: string, options?: object) {
  return _handleFetch(
    url,
    merge(
      {
        method: "DELETE"
      },
      options
    )
  )
}

// Private handler functions
async function _handleFetch(url: string, options: object) {
  merge(options, { mode: "cors" })

  return fetch(rootUrl + url, options).then(_handleResponse)
}

async function _handleResponse(response: Response) {
  if (response.status !== 200) {
    return response.text().then((text: string) => {
      let message = null

      try {
        const parsed = JSON.parse(text)
        message = parsed.message
      } catch (e) {
        message = text
      }

      return Promise.reject({
        status: response.status,
        message: message ? message : "An unexpected error occured: " + response.statusText
      })
    })
  }

  return response.text().then((text: string) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      return Promise.reject(data)
    }

    return data
  })
}
