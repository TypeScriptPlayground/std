import * as operator from './operator/index.ts'
import * as constant from './constant/index.ts'
import * as method from './method/index.ts'
import * as error from './error/index.ts'

export function infixToPostfix(
  tokens: string[],
  operators : Record<string, operator.Definition>,
  constants : Record<string, constant.Definition>,
  methods : Record<string, method.Definition>
): string[] {
  const output: string[] = [];
  const stack: string[] = [];

  type TokenType = 'start' | 'number' | 'operator' | 'func' | 'openParen' | 'closeParen';
  let lastType: TokenType = 'start';

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      output.push(token);
      lastType = 'number';
    } else if (token in constants) {
      output.push(String(constants[token]));
      lastType = 'number';
    } else if (token in methods) {
      stack.push(token);
      lastType = 'func';
    } else if (token in operators) {
      // Syntax-Check: Operator darf nicht direkt nach einem Operator, nach 'start' oder nach '(' stehen
      if (lastType === 'start' || lastType === 'operator' || lastType === 'openParen') {
        throw new Error(`Ungültiger Ausdruck - unerwarteter Operator '${token}'`);
      }

      const o1 = token;
      while (
        stack.length &&
        (stack[stack.length - 1] in operators) &&
        (
          (operators[stack[stack.length - 1]].precedence > operators[o1].precedence) ||
          (operators[stack[stack.length - 1]].precedence === operators[o1].precedence &&
            operators[o1].associativity === 'LEFT')
        )
      ) {
        output.push(stack.pop()!);
      }
      stack.push(o1);
      lastType = 'operator';
    } else if (token === '(') {
      stack.push(token);
      lastType = 'openParen';
    } else if (token === ')') {
      // schließe Klammer: es muss eine vorherige offene Klammer geben
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop()!);
      }
      if (!stack.length) throw new Error("Ungültiger Ausdruck - fehlende öffnende Klammer '('");
      stack.pop(); // '(' entfernen
      if (stack.length && stack[stack.length - 1] in methods) {
        output.push(stack.pop()!);
      }
      lastType = 'closeParen';
    } else if (token === ',') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop()!);
      }
      if (!stack.length) throw new Error("Ungültiger Ausdruck - fehlendes '(' vor ','");
    } else {
      throw new error.UnknownTokenError(token);
    }
  }

  // Falls der Ausdruck mit einem Operator endet, ist das auch ein Fehler
  if (lastType === 'operator' || lastType === 'func' || lastType === 'openParen') {
    throw new Error("Ungültiger Ausdruck - Ausdruck endet unvollständig");
  }

  while (stack.length) {
    const t = stack.pop()!;
    if (t === '(' || t === ')') throw new Error("Ungültiger Ausdruck - Klammern nicht ausgeglichen");
    output.push(t);
  }

  return output;
}
