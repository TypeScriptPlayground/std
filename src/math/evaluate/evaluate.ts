import parseString from './parse_string.ts';
import { tokenValues } from './tokens.ts';

export default function evaluate(expression : string) : number {
  const parts = parseString(expression, tokenValues);

  parts.forEach((part) => {
    switch (part) {
      case value:
        
        break;
    
      default:
        break;
    }
  })

  return 0;
}
