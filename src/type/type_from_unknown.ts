/**
 * This function creates a type from the parameter and enforces this type as return type. Use this function to convert
 * types from `any` or `unknown` to a defined type.
 * 
 * @template Type The type to create from the parameter.
 * @param parameter The parameter which has an `any` or `unknown` type.
 * @returns The parameter with the new type.
 */
export default function typeFromUnknown<Type extends unknown>(parameter : Type) : Type {
    return parameter as Type;
}
