import useSWR, { Fetcher } from "swr"

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("BASE_URL for API not set")
}

const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL

const fetcher: Fetcher = (url: string) => fetch(BASE_URL + url).then((r) => r.json())

const useData = (urlKey = "/") => {
  const { data, error } = useSWR(urlKey, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
let apiToken: string | undefined

export const setApiToken = (token: string | undefined) => (apiToken = token)

export async function apiPost<T>(path: string, body: any): Promise<T> {
  const headers: {
    Accept: string
    "Content-Type": string
  } = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  const response = await fetch(BASE_URL + path, {
    method: "post",
    headers,
    body: JSON.stringify(body),
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }

  return data
}

export const useBattleRoyale = (eventId: any) => {
  return useData(`/battle-royale/${eventId}`)
}

export default useData
