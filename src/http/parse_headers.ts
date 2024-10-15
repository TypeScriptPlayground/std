/**
 * This function parses a Headers object and returns it as a parsed object.
 * 
 * @param headers Header that should get parsed
 * @returns The parsed header
 */
export default function parseHeaders(headers : Headers) : Record<string, string> {
  const header : Record<string, string> = {};
  for(const [key, value] of headers.entries()) {
    header[key] = value;
  };
  return header;
}
