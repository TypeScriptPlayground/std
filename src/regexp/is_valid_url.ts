/**
 * This function checks if the input string is a valid url.
 * 
 * @param input The url string
 * @returns If the url valid
 */
export default function isValidUrl(input : string) : boolean {
  const matchUrlPattern = new RegExp([
    '^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?',
    '(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$'
  ].join(''), 'i');

  return matchUrlPattern.test(input.trim());
}
