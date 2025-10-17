import * as operator from "./operator/index.ts";
import * as method from "./method/index.ts";
import * as constant from "./constant/index.ts";
import { tokenize } from "./tokenize.ts";
import { infixToPostfix } from "./infix_to_postfix.ts";
import { evaluateRPN } from "./evaluate_rpn.ts";

export class Expression {
  private operators : Record<string, operator.Definition> = {...operator.defaults};
  private methods : Record<string, method.Definition> = {...method.defaults};
  private constants : Record<string, constant.Definition> = {...constant.defaults};
  constructor() {}

  public addOperator(
    operatorName : string,
    definition : operator.Definition
  ) {
    this.operators[operatorName] = definition;
    return this;
  }

  public addMethod(
    methodName : string,
    definition : method.Definition
  ) {
    this.methods[methodName] = definition;
    return this;
  }
  
  public addConstant(
    constantName : string,
    definition : constant.Definition
  ) {
    this.constants[constantName] = definition;
    return this;
  }

  public evaluate(expression : string) : number {
    const tokens = tokenize(expression, this.operators, this.constants);
    const rpn = infixToPostfix(tokens, this.operators, this.constants, this.methods);
    return evaluateRPN(rpn, this.operators, this.methods);
  }
}


