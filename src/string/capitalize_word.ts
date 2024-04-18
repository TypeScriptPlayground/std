export function capitalizeWord(word : string) : string {
  return word ? word?.[0]?.toLocaleUpperCase() + word.slice(1).toLocaleLowerCase() : word;
}
