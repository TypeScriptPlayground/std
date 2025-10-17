import * as operator from './operator/index.ts'
import * as method from './method/index.ts'
import * as error from './error/index.ts';

export function evaluateRPN(
  rpn : string[],
  operators : Record<string, operator.Definition>,
  methods : Record<string, method.Definition>
) : number {
  const stack: number[] = [];

  for (const token of rpn) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } 
    else if (token in operators) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined)
        throw new Error(`Ungültiger Ausdruck - fehlender Operand für '${token}'`);

      const def = operators[token];

      if (def.checkFn && !def.checkFn(a, b)) {
        throw new error.InvalidOperatorValueError(token, a, b);
      }

      stack.push(def.calculateFn(a, b));
    } 
    else if (token in methods) {
      const def = methods[token];
      const args: number[] = [];

      for (let i = 0; i < def.calculateFn.length; i++) {
        const arg = stack.pop();
        if (arg === undefined) throw new Error(`Ungültiger Ausdruck - fehlendes Argument für '${token}'`);
        args.unshift(arg);
      }

      if (def.checkFn && !def.checkFn(...args)) {
        throw new error.InvalidMethodValueError(token, args)
      }

      const result = def.calculateFn(...args);

      if (Number.isNaN(result) || !Number.isFinite(result))
        throw new Error(`Ungültiges Ergebnis in Funktion '${token}'`);

      stack.push(result);
    } 
    else {
      throw new error.UnknownTokenError(token);
    }
  }

  if (stack.length !== 1) throw new Error("Ungültiger Ausdruck");

  return stack[0];
}
