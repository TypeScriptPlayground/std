type Keys =
  | "accept"
  | "accept-encoding"
  | "accept-language"
  | "connection"
  | "host"
  | "referer"
  | "sec-ch-ua"
  | "sec-ch-ua-mobile"
  | "sec-ch-ua-platform"
  | "sec-fetch-dest"
  | "sec-fetch-mode"
  | "sec-fetch-site"
  | "user-agent"
  // deno-lint-ignore ban-types
  | (string & {})

/**
 * This function parses a Headers object and returns it as a parsed object.
 * 
 * @param headers Header that should get parsed
 * @returns The parsed header
 */
export default function parseHeaders(headers : Headers) : Record<Keys, string> {
  const header : Record<Keys | string, string> = {};
  for(const [key, value] of headers.entries()) {
    header[key] = value;
  };
  return header;
}
