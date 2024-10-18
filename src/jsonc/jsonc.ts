export const JSONC = {
  parse: (text : string, reviver?: (this: unknown, key: string, value: unknown) => unknown) => {
    text = text.replace(/((")(?:\\[\s\S]|.)*?\2|\/(?![*\/])(?:\\.|\[(?:\\.|.)\]|.)*?\/)|\/\/.*?$|\/\*[\s\S]*?\*\//gm, '$1');
    return JSON.parse(text, reviver);
  },
  stringify: JSON.stringify
}
