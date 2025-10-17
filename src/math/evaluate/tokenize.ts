import * as operator from './operator/index.ts'
import * as constant from './constant/index.ts'

export function tokenize(
  expr : string,
  operators : Record<string, operator.Definition>,
  constants : Record<string, constant.Definition>
): string[] {
  const regex = /([0-9]*\.?[0-9]+|[a-zA-Z]+|,|\S)/g;
  const raw = expr.replace(/\s+/g, '');
  const tokens = raw.match(regex) ?? [];

  const processed: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (
      token === '-' &&
      (
        i === 0 ||
        [...Object.keys(operators), '(', ','].includes(tokens[i - 1])
      )
    ) {
      // Negative Zahl (unär)
      const next = tokens[i + 1];
      if (next && !isNaN(Number(next))) {
        processed.push(String(-Number(next)));
        i++; // nächstes Token überspringen
      } else if (next && next in constants) {
        processed.push(String(-constants[next]));
        i++;
      } else {
        processed.push('-1');
        processed.push('*');
      }
    } else {
      processed.push(token);
    }
  }
  return processed;
}
