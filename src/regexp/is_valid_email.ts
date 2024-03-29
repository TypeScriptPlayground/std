/**
 * This function checks if the input string is a valid email address.
 * 
 * [RFC 822](https://pdw.ex-parrot.com/Mail-RFC822-Address.html) |
 * [RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322)
 * 
 * @param input The email address string
 * @returns If the email is valid
 */
export default function isValidEmail(input : string) : boolean {
  const matchEmailPattern = new RegExp([
    '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21',
    '\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+',
    '[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4]',
    '[0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|',
    '\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'
  ].join(''));

  return matchEmailPattern.test(input.trim());
}
