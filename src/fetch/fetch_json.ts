/**
 * This function fetches JSON data from the provided input and returns the result specified as the
 * `ResultObject`.
 * 
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)
 * 
 * @param input The input resource that you wish to fetch
 * @param init An object containing any custom settings that you want to apply to the request
 */
export default function fetchJson<ResultObject>(
    input : RequestInfo | URL,
    init?: RequestInit
) : Promise<ResultObject> {
    return fetch(
        input,
        init
    ).then((response) => response.json() as ResultObject)
}
